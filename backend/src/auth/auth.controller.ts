import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from '../common/guards/local-auth.guard';
import { WechatMiniprogramLoginDto } from './auth.dto';

@Controller('auth')
@ApiTags('认证管理')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('wechat-miniprogram')
  async wechatMiniprogramLogin(@Body() dto: WechatMiniprogramLoginDto) {
    return this.authService.wechatMiniprogramLogin(dto);
  }

  @Post('refresh')
  async refreshToken(@Body('refreshToken') refreshToken: string) {
    return this.authService.refreshToken(refreshToken);
  }
}