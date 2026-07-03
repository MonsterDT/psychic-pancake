import { IsString, IsOptional, IsNumber, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTemplateDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  coverImage: string;

  @ApiProperty()
  @IsString()
  category: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  tag?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  difficulty?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  duration?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsArray()
  suitableFor?: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  effect?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty({ required: false })
  @IsOptional()
  metadata?: Record<string, any>;
}

export class TemplateQueryDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  tag?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  type?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  page?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  limit?: number;
}