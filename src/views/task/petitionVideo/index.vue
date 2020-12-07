<template>
  <div>
    <div class="header">
      <h3><el-button style="color: black;height: 20px;padding: 0px;font-size: 20px" @click="goview('视频信访')" icon="el-icon-back" type="text"></el-button>视频录制</h3>
      <el-button type="primary" class="searchButton" @click="onSubmit">
        提交
      </el-button>
    </div>
    <el-form label-width="100px">
      <el-row>
        <el-col :span="6"><div>
          <el-form-item label="编号">
            {{info.Petid}}
          </el-form-item>
        </div></el-col>
        <el-col :span="6"><div><el-form-item label="姓名">
          {{info.name}}
        </el-form-item></div></el-col>
        <el-col :span="8"><div>    <el-form-item label="身份证">
          {{info.IDcard}}
        </el-form-item></div></el-col>
      </el-row>
    </el-form>
    <div class="div-card" >
      <el-row>
        <div style="font-size: 15px;font-weight: bold;margin-left: 5px;margin-bottom: 10px;
        ">视频控制台</div>
      </el-row>
      <div style="width: 100%"  v-show="isrecording">
        <div class="record-redio" >
          <div>
            <video :src="url" width="100%"  controls  class="video"></video>
          </div>

        </div>
        <div class="record-redio">
          <div>
            <video :src="url" width="100%"  controls  class="video"></video>
          </div>
        </div>
      </div>
      <div style="text-align: center">
        <el-button-group style="margin-left: 10px">
          <el-button type="success" icon="el-icon-caret-right" @click="videoStart()"></el-button>
          <el-button type="danger" icon="el-icon-circle-close" @click="videoStop()"></el-button>
          <el-button type="primary" icon="el-icon-refresh" @click="videoReset()"></el-button>
        </el-button-group>
      </div>
      <div v-show="isrecording" style="font-size: 25px;text-align: center">
        {{str}}
      </div>
    </div>
    <div class="div-card">
      <el-row>
        <div style="font-size: 15px;font-weight: bold;margin-left: 5px;margin-bottom: 10px;
        ">信访记录</div>
      </el-row>
      <el-row>
        <div style="margin: 15px;width: 80%">
          <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
      </el-row>
      <label>
        <textarea v-model=text style="margin: 15px;width: 80%;height: 200px;" placeholder="信访内容记录">

      </textarea>
      </label>

    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      isrecording:false,
      info:{},
      text:"",
      //视频计时
      hour:0,//定义时，分，秒，毫秒并初始化为0；
      minute:0,
      ms:0,
      second:0,//秒
      time:'',
      str:'00:00:00',
      url:'',
      //文件
      fileList: [
        {name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
        {name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
    };
  },
  mounted(){
    this.info=this.$route.query.data
    console.log(this.info)
  },
  methods: {
    submit() {
      console.log("submit")

    },

    //视频
    videoStart(){
      this.timeStart();
      var flag = true;
      if (flag===true){
        this.isrecording=true
        this.$message({
          message: '视频录制开始',
          center: true,
          type:"success"
        });
      }
      /*TODO*/
    },
    videoStop(){
      this.stop();
      var flag = true;
      if (flag===true){
        this.$message({
          message: '暂停',
          center: true,
          type:"warning"
        });
      }
      /*TODO*/
    },
    videoReset(){
      this.isrecording=false
      this.reset();
      var flag = true;
      if (flag===true){
        this.$message({
          message: '重新录制',
          center: true
        });
      }
      /*TODO*/
    },
    //开始计时
    timeStart(){
      this.time =setInterval(this.timer,50)
    },
    //
    timer () {//定义计时函数
      this.ms =this.ms +50        //毫秒
      if (this.ms >=1000) {
        this.ms =0
        this.second =this.second +1        //秒
      }
      if (this.second >=60) {
        this.second =0
        this.minute =this.minute +1        //分钟
      }
      if (this.minute >=60) {
        this.minute =0
        this.hour =this.hour +1        //小时
      }
      //
      this.str =this.toDub(this.hour) +':' +this.toDub(this.minute) +':' +this.toDub(this.second)/*+""+this.toDubms(this.ms)+"毫秒"*/
      // document.getElementById('mytime').innerHTML=h+"时"+m+"分"+s+"秒"+ms+"毫秒";
    },
    //补零操作
    toDub (n) {//补0操作
      if (n <10) {
        return '0' + n
      }else {
        return '' + n
      }
    },
    //暂停
    stop () {
      console.log('暂停')
      clearInterval(this.time)
    },
    //重置
    reset () {//重置
      clearInterval(this.time)
      // this.hour =0
      this.minute =0
      this.ms =0
      this.second =0
      this.str ='00:00:00'
    },
    //文件
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    goview (name){
      this.$router.push({ name }).catch(err => {
        err && console.log('刷新') // 待优化
      })
    }
  }
}

</script>

<style scoped>
.div-card{
  margin:10px;
  border-radius: 5px;
  box-shadow:  0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding-bottom: 5px;
  padding-top: 10px;
  padding-left: 5px;
}
.record-redio{
  width: 50%;
  display: inline-block;
}
.searchButton{
  height: 35px;
  padding: 0px 20px;
  margin-right: 30px;
}
.header{
  display: flex;
  justify-content: space-between;
}
</style>