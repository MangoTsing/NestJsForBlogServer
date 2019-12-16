import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MyblogtxtController } from './myblogtxt.controller';
import { MyblogtxtService } from './myblogtxt.service';
import { MyblogtxtSchema } from './schemas/myblogtxt.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'myblogtxt', schema: MyblogtxtSchema }])],
  controllers: [MyblogtxtController],
  providers: [MyblogtxtService],
})
export class MyblogtxtModule {}