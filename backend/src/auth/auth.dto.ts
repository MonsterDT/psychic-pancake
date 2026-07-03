import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class WechatMiniprogramLoginDto {
  @ApiProperty()
  @IsString()
  code: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  encryptedData?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  iv?: string;
}

export class LoginResponseDto {
  id: string;
  name: string;
  avatar: string;
  token: string;
  refreshToken: string;
  isNewUser: boolean;
  openId?: string;
}