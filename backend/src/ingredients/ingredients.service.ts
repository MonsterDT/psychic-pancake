import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient } from './ingredients.entity';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,
  ) {}

  async findAll(): Promise<Ingredient[]> {
    return this.ingredientRepository.find();
  }

  async findOne(id: string): Promise<Ingredient> {
    const ingredient = await this.ingredientRepository.findOne({ where: { id } });
    if (!ingredient) {
      throw new NotFoundException('成分不存在');
    }
    return ingredient;
  }

  async searchByName(name: string): Promise<Ingredient[]> {
    return this.ingredientRepository.createQueryBuilder('ingredient')
      .where('ingredient.name LIKE :name', { name: `%${name}%` })
      .orWhere('ingredient.alias LIKE :name', { name: `%${name}%` })
      .getMany();
  }

  async analyzeIngredients(ingredientList: string[]): Promise<{
    safe: Ingredient[];
    low: Ingredient[];
    medium: Ingredient[];
    high: Ingredient[];
    unknown: string[];
    summary: string;
  }> {
    const safe: Ingredient[] = [];
    const low: Ingredient[] = [];
    const medium: Ingredient[] = [];
    const high: Ingredient[] = [];
    const unknown: string[] = [];

    for (const name of ingredientList) {
      const ingredients = await this.searchByName(name.trim());
      if (ingredients.length > 0) {
        const ingredient = ingredients[0];
        switch (ingredient.risk_level) {
          case 'safe':
            safe.push(ingredient);
            break;
          case 'low':
            low.push(ingredient);
            break;
          case 'medium':
            medium.push(ingredient);
            break;
          case 'high':
            high.push(ingredient);
            break;
        }
      } else {
        unknown.push(name);
      }
    }

    let summary = '成分分析结果：';
    if (high.length > 0) {
      summary += `发现${high.length}种高风险成分，请慎用！`;
    } else if (medium.length > 0) {
      summary += `发现${medium.length}种中等风险成分，敏感肌需谨慎使用。`;
    } else {
      summary += '成分相对安全，可以放心使用。';
    }

    return { safe, low, medium, high, unknown, summary };
  }
}