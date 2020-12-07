<template>
  <div>
    <h3>登记查询</h3>
    <h4>基本信息</h4>
    <el-form :inline="true" v-model="basicForm">
      <el-form-item label="指定节点">
        <el-input disabled v-model="basicForm.assignedPoint"/>
      </el-form-item>
      <el-form-item label="指定部门">
        <el-select v-model="basicForm.department" placeholder="请选择">
          <el-option
              v-for="item in options"
              :key="item.department"
              :label="item.label"
              :value="item.department">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="信访类型">
        <el-checkbox-group v-model="basicForm.type">
          <el-checkbox label="信" name="type"></el-checkbox>
          <el-checkbox label="访" name="type"></el-checkbox>
          <el-checkbox label="电" name="type"></el-checkbox>
          <el-checkbox label="诉" name="type"></el-checkbox>
          <el-checkbox label="邮" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
     <br />
      <el-form-item label="登记号">
        <el-date-picker
            v-model="basicForm.regisId.year"
            type="year"
            placeholder="选择年">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-input v-model="basicForm.regisId.id">
          <template slot="prepend">第</template>
          <template slot="append">号</template>
        </el-input>
      </el-form-item>
    </el-form>
    <h4>信访人信息</h4>
    <el-form v-model="petitionerForm" :inline="true">
      <el-form-item label="姓名">
        <el-input v-model="petitionerForm.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="petitionerForm.phoneNum" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="政治面貌">
        <el-select v-model="petitionerForm.politics" placeholder="请选择政治面貌">
          <el-option label="群众" value="0"></el-option>
          <el-option label="共青团员" value="1"></el-option>
          <el-option label="预备党员" value="2"></el-option>
          <el-option label="党员" value="3"></el-option>
        </el-select>
      </el-form-item>

      <br/>
      <el-form-item label="年龄">
        <el-input v-model="petitionerForm.gender" placeholder="请输入性别"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="petitionerForm.address" placeholder="请输入地址"></el-input>
      </el-form-item>
      <el-form-item label="信访问题">
        <el-select v-model="petitionerForm.problemType" placeholder="请选择信访问题" >
          <el-option label="婚育" value="0"></el-option>
          <el-option label="医疗" value="1"></el-option>
          <el-option label="土地" value="2"></el-option>
        </el-select>
      </el-form-item>
      <br/>
      <el-form-item style="margin-left: 70%" >
        <el-button type="primary" @click="search" >查找</el-button>
      </el-form-item>
    </el-form>
    <el-table ref="resTable" highlight-current-row :data="resData" >

      <el-table-column
          v-for="{prop,label} in colConfigs"
          :key="prop"
          :prop="prop"
          :label="label">
      </el-table-column>


    </el-table>

  </div>
</template>

<script>
export default {
  name: "applicationRecord"
  ,
  data() {
    return {
      basicForm: {
        assignedPoint: '市委群工部（信访局）',
        department: '',
        type: [],
        regisId: {
          year: '',
          id: ''
        }
      },
      options: [{
        department: 'miit',
        label: '工信部'
      }, {
        department: 'fd',
        label: '财务部'
      }],
      petitionerForm: {
        politics: '',
        name: '',
        phoneNum: '',
        gender:'',
        problemType:'',
        address:''
      },

      colConfigs: [
        {prop: 'applyId', label: '申请编号'},
        {prop: 'name', label: '姓名'},
        {prop: 'problemType', label: '问题类型'},
        {prop: 'applyDate', label: '申请日期'}
      ],
      resData: [
        {applyId: '001', name: '李先生', problemType: '分地问题', address: 'A地', desc: '分地不均衡', applyDate: '2020/12/3'},
        {applyId: '002', name: '王先生', problemType: '婚育问题', address: 'B地', desc: '结婚日期协商', applyDate: '2020/12/3'},
        {applyId: '003', name: '张先生', problemType: '医疗问题', address: 'C地', desc: '医疗补助发放', applyDate: '2020/12/4'}
      ]
    }
  },
  methods:{
    search(){
      this.$message({
        type: 'information',
        message: '正在执行查询'
      })
    }
  }
}
</script>

<style scoped>

</style>