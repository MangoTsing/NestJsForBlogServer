import { Controller, Post, Body, Get } from '@nestjs/common';
import { MyblogtxtService } from './myblogtxt.service';
import { CreateBlogDto } from './dto/create-blog.dto';

@Controller('myblogtxt')

export class MyblogtxtController {
  constructor(private readonly MyblogtxtService: MyblogtxtService) {

  }
  @Get()
  getAll() {
    return this.MyblogtxtService.findAll();
  }
  @Post()
  create(@Body() createBlogsDto: CreateBlogDto) {
    this.MyblogtxtService.create(createBlogsDto);
  }
}
