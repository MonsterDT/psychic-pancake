import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Cart } from '../carts/carts.entity';
import { Order } from '../orders/orders.entity';
import { Address } from '../addresses/addresses.entity';
import { Favorite } from '../favorites/favorites.entity';

export enum LoginType {
  PHONE = 'phone',
  WECHAT = 'wechat',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 255, nullable: true })
  avatar: string;

  @Column({ length: 20, nullable: true })
  phone: string;

  @Column({ length: 255, nullable: true })
  password_hash: string;

  @Column({ length: 100, nullable: true })
  wechat_openid: string;

  @Column({ length: 100, nullable: true })
  wechat_unionid: string;

  @Column({ length: 255, nullable: true })
  wechat_session_key: string;

  @Column({ type: 'enum', enum: LoginType, default: LoginType.PHONE })
  login_type: LoginType;

  @Column({ type: 'json', nullable: true })
  skin_type: string;

  @Column({ type: 'json', nullable: true })
  preferences: string;

  @Column({ type: 'json', nullable: true })
  health_info: string;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Cart, cart => cart.user)
  carts: Cart[];

  @OneToMany(() => Order, order => order.user)
  orders: Order[];

  @OneToMany(() => Address, address => address.user)
  addresses: Address[];

  @OneToMany(() => Favorite, favorite => favorite.user)
  favorites: Favorite[];
}