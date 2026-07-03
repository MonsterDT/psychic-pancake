import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MakeupTemplate } from '../templates/templates.entity';
import { Product } from '../products/products.entity';
import { Ingredient } from '../ingredients/ingredients.entity';
import { creatorSeeds } from './data/creators.seed';
import { tutorialSeeds } from './data/tutorials.seed';
import { qaSeeds } from './data/qa.seed';
import { guofengSeeds } from './data/guofeng.seed';
import { silverSeeds } from './data/silver.seed';
import { brandsSeeds } from './data/brands.seed';
import { celebritiesSeeds } from './data/celebrities.seed';
import { productSeeds } from './data/products.seed';
import { ingredientSeeds } from './data/ingredients.seed';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(MakeupTemplate)
    private readonly templateRepository: Repository<MakeupTemplate>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,
  ) {}

  async seed() {
    await this.seedTemplates();
    await this.seedProducts();
    await this.seedIngredients();
    return { success: true, message: '数据导入完成' };
  }

  async refresh() {
    await this.templateRepository.delete({});
    await this.productRepository.delete({});
    await this.ingredientRepository.delete({});
    return await this.seed();
  }

  private async seedTemplates() {
    const allSeeds = [
      ...creatorSeeds,
      ...tutorialSeeds,
      ...qaSeeds,
      ...guofengSeeds,
      ...silverSeeds,
      ...brandsSeeds,
      ...celebritiesSeeds,
    ];

    for (const seed of allSeeds) {
      const existing = await this.templateRepository.findOne({ where: { id: seed.id } });
      if (!existing) {
        const template = this.templateRepository.create({
          id: seed.id,
          title: seed.title,
          cover_image: seed.coverImage,
          category: seed.category,
          tag: seed.tag,
          likes: seed.likes,
          collections: seed.collections || 0,
          difficulty: seed.difficulty,
          duration: seed.duration,
          suitable_for: seed.suitableFor,
          effect: seed.effect,
          type: seed.type,
          metadata: seed.metadata,
          is_official: seed.isOfficial || false,
        });
        await this.templateRepository.save(template);
      }
    }
  }

  private async seedProducts() {
    for (const seed of productSeeds) {
      const existing = await this.productRepository.findOne({ where: { id: seed.id } });
      if (!existing) {
        const product = this.productRepository.create({
          id: seed.id,
          name: seed.name,
          description: seed.description,
          image: seed.image,
          price: seed.price,
          original_price: seed.originalPrice,
          category: seed.category,
          brand: seed.brand,
          spec: seed.spec,
          effect: seed.effect,
          sales: seed.sales,
          stock: seed.stock,
        });
        await this.productRepository.save(product);
      }
    }
  }

  private async seedIngredients() {
    for (const seed of ingredientSeeds) {
      const existing = await this.ingredientRepository.findOne({ where: { id: seed.id } });
      if (!existing) {
        const ingredient = this.ingredientRepository.create({
          id: seed.id,
          name: seed.name,
          alias: seed.alias,
          risk_level: seed.riskLevel,
          description: seed.description,
          effects: seed.effects,
          side_effects: seed.sideEffects,
          suitable_for: seed.suitableFor,
          unsuitable_for: seed.unsuitableFor,
        });
        await this.ingredientRepository.save(ingredient);
      }
    }
  }
}