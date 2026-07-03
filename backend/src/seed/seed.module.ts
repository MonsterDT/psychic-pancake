import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedService } from './seed.service';
import { MakeupTemplate } from '../templates/templates.entity';
import { Product } from '../products/products.entity';
import { Ingredient } from '../ingredients/ingredients.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MakeupTemplate, Product, Ingredient])],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule {}