import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemplatesService } from './templates.service';
import { TemplatesController } from './templates.controller';
import { MakeupTemplate } from './templates.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MakeupTemplate])],
  providers: [TemplatesService],
  controllers: [TemplatesController],
})
export class TemplatesModule {}