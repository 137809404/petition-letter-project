<template>
  <div>
    <h3>信访人查询搜索</h3>
    <el-container>
      <el-aside width="360px">
        <br><br>
        <el-form :inline="true">
          <el-form-item label="申请编号">
            <el-input v-model="searchApplyId" class="input" placeholder="请输入申请编号"/>
          </el-form-item>
          <el-form-item label="申请时间">
            <el-date-picker class="input"
                            v-model="searchApplyDate"
                            type="date"
                            placeholder="选择日期">
            </el-date-picker>
          </el-form-item>

          <el-button type="primary" size="medium" @click="searchApply">查找</el-button>
        </el-form>

        <br>
        <template>
          <el-table ref="applyTable" highlight-current-row :data="applyData" @row-click="showInfo">

            <el-table-column
                v-for="{prop,label} in colConfigs"
                :key="prop"
                :prop="prop"
                :label="label">
            </el-table-column>


          </el-table>

        </template>

      </el-aside>
      <el-main>
        <h4>信访人及信访事项信息</h4>
        <el-form :inline="true">
          <el-form-item label="家庭住址">
            <el-input v-model="showingInfo.address" disabled class="inputClass"></el-input>
          </el-form-item>


          <el-form-item label="问题描述">
            <el-input v-model="showingInfo.desc" disabled class="inputClass"></el-input>
          </el-form-item>
        </el-form>

        <h4>信访申请处理</h4>
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="直接处理" name="directProcess">

            <div v-if="showingInfo.desc.length === 0">
              请选择处理事项
            </div>
            <div v-else>
              <el-form :model="directForm" ref="directForm" :rules="rules" class="demo-ruleForm">
                <el-form-item label="处理人编号" prop="processorId">
                  <el-input v-model="directForm.processorId" class="input" placeholder="请输入处理人编号"></el-input>
                </el-form-item>
                <el-form-item label="处理人姓名" prop="processorName">
                  <el-input v-model="directForm.processorName" class="input" placeholder="请输入处理人姓名"></el-input>
                </el-form-item>
                <el-form-item label="处理建议" prop="advice">
                  <el-input v-model="directForm.advice" type="textarea" :rows="3" placeholder="请输入处理建议"></el-input>
                </el-form-item>
                <el-button @click="directSubmit()" type="primary" class="btnRight">提交</el-button>
              </el-form>
            </div>
          </el-tab-pane>
          <el-tab-pane label="内部流转" name="inCirculation">内部流转</el-tab-pane>
          <el-tab-pane label="远程申请" name="remoteApply">远程申请</el-tab-pane>
        </el-tabs>


      </el-main>
    </el-container>


  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      searchApplyId: '',
      searchApplyDate: null,
      applyData: [],
      activeName: 'directProcess',
      showingInfo: {
        address: '',
        desc: ''
      },
      directForm: {
        processorId: '',
        processorName: '',
        advice: ''
      },
      tmpData: [
        {applyId: '001', name: '李先生', problemType: '分地问题', address: 'A地', desc: '分地不均衡', applyDate: '2020/12/3'},
        {applyId: '002', name: '王先生', problemType: '婚育问题', address: 'B地', desc: '结婚日期协商', applyDate: '2020/12/3'},
        {applyId: '003', name: '张先生', problemType: '医疗问题', address: 'C地', desc: '医疗补助发放', applyDate: '2020/12/4'}
      ],
      colConfigs: [
        {prop: 'applyId', label: '申请编号'},
        {prop: 'name', label: '姓名'},
        {prop: 'problemType', label: '问题类型'},
        {prop: 'applyDate', label: '申请日期'}
      ],
      rules: {
        processorName: [
          {required: true, message: '姓名不能为空', trigger: 'blur'},
        ],
        processorId: [
          {required: true, message: '编号不能为空', trigger: 'blur'},
        ],
        advice: [
          {required: true, message: '处理建议不能为空', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    searchApply() {

      let applyId = this.searchApplyId
      let applyDate = this.searchApplyDate
      this.applyData = this.tmpData
      // 如果设置筛选条件，则进行过滤
      if (applyId.trim().length !== 0)
        this.applyData = this.tmpData.filter(item => {
          return item.applyId === applyId
        })
      if (applyDate != null)
        this.applyData = this.applyData.filter(item => {
          return item.applyDate === applyDate.toLocaleDateString()
        })
      this.$message({
        type: 'information',
        message: '查询到 ' + this.applyData.length + ' 条记录'
      })


      //清空高亮选中和展示标签
      this.$refs.applyTable.setCurrentRow()
      this.showingInfo.desc = ''
      this.showingInfo.address = ''
    },
    showInfo(row) {
      this.showingInfo.address = row.address
      this.showingInfo.desc = row.desc
    },
    directSubmit() {
      this.$refs['directForm'].validate((valid) => {
        if (valid) {
          alert('直接处理成功');
        } else {
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.input {
  width: 200px;
  text-align: center;
}

.btnRight {
  margin-left: 700px;
}
</style>