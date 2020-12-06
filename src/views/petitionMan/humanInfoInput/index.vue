<template>
  <div>
    <h3>信访人信息录入</h3>
    <el-card>
      <div slot="header" style="font-weight: bold">
        信访人信息
      </div>
      <div>
        <el-col :span="14">
          <el-form :model="Forminfo" :rules="rules" label-width="100px" >

            <el-form-item label="姓名" prop="name" >
              <el-input v-model="Forminfo.name"></el-input>
            </el-form-item>

            <el-form-item label="登记时间" required>
              <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" v-model="Forminfo.date1"
                                style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-form-item>

            <el-form-item label="性别" prop="gender">
              <el-select v-model="Forminfo.gender" placeholder="请选择性别" style="width: 100%;">
                <el-option label="男" value="man"></el-option>
                <el-option label="女" value="woman"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="政治面貌" prop="politics">
              <el-select v-model="Forminfo.politics" placeholder="请选择政治面貌" style="width: 100%">
                <el-option label="群众" value="0"></el-option>
                <el-option label="共青团员" value="1"></el-option>
                <el-option label="预备党员" value="2"></el-option>
                <el-option label="党员" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="手机号" prop="phonenumber">
              <el-input v-model="Forminfo.phonenumber" style="width: 100%"></el-input>
            </el-form-item>

            <el-form-item label="身份证号" prop="IDcard">
              <el-input v-model="Forminfo.IDcard" style="width: 100%"></el-input>
            </el-form-item>


            <el-form-item label="详细住址" prop="address">
              <el-input v-model="Forminfo.address" style="width: 100%"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submit()">
                提交
              </el-button>
              <el-button @click="reset('Formname')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6" style="margin-left: 20px">
          <el-image src=img style="width: 200px;height: 300px;"></el-image>
        </el-col>
      </div>

    </el-card>


  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      Forminfo: {
        name: '',
        gender: '',
        IDcard: '',
        phonenumber: '',
        politics: '',
        address: '',


        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      img:"D:\\CodeWorkSpace\\java\\petition-letter-project\\src\\views\\petitionMan\\humanInfoInput\\deafult.jpg",
      rules: {
        name: [
          {required: true, message: '姓名不能为空', trigger: 'blur'},
          {min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur'}
        ],
        IDcard: [
          {required: true, message: '身份证号不能为空', trigger: 'blur'},
          {min: 18, max: 18, message: '请输入18位身份证号', trigger: 'blur'}
        ],
        phonenumber: [
          {required: true, message: '手机号不能为空', trigger: 'blur'},
          {min: 11, max: 11, message: '请输入11位手机号', trigger: 'blur'}
        ],
        gender: [
          {required: true, message: '请选择性别', trigger: 'change'}
        ],
        politics: [
          {required: true, message: '请选择政治面貌', trigger: 'change'}
        ],
        date1: [
          {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
        ],

        type: [
          {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
        ],

        desc: [
          {required: true, message: '请填写活动形式', trigger: 'blur'}
        ]
      }
    }

  },
  methods: {
    submit(){
      this.$message({
        type:"success",
        message:"提交信息",

      })

    }
  }

}
</script>

<style scoped>

</style>