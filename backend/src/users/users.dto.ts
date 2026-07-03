import { IsString, IsOptional, IsEmail, IsPhoneNumber, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  avatar?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsPhoneNumber('CN')
  phone?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @MinLength(6)
  password?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  skin_type?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  preferences?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  health_info?: string;
}

export class UpdateUserDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  avatar?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  skin_type?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  preferences?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  health_info?: string;
}

export class LoginDto {
  @ApiProperty()
  @IsPhoneNumber('CN')
  phone: string;

  @ApiProperty()
  @MinLength(6)
  password: string;
}