import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MakeupTemplate, TemplateType } from './templates.entity';
import { CreateTemplateDto, TemplateQueryDto } from './templates.dto';

@Injectable()
export class TemplatesService {
  constructor(
    @InjectRepository(MakeupTemplate)
    private readonly templateRepository: Repository<MakeupTemplate>,
  ) {}

  async create(createTemplateDto: CreateTemplateDto): Promise<MakeupTemplate> {
    const template = this.templateRepository.create({
      title: createTemplateDto.title,
      cover_image: createTemplateDto.coverImage,
      category: createTemplateDto.category,
      tag: createTemplateDto.tag,
      difficulty: createTemplateDto.difficulty,
      duration: createTemplateDto.duration,
      suitable_for: createTemplateDto.suitableFor,
      effect: createTemplateDto.effect,
      description: createTemplateDto.description,
      type: createTemplateDto.type as TemplateType,
      metadata: createTemplateDto.metadata,
    });
    return this.templateRepository.save(template);
  }

  async findAll(query: TemplateQueryDto): Promise<{ data: MakeupTemplate[]; total: number }> {
    const { category, tag, type, page = 1, limit = 10 } = query;

    const queryBuilder = this.templateRepository.createQueryBuilder('template');

    if (category) {
      queryBuilder.where('template.category = :category', { category });
    }
    if (tag) {
      queryBuilder.andWhere('template.tag = :tag', { tag });
    }
    if (type) {
      queryBuilder.andWhere('template.type = :type', { type });
    }

    queryBuilder.orderBy('template.created_at', 'DESC');

    const [data, total] = await queryBuilder
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { data, total };
  }

  async findOne(id: string): Promise<MakeupTemplate> {
    const template = await this.templateRepository.findOne({ where: { id } });
    if (!template) {
      throw new NotFoundException('模板不存在');
    }
    return template;
  }

  async update(id: string, updateTemplateDto: Partial<CreateTemplateDto>): Promise<MakeupTemplate> {
    const template = await this.findOne(id);
    Object.assign(template, updateTemplateDto);
    return this.templateRepository.save(template);
  }

  async remove(id: string): Promise<void> {
    const template = await this.findOne(id);
    await this.templateRepository.remove(template);
  }

  async incrementLikes(id: string): Promise<MakeupTemplate> {
    const template = await this.findOne(id);
    template.likes += 1;
    return this.templateRepository.save(template);
  }

  async incrementCollections(id: string): Promise<MakeupTemplate> {
    const template = await this.findOne(id);
    template.collections += 1;
    return this.templateRepository.save(template);
  }

  async getLibraryFeed(): Promise<{
    creators: MakeupTemplate[];
    tutorials: MakeupTemplate[];
    qa: MakeupTemplate[];
    guofeng: MakeupTemplate[];
    silver: MakeupTemplate[];
    brands: MakeupTemplate[];
    celebrities: MakeupTemplate[];
  }> {
    const [creators, tutorials, qa, guofeng, silver, brands, celebrities] = await Promise.all([
      this.templateRepository.find({ where: { type: TemplateType.CREATOR }, take: 8 }),
      this.templateRepository.find({ where: { type: TemplateType.TUTORIAL }, take: 8 }),
      this.templateRepository.find({ where: { type: TemplateType.QA }, take: 8 }),
      this.templateRepository.find({ where: { type: TemplateType.GUOFENG }, take: 8 }),
      this.templateRepository.find({ where: { type: TemplateType.SILVER }, take: 8 }),
      this.templateRepository.find({ where: { type: TemplateType.BRAND }, take: 8 }),
      this.templateRepository.find({ where: { type: TemplateType.CELEBRITY }, take: 8 }),
    ]);

    return { creators, tutorials, qa, guofeng, silver, brands, celebrities };
  }
}