import { Controller, Post, Body, Get } from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';

@Controller('tag')
export class TagController {
  constructor(private readonly TagService: TagService) {

  }
  @Get()
  getAll() {
    return this.TagService.findAll();
  }
  @Post()
  create(@Body() createTagDto: CreateTagDto) {
    this.TagService.create(createTagDto);
  }
}
