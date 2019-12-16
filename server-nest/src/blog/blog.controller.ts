import { Controller, Post, Body, Get } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly BlogService: BlogService) {

  }
  @Get()
  getAll() {
    return this.BlogService.findAll();
  }
  @Post()
  create(@Body() createBlogsDto: CreateBlogDto) {
    this.BlogService.create(createBlogsDto);
  }
}
