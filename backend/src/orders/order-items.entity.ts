import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Order } from './orders.entity';
import { Product } from '../products/products.entity';

@Entity('order_items')
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Order, order => order.items)
  order: Order;

  @ManyToOne(() => Product)
  product: Product;

  @Column({ type: 'int', nullable: false })
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  unit_price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  subtotal: number;
}