import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany } from 'typeorm';
import { MakeupTemplate } from '../templates/templates.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 200, nullable: false })
  name: string;

  @Column({ length: 500, nullable: true })
  description: string;

  @Column({ length: 255, nullable: false })
  image: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  original_price: number;

  @Column({ length: 50, nullable: false })
  category: string;

  @Column({ length: 50, nullable: true })
  brand: string;

  @Column({ length: 100, nullable: true })
  spec: string;

  @Column({ length: 50, nullable: true })
  effect: string;

  @Column({ type: 'jsonb', nullable: true })
  ingredients: Record<string, any>;

  @Column({ type: 'int', default: 0 })
  sales: number;

  @Column({ type: 'int', default: 0 })
  stock: number;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => MakeupTemplate, template => template.products)
  templates: MakeupTemplate[];
}