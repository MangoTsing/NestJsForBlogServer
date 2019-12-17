import { MyblogtxtService } from './myblogtxt.service';
import { CreateBlogDto, DelBlogDto } from './dto/create-blog.dto';
export declare class MyblogtxtController {
    private readonly MyblogtxtService;
    constructor(MyblogtxtService: MyblogtxtService);
    getAll(): Promise<import("./interfaces/myblogtxt.interface").MyBlogTxt[]>;
    create(createBlogsDto: CreateBlogDto): void;
    getDel(delBlogDto: DelBlogDto): void;
}
