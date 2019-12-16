import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { MyblogtxtModule } from './myblogtxt/myblogtxt.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/blog'),BlogModule, MyblogtxtModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
