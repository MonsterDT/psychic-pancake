import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';
import { CreateProductDto, ProductQueryDto } from './products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create({
      name: createProductDto.name,
      description: createProductDto.description,
      image: createProductDto.image,
      price: createProductDto.price,
      original_price: createProductDto.originalPrice,
      category: createProductDto.category,
      brand: createProductDto.brand,
      spec: createProductDto.spec,
      effect: createProductDto.effect,
      ingredients: createProductDto.ingredients,
      stock: createProductDto.stock || 0,
    });
    return this.productRepository.save(product);
  }

  async findAll(query: ProductQueryDto): Promise<{ data: Product[]; total: number }> {
    const { category, brand, keyword, page = 1, limit = 10 } = query;

    const queryBuilder = this.productRepository.createQueryBuilder('product');

    if (category) {
      queryBuilder.where('product.category = :category', { category });
    }
    if (brand) {
      queryBuilder.andWhere('product.brand = :brand', { brand });
    }
    if (keyword) {
      queryBuilder.andWhere('product.name LIKE :keyword', { keyword: `%${keyword}%` });
    }

    queryBuilder.orderBy('product.sales', 'DESC');

    const [data, total] = await queryBuilder
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { data, total };
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException('商品不存在');
    }
    return product;
  }

  async update(id: string, updateProductDto: Partial<CreateProductDto>): Promise<Product> {
    const product = await this.findOne(id);
    Object.assign(product, updateProductDto);
    return this.productRepository.save(product);
  }

  async remove(id: string): Promise<void> {
    const product = await this.findOne(id);
    await this.productRepository.remove(product);
  }

  async incrementSales(id: string, quantity: number = 1): Promise<Product> {
    const product = await this.findOne(id);
    product.sales += quantity;
    product.stock -= quantity;
    return this.productRepository.save(product);
  }
}