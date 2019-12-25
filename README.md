<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## 首要Todo
<p align="center">目前前后端分离，开发中通过proxy本地代理到服务端端口，之后会把nuxt前端打包成静态化页面放在服务端中，或使用nginx转发服务。j</p>


### Todo 
* [x] 设计blog库，建立user,blog,myblogtxt等tables
* [x] 连接mongodb,schemas
* [x] 增加拦截器，处理数据格式
* [x] 需要增加blog详情页接口
* [ ] 增加过滤器，处理数据错误统一格式
* [ ] 创建博客的前端管理页面


## 目前用到的技术
* [x] nest.js + typescript
* [x] vue + axios + iview + nuxt.js -> ssr

## 目前数据库的格式

- blog
 - user
 - myblogtxt

<p align="center">数据都存放在myblogtxt，按需存取</p>


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
