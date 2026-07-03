import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../users/users.entity';
import { OrderItem } from './order-items.entity';

export enum OrderStatus {
  PENDING = 'pending',
  PAID = 'paid',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
}

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50, nullable: false, unique: true })
  order_no: string;

  @ManyToOne(() => User, user => user.orders)
  user: User;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  total_amount: number;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING })
  status: OrderStatus;

  @Column({ length: 255, nullable: true })
  shipping_address: string;

  @Column({ length: 50, nullable: true })
  shipping_phone: string;

  @Column({ length: 100, nullable: true })
  tracking_no: string;

  @Column({ length: 255, nullable: true })
  pay_trade_no: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => OrderItem, item => item.order)
  items: OrderItem[];
}