<template xmlns:el-col="http://www.w3.org/1999/html">
<div style="display: flex;flex-direction: column;width: 95%">
  <h3>视频信访</h3>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <div style="margin-left: 5px;margin-right:5px;margin-top: 5px;margin-bottom: 5px;width: 100%;
    border-radius: 5px;
    box-shadow:  0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding-bottom: 5px;padding-right: 20px" >
      <div style="margin: 5px;padding-top: 10px;padding-left: 5px">
        <el-row>
          <div style="font-size: 20px;font-weight: bold;
        display: flex;flex-direction: column;align-items: flex-start;justify-content: flex-start;
        margin-top: 15px;margin-left: 5px;margin-bottom: 10px;
        ">视频录制</div>
        </el-row>
        <el-row>
          <el-col :span="2">
            <div style="font-size: 25px;width: auto;display: flex;flex-direction: column;align-items: center;justify-content: center;margin-top: 5px">
              {{str}}
            </div>

          </el-col>
          <el-col :span="4">
            <el-button-group style="margin-left: 10px">
              <el-button type="primary" icon="el-icon-caret-right" @click="videoStart()"></el-button>
              <el-button type="primary" icon="el-icon-circle-close" @click="videoStop()"></el-button>
              <el-button type="primary" icon="el-icon-refresh" @click="videoReset()"></el-button>
            </el-button-group>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div style="margin: 10px">
              <video :src="url" width="100%"  controls  class="video"></video>
            </div>

          </el-col>
          <el-col :span="12">
            <div style="margin: 10px">
              <video :src="url" width="100%"  controls  class="video"></video>
            </div>
          </el-col>
        </el-row>

      </div>
    </div>



<!--    <div style="margin-left: 5px;margin-right:5px;margin-top: 5px;margin-bottom: 5px;width: 100%;-->
<!--    border-radius: 5px;-->
<!--    box-shadow:  0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);-->
<!--    padding-bottom: 5px;padding-right: 20px" >-->
<!--      <el-row >-->
<!--        <div style="font-size: 20px;font-weight: bold;-->
<!--        display: flex;flex-direction: column;align-items: flex-start;justify-content: flex-start;-->
<!--        margin-top: 15px;margin-left: 15px;margin-bottom: 10px;-->
<!--        ">信访人信息</div>-->
<!--      </el-row>-->

<!--      <el-row>-->
<!--        <el-col :span="6">-->
<!--          <el-form-item label="姓名" prop="name">-->
<!--            <el-input v-model="ruleForm.name"></el-input>-->
<!--          </el-form-item>-->
<!--        </el-col>-->
<!--        <el-col :span="18">-->
<!--          <el-form-item label="信访时间" required>-->
<!--            <el-col :span="11">-->
<!--              <el-form-item prop="date1">-->
<!--                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>-->
<!--              </el-form-item>-->
<!--            </el-col>-->
<!--            <el-col class="line" :span="1" style="display:flex;flex-direction:row;align-items: center;justify-content: center">-->
<!--              <div>&#45;&#45;</div>-->
<!--            </el-col>-->
<!--            <el-col :span="11">-->
<!--              <el-form-item prop="date2">-->
<!--                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>-->
<!--              </el-form-item>-->
<!--            </el-col>-->

