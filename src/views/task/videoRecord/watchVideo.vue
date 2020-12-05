<template>
<div>
  <h3><el-button style="color: black;height: 20px;padding: 0px;font-size: 20px" @click="goview('视频记录')" icon="el-icon-back" type="text"></el-button>查看录像</h3>
  <el-form label-width="100px">
  <el-row>
    <el-col :span="6"><div>
      <el-form-item label="编号">
        {{videoInfo.recordId}}
      </el-form-item>
    </div></el-col>
    <el-col :span="6"><div><el-form-item label="姓名">
      {{videoInfo.petitioner}}
    </el-form-item></div></el-col>
    <el-col :span="8"><div>    <el-form-item label="信访时间">
      {{videoInfo.startTime}}
    </el-form-item></div></el-col>
  </el-row>
  </el-form>
  <video :src="url" controls autoplay class="video"
         width="100%"></video>
</div>
</template>

<script>

export default {
name: "watchVideo",
  data(){
  return{
    videoInfo:{},
    url:'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4'
  }
  },
  mounted(){
    this.videoInfo=this.$route.query.data
    console.log(this.videoInfo)
  },
  methods:{
    goview (name){
      this.$router.push({ name }).catch(err => {
        err && console.log('刷新') // 待优化
      })
    }
  }
}
</script>

<style scoped>

</style>