import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../users/users.entity';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.addresses)
  user: User;

  @Column({ length: 100, nullable: false })
  receiver_name: string;

  @Column({ length: 20, nullable: false })
  receiver_phone: string;

  @Column({ length: 50, nullable: false })
  province: string;

  @Column({ length: 50, nullable: false })
  city: string;

  @Column({ length: 50, nullable: false })
  district: string;

  @Column({ length: 200, nullable: false })
  detail: string;

  @Column({ default: false })
  is_default: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}