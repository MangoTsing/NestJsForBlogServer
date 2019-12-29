import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MyBlogTxt } from './interfaces/myblogtxt.interface';
import { Model } from 'mongoose';
import { CreateBlogDto, DelBlogDto, BlogDetail, postStar } from './dto/create-blog.dto';
var http = require('http');
@Injectable()
export class MyblogtxtService {
  constructor(@InjectModel('myblogtxt') private readonly blogModel: Model<MyBlogTxt>) {

  }
  //创建blogs
  async create(createBlogDto: CreateBlogDto): Promise<MyBlogTxt> {
    const createdBlog = new this.blogModel(createBlogDto);
    return await createdBlog.save();
  }
  //获取所有blogs&
  async findAll(): Promise<MyBlogTxt[]> {
    return await this.blogModel.find();
  }
  //获取豆瓣电影列表
  async movieList(): Promise<any> {
    var options = { 
      hostname: 'api.douban.com', 
      port: 80, 
      path: '/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10',
      method: 'GET' ,
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"
      }
    }; 
    return await http.get(options,function(res) {
      return res
    })
  }
  //给单篇文章点star+1
  async postStar (str: postStar): Promise<MyBlogTxt> {
    return await this.blogModel.update({ title: str }, { $inc: {star:1} }, { multi: false });
  }
  //获取blog详情
  async blogDetail(str: BlogDetail): Promise<MyBlogTxt> {
   return await this.blogModel.find({title:str}); 
  }
  //传入标题删除blog
  async delTitle(delTitleDto: DelBlogDto): Promise<MyBlogTxt> {
    return await this.blogModel.deleteMany( delTitleDto , function(err){console.log(err)})
  }
}
