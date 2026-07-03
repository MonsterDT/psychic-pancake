import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { TemplatesService } from './templates.service';
import { CreateTemplateDto, TemplateQueryDto } from './templates.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('templates')
@ApiTags('模板管理')
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() createTemplateDto: CreateTemplateDto) {
    return this.templatesService.create(createTemplateDto);
  }

  @Get()
  findAll(@Query() query: TemplateQueryDto) {
    return this.templatesService.findAll(query);
  }

  @Get('library-feed')
  getLibraryFeed() {
    return this.templatesService.getLibraryFeed();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.templatesService.findOne(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateTemplateDto: Partial<CreateTemplateDto>) {
    return this.templatesService.update(id, updateTemplateDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.templatesService.remove(id);
  }

  @Post(':id/like')
  incrementLikes(@Param('id') id: string) {
    return this.templatesService.incrementLikes(id);
  }

  @Post(':id/collect')
  incrementCollections(@Param('id') id: string) {
    return this.templatesService.incrementCollections(id);
  }
}