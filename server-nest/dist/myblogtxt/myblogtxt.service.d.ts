import { MyBlogTxt } from './interfaces/myblogtxt.interface';
import { Model } from 'mongoose';
import { CreateBlogDto, DelBlogDto } from './dto/create-blog.dto';
export declare class MyblogtxtService {
    private readonly blogModel;
    constructor(blogModel: Model<MyBlogTxt>);
    create(createBlogDto: CreateBlogDto): Promise<MyBlogTxt>;
    findAll(): Promise<MyBlogTxt[]>;
    delTitle(delTitleDto: DelBlogDto): Promise<MyBlogTxt>;
}
