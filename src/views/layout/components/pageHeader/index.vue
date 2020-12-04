<template>
<div class="header">
  <div class="logo">远程接访管理系统平台</div>
  <div class="func">
    <el-button type="text" icon="el-icon-s-home" @click="goview('视频信访')">首页</el-button>
    <el-button type="text" icon="el-icon-upload2" @click="goview('登录')">注销</el-button>
  </div>
  <div class="time">
    <span>当前时间{{time}}</span>
  </div>
</div>
</template>

<script>
export default {
name: "pageHeader",
  data(){
  return{
    time:''
  }
  },
  created(){
    setInterval(()=>{
      this.time=new Date().toLocaleString()
    },1000)
  },
  methods:{
    goview (name) {
      this.$router.push({ name }).catch(err => {
        err && console.log('刷新') // 待优化
      })
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: transparent;
}
.logo{
  margin-left: 60px;
  font-size: 40px;
  font-weight: bold;
  color: #d9f3ff;
  text-shadow: grey 3px 3px 3px;
}
.func{
  margin-right: 30px;

}
.el-button{
  font-size: 20px;
  color: white;
  padding:0 10px;
}
.time{
  position: absolute;
  right: 5px;
  top: 5px;
}
</style>