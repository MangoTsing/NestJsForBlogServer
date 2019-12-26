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
        <img style="float:left;width:250px;height:150px;" :src="form.coverImg" alt="img" onerror="this.src='https://pic3.zhimg.com/v2-9874fe4a5b1bd6f3f77cb82bd93c8530_1200x500.jpg'">
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" :autosize="{ minRows: 4}" v-model="form.content"></el-input>
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
        coverImg: 'https://pic3.zhimg.com/v2-9874fe4a5b1bd6f3f77cb82bd93c8530_1200x500.jpg',
        star:0,
        count:0
      }
    }
  },
  methods: {
    onSubmit() {
      let data =  Qs.stringify({...this.form});
      axios.post('/myblogtxt',data,{ headers: { 'Content-Type':'application/x-www-form-urlencoded' } })
      .then(res=>{
        console.log(res)
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
