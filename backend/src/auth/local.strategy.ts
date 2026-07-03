import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({ usernameField: 'phone' });
  }

  async validate(phone: string, password: string): Promise<any> {
    const user = await this.usersService.findByPhone(phone);
    if (!user) {
      throw new UnauthorizedException('手机号或密码错误');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('手机号或密码错误');
    }

    return user;
  }
}