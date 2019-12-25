import { Controller, Post, Body, Get, Req } from '@nestjs/common';
import { MyblogtxtService } from './myblogtxt.service';
import { CreateBlogDto, DelBlogDto } from './dto/create-blog.dto';
import { Request } from 'express'

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
    this.MyblogtxtService.create(createBlogsDto).then((res)=>{
      return res;
    });
  }
  @Get('/detail')
  blogDetail(@Req() req:Request) {
    return this.MyblogtxtService.blogDetail(req.query.title)
  }
  @Post('/del')
  getDel(@Body() delBlogDto: DelBlogDto) {
    this.MyblogtxtService.delTitle(delBlogDto)
  }
}
