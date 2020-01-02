<template>
  <div class="tag">
    <h1>创建Tag</h1>
    <el-form :model="form" ref="form" label-width="80px">
      <el-form-item label="标签">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from 'axios'
import Qs from 'qs'
export default {
  data() {
    return {
      form:{}
    }
  },
  methods: {
    onSubmit() {
      let data =  Qs.stringify({...this.form});
      axios.post('/tag',data,{ headers: { 'Content-Type':'application/x-www-form-urlencoded' } })
      .then(res=>{
        this.$message({
          type:'success',
          message: res.data.message
        })
      })
    }
  }
}
</script>
