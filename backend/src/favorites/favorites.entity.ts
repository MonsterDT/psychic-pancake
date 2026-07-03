import { Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../users/users.entity';
import { MakeupTemplate } from '../templates/templates.entity';

@Entity('favorites')
export class Favorite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.favorites)
  user: User;

  @ManyToOne(() => MakeupTemplate)
  template: MakeupTemplate;

  @CreateDateColumn()
  created_at: Date;
}