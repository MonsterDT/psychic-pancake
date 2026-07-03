import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from '../users/users.dto';
import { WechatMiniprogramLoginDto, LoginResponseDto } from './auth.dto';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { User, LoginType } from '../users/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  async validateUser(phone: string, password: string): Promise<any> {
    const user = await this.usersService.findByPhone(phone);
    if (!user) return null;

    const isPasswordValid = require('bcryptjs').compareSync(password, user.password_hash);
    if (!isPasswordValid) return null;

    const { password_hash, ...result } = user;
    return result;
  }

  async login(user: User): Promise<LoginResponseDto> {
    const payload = { username: user.name, sub: user.id };
    return {
      id: user.id,
      name: user.name,
      avatar: user.avatar || '',
      token: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: this.configService.get('JWT_REFRESH_EXPIRES_IN') }),
      isNewUser: false,
    };
  }

  async wechatMiniprogramLogin(dto: WechatMiniprogramLoginDto): Promise<LoginResponseDto> {
    const appId = this.configService.get('WECHAT_APP_ID');
    const appSecret = this.configService.get('WECHAT_APP_SECRET');

    const response = await firstValueFrom(
      this.httpService.get(
        `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${dto.code}&grant_type=authorization_code`,
      ),
    );

    const { openid, session_key, unionid } = response.data;

    let user = await this.usersService.findByWechatOpenid(openid);
    let isNewUser = false;

    if (!user) {
      user = await this.usersService.create({
        name: '微信用户',
        login_type: LoginType.WECHAT,
      });
      isNewUser = true;
    }

    await this.usersService.updateWechatInfo(user.id, openid, unionid, session_key);

    const payload = { username: user.name, sub: user.id };
    return {
      id: user.id,
      name: user.name,
      avatar: user.avatar || '',
      token: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: this.configService.get('JWT_REFRESH_EXPIRES_IN') }),
      isNewUser,
      openId: openid,
    };
  }

  async refreshToken(refreshToken: string): Promise<{ token: string; refreshToken: string }> {
    const decoded = this.jwtService.verify(refreshToken);
    const user = await this.usersService.findOne(decoded.sub);

    const payload = { username: user.name, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, { expiresIn: this.configService.get('JWT_REFRESH_EXPIRES_IN') }),
    };
  }
}