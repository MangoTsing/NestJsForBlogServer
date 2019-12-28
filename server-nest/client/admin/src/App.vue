<template>
  <div id="app">
    <div>
    SSX-create
    <el-form ref="form" :model="form" name="form" method="post" action="/myblogtxt" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author"></el-input>
      </el-form-item>
      <el-form-item label="star">
        <el-input v-model="form.star"></el-input>
      </el-form-item>
      <el-form-item label="count">
        <el-input v-model="form.count"></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-input v-model="form.tags"></el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input v-model="form.summary"></el-input>
      </el-form-item>
      <el-form-item label="封面url">
        <el-input v-model="form.coverImg"></el-input>
        <img style="float:left;width:250px;height:150px;" :src="form.coverImg" alt="img" onerror="this.src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577553042372&di=1b53a3e96264e884b5489d9a8a5bfda1&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-05-23%2F5b0516c5a9616.jpg'">
      </el-form-item>
      <el-form-item label="内容">
        <!-- <el-input type="textarea" :autosize="{ minRows: 4}" v-model="form.content"></el-input> -->
        <mavon-editor v-model="form.content" :toolbars="toolbars" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
    <!-- <form action="/myblogtxt" method="POST">
        title:<input type="text" name="title">
        author:<input type="text" name="author">
        tags:<input type="text" name="tags">
        summary:<input type="text" name="summary">
        content:<input type="text" name="content">
        coverImg:<input type="text" name="coverImg">
        <input type="submit" value="提交">
    </form>
    <form action="/myblogtxt/del" method="POST">
        <input type="text" name="title">
        <input type="submit" value="删除">
    </form> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Qs from 'qs'
export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      form:{
        coverImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577553042372&di=1b53a3e96264e884b5489d9a8a5bfda1&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-05-23%2F5b0516c5a9616.jpg',
        star:0,
        count:0
      },
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        mark: true, // 标记
        superscript: true, // 上角标
        quote: true, // 引用
        ol: true, // 有序列表
        link: true, // 链接
        help: true, // 帮助
        code: true, // code
        subfield: true, // 是否需要分栏
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        /* 1.3.5 */
        undo: true, // 上一步
        trash: true, // 清空
        /* 1.4.2 */
        navigation: true // 导航目录
        }
    }
  },
  methods: {
    onSubmit() {
      let data =  Qs.stringify({...this.form});
      axios.post('/myblogtxt',data,{ headers: { 'Content-Type':'application/x-www-form-urlencoded' } })
      .then(res=>{
        this.$message({
          type:'success',
          message: res.data.message
        })
      })
    }
  },
  mounted() {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
