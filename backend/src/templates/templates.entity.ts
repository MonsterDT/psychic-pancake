import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { Product } from '../products/products.entity';

export enum TemplateType {
  CREATOR = 'creator',
  TUTORIAL = 'tutorial',
  QA = 'qa',
  GUOFENG = 'guofeng',
  SILVER = 'silver',
  BRAND = 'brand',
  CELEBRITY = 'celebrity',
}

@Entity('makeup_templates')
export class MakeupTemplate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100, nullable: false })
  title: string;

  @Column({ length: 255, nullable: false })
  cover_image: string;

  @Column({ length: 50, nullable: false })
  category: string;

  @Column({ length: 50, nullable: true })
  tag: string;

  @Column({ type: 'int', default: 0 })
  likes: number;

  @Column({ type: 'int', default: 0 })
  collections: number;

  @Column({ type: 'int', nullable: true })
  difficulty: number;

  @Column({ length: 20, nullable: true })
  duration: string;

  @Column({ type: 'jsonb', nullable: true })
  suitable_for: Record<string, any>;

  @Column({ length: 100, nullable: true })
  effect: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'enum', enum: TemplateType, nullable: false })
  type: TemplateType;

  @Column({ type: 'jsonb', nullable: true })
  metadata: Record<string, any>;

  @Column({ default: false })
  is_official: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => Product)
  @JoinTable({ name: 'template_products' })
  products: Product[];
}