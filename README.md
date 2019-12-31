<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## 首要Todo
<p align="center">目前前后端分离，开发中通过proxy本地代理到服务端端口，之后会把nuxt前端打包成静态化页面放在服务端中，或使用nginx转发服务。</p>


### Todo 
* [x] 设计blog库，建立user,blog,myblogtxt等tables
* [x] 连接mongodb,schemas
* [x] 增加拦截器，处理数据格式
* [x] 需要增加blog详情页接口
* [x] 创建博客的前端管理页面
* [x] 👍点赞，接口
* [ ] 回复数接口（优先接入评论），需要标签选择接口，增加标签系统
* [ ] 写文章增加时间戳，（作者，分类，时间，阅读时间，点击量，后三个自动生成）
* [x] 对豆瓣api请求数据，转发到页面
* [ ] 管理页面还应有对文章的编辑修改，目前仅能创建
* [ ] 增加过滤器，处理数据错误统一格式


## 目前用到的技术
* [x] nest.js + typescript
* [x] vue + axios + iview + nuxt.js -> ssr

## 目前数据库的格式

 - myblogtxt

<p align="center"><h2>精益求精</h2></p>


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