<!--          </el-form-item>-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--      <el-row>-->
<!--        <el-col :span="6">-->
<!--          <el-form-item label="性别" prop="gender">-->
<!--            <el-select v-model="ruleForm.gender" placeholder="请选择性别" style="width: 100%;">-->
<!--              <el-option label="男" value="man"></el-option>-->
<!--              <el-option label="女" value="woman"></el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->
<!--        </el-col>-->
<!--        <el-col :span="6">-->
<!--          <el-form-item label="政治面貌" prop="politics">-->
<!--            <el-select v-model="ruleForm.politics" placeholder="请选择政治面貌" style="width: 100%">-->
<!--              <el-option label="群众" value="0"></el-option>-->
<!--              <el-option label="共青团员" value="1"></el-option>-->
<!--              <el-option label="预备党员" value="2"></el-option>-->
<!--              <el-option label="党员" value="3"></el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->
<!--        </el-col>-->
<!--        <el-col :span="6">-->
<!--          <el-form-item label="手机号" prop="phonenumber">-->
<!--            <el-input v-model="ruleForm.phonenumber" style="width: 100%"></el-input>-->
<!--          </el-form-item>-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--      <el-row>-->
<!--        <el-col :span="6">-->
<!--          <el-form-item label="身份证号" prop="IDcard">-->
<!--            <el-input v-model="ruleForm.IDcard" style="width: 100%"></el-input>-->
<!--          </el-form-item>-->
<!--        </el-col>-->
<!--        <el-col :span="6">-->
<!--          <el-form-item label="详细住址" prop="address">-->
<!--            <el-input v-model="ruleForm.address" style="width: 100%"></el-input>-->
<!--          </el-form-item>-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--    </div>-->
    <div style="margin-left: 5px;margin-right:5px;margin-top: 5px;margin-bottom: 5px;width: 100%;
    border-radius: 5px;
    box-shadow:  0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding-bottom: 5px;padding-right: 20px">
      <el-row>
        <div style="font-size: 20px;font-weight: bold;
        display: flex;flex-direction: column;align-items: flex-start;justify-content: flex-start;
        margin-top: 15px;margin-left: 15px;margin-bottom: 10px;
        ">信访记录</div>
      </el-row>
      <el-row>
        <div style="margin: 15px;width: 700px">
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
        <textarea v-model=text style="margin: 15px;width: 700px;height: 200px;" placeholder="信访内容记录">

      </textarea>
      </label>

    </div>

<!--    <el-form-item label="活动区域" prop="region">-->
<!--      <el-select v-model="ruleForm.region" placeholder="请选择活动区域">-->
<!--        <el-option label="区域一" value="shanghai"></el-option>-->
<!--        <el-option label="区域二" value="beijing"></el-option>-->
<!--      </el-select>-->
<!--    </el-form-item>-->

<!--    <el-form-item label="即时配送" prop="delivery">-->
<!--      <el-switch v-model="ruleForm.delivery"></el-switch>-->
<!--    </el-form-item>-->
<!--    <el-form-item label="活动性质" prop="type">-->
<!--      <el-checkbox-group v-model="ruleForm.type">-->
<!--        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>-->
<!--        <el-checkbox label="地推活动" name="type"></el-checkbox>-->
<!--        <el-checkbox label="线下主题活动" name="type"></el-checkbox>-->
<!--        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>-->
<!--      </el-checkbox-group>-->
<!--    </el-form-item>-->
<!--    <el-form-item label="特殊资源" prop="resource">-->
<!--      <el-radio-group v-model="ruleForm.resource">-->
<!--        <el-radio label="线上品牌商赞助"></el-radio>-->
<!--        <el-radio label="线下场地免费"></el-radio>-->
<!--      </el-radio-group>-->
<!--    </el-form-item>-->
<!--    <el-form-item label="活动形式" prop="desc">-->
<!--      <el-input type="textarea" v-model="ruleForm.desc"></el-input>-->
<!--    </el-form-item>-->
    <div style="margin-left: 5px;margin-right:5px;margin-top: 5px;margin-bottom: 5px;width: 100%;

    padding-bottom: 5px;padding-right: 20px">
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </div>

  </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      text:"",
      //视频计时
      hour:0,//定义时，分，秒，毫秒并初始化为0；
      minute:0,
      ms:0,
      second:0,//秒
      time:'',
      str:'00:00:00',
      url:'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4',
      //文件
      fileList: [
          {name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
          {name: 'food2.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],

      ruleForm: {
        name: '',
        gender:'',
        IDcard:'',
        phonenumber:'',
        politics:'',
        address:'',


        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        IDcard: [
          { required: true, message: '身份证号不能为空', trigger: 'blur' },
          { min: 18, max: 18, message: '请输入18位手机号', trigger: 'blur' }
        ],
        phonenumber: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入11位手机号', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        politics:[
          {required :true,message:'请选择政治面貌',trigger:'change'}
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    //视频
    videoStart(){
      this.timeStart();
      var flag = true;
      if (flag===true){
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
          message: '视频录制停止',
          center: true,
          type:"warning"
        });
      }
      /*TODO*/
    },
    videoReset(){
      this.reset();
      var flag = true;
      if (flag===true){
        this.$message({
          message: '重新录制',
          center: true,
          type:"success"
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
    }
  }
}

</script>

<style scoped>
.div-card{
  margin-left: 5px;
  margin-right:5px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  border-radius: 5px;
  box-shadow:  0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding-bottom: 5px;padding-right: 20px
}
</style>