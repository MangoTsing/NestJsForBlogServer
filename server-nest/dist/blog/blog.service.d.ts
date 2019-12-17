import { Blog } from './interfaces/blog.interface';
import { Model } from 'mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';
export declare class BlogService {
    private readonly blogModel;
    constructor(blogModel: Model<Blog>);
    create(createBlogDto: CreateBlogDto): Promise<Blog>;
    findAll(): Promise<Blog[]>;
}
