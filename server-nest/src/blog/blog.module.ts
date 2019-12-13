import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { BlogSchema } from './schemas/blog.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'blog', schema: BlogSchema, collection: 'blog'}])],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}