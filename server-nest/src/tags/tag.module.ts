import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { TagSchema } from './schemas/tag.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'tags', schema: TagSchema, collection: 'tags'}])],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}