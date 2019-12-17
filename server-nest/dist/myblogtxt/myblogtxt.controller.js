"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const myblogtxt_service_1 = require("./myblogtxt.service");
const create_blog_dto_1 = require("./dto/create-blog.dto");
let MyblogtxtController = class MyblogtxtController {
    constructor(MyblogtxtService) {
        this.MyblogtxtService = MyblogtxtService;
    }
    getAll() {
        return this.MyblogtxtService.findAll();
    }
    create(createBlogsDto) {
        this.MyblogtxtService.create(createBlogsDto).then((res) => {
            return res;
        });
    }
    getDel(delBlogDto) {
        this.MyblogtxtService.delTitle(delBlogDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MyblogtxtController.prototype, "getAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_blog_dto_1.CreateBlogDto]),
    __metadata("design:returntype", void 0)
], MyblogtxtController.prototype, "create", null);
__decorate([
    common_1.Post('/del'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_blog_dto_1.DelBlogDto]),
    __metadata("design:returntype", void 0)
], MyblogtxtController.prototype, "getDel", null);
MyblogtxtController = __decorate([
    common_1.Controller('myblogtxt'),
    __metadata("design:paramtypes", [myblogtxt_service_1.MyblogtxtService])
], MyblogtxtController);
exports.MyblogtxtController = MyblogtxtController;
//# sourceMappingURL=myblogtxt.controller.js.map