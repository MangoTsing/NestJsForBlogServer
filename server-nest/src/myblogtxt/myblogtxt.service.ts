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
    return await http.get('http://nodejs.cn/index.json', (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];
    
      let error;
      if (statusCode !== 200) {
        error = new Error('请求失败\n' +
                          `状态码: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('无效的 content-type.\n' +
                          `期望的是 application/json 但接收到的是 ${contentType}`);
      }
      if (error) {
        console.error(error.message);
        // 消费响应数据来释放内存。
        res.resume();
        return;
      }
    
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          return parsedData;
        } catch (e) {
          console.error(e.message);
        }
      });
    }).on('error', (e) => {
      console.error(`出现错误: ${e.message}`);
    });
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
