import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IngredientsService } from './ingredients.service';

@Controller('ingredients')
@ApiTags('成分分析')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Get()
  findAll() {
    return this.ingredientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientsService.findOne(id);
  }

  @Get('search')
  search(@Query('name') name: string) {
    return this.ingredientsService.searchByName(name);
  }

  @Post('analyze')
  analyze(@Body('ingredients') ingredients: string[]) {
    return this.ingredientsService.analyzeIngredients(ingredients);
  }
}