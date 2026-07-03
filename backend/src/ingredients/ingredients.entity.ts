import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export enum RiskLevel {
  SAFE = 'safe',
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

@Entity('ingredients')
export class Ingredient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100, nullable: false })
  name: string;

  @Column({ length: 200, nullable: true })
  alias: string;

  @Column({ type: 'enum', enum: RiskLevel, default: RiskLevel.SAFE })
  risk_level: RiskLevel;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  effects: string;

  @Column({ type: 'text', nullable: true })
  side_effects: string;

  @Column({ type: 'text', nullable: true })
  suitable_for: string;

  @Column({ type: 'text', nullable: true })
  unsuitable_for: string;

  @CreateDateColumn()
  created_at: Date;
}