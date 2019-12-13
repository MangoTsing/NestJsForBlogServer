import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
export declare class BlogController {
    private readonly BlogService;
    constructor(BlogService: BlogService);
    getAll(): Promise<import("./interfaces/blog.interface").Blog[]>;
    create(createBlogsDto: CreateBlogDto): void;
}
