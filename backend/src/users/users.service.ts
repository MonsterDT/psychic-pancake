import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.phone) {
      const existing = await this.userRepository.findOne({ where: { phone: createUserDto.phone } });
      if (existing) {
        throw new ConflictException('该手机号已被注册');
      }
    }

    const user = this.userRepository.create(createUserDto);

    if (createUserDto.password) {
      user.password_hash = await bcrypt.hash(createUserDto.password, 12);
    }

    return this.userRepository.save(user);
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('用户不存在');
    }
    return user;
  }

  async findByPhone(phone: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { phone } });
  }

  async findByWechatOpenid(openid: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { wechat_openid: openid } });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }

  async updateWechatInfo(id: string, openid: string, unionid?: string, sessionKey?: string): Promise<User> {
    const user = await this.findOne(id);
    user.wechat_openid = openid;
    if (unionid) user.wechat_unionid = unionid;
    if (sessionKey) user.wechat_session_key = sessionKey;
    return this.userRepository.save(user);
  }
}