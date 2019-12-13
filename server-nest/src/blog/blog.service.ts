import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Blog } from './interfaces/blog.interface';
import { Model } from 'mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel('blog') private readonly blogModel: Model<Blog>) {

  }
  //创建blogs
  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    const createdBlog = new this.blogModel(createBlogDto);
    return await createdBlog.save();
  }
  //获取所有blogs&
  async findAll(): Promise<Blog[]> {
    return await this.blogModel.find();
  }
}
