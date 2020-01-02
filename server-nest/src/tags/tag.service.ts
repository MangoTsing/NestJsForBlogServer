import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tag } from './interfaces/tag.interface';
import { Model } from 'mongoose';
import { CreateTagDto } from './dto/create-tag.dto';

@Injectable()
export class TagService {
  constructor(@InjectModel('tags') private readonly tagModel: Model<Tag>) {

  }
  //创建tag
  async create( CreateTagDto: CreateTagDto): Promise<Tag> {
    const createdTag = new this.tagModel(CreateTagDto);
    return await createdTag.save();
  }
  //获取所有tags&
  async findAll(): Promise<Tag[]> {
    return await this.tagModel.find();
  }
}
