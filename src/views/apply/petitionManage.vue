<template>
  <div>
    <h3>申请管理</h3>
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
                            align="right"
                            type="date"
                            placeholder="选择日期">
            </el-date-picker>
          </el-form-item>

          <el-button type="primary" size="medium" @click="searchApply">查找</el-button>
        </el-form>

        <br>
        <el-table highlight-current-row :data="applyData" @row-click="showInfo">

          <el-table-column
              v-for="{prop,label} in colConfigs"
              :key="prop"
              :prop="prop"
              :label="label">
          </el-table-column>


        </el-table>

      </el-aside>
      <el-main>
        <el-container>
          <el-header>
            Header区域: 进行详细信息展示
          </el-header>
          <el-main>
            Main区域: <br />
            对于信访申请，有两种处理方式：
            <br/>
            1. 本地处理：内部流转 + 直接处理
            <br/>
            2. 申请远程
          </el-main>
        </el-container>

      </el-main>
    </el-container>


  </div>
</template>

<script>
export default {
  name: "petitionManage",
  data() {
    return {
      searchApplyId: '',
      searchApplyDate: new Date(),
      applyData: [],
      tmpData: [
        {applyId: '001', name: '李先生', problemType: '分地问题', applyDate: '2020/12/3'},
        {applyId: '002', name: '王先生', problemType: '婚育问题', applyDate: '2020/12/3'},
        {applyId: '003', name: '张先生', problemType: '医疗问题', applyDate: '2020/12/4'}
      ],
      colConfigs: [
        {prop: 'applyId', label: '申请编号'},
        {prop: 'name', label: '姓名'},
        {prop: 'problemType', label: '问题类型'},
        {prop: 'applyDate', label: '申请日期'}
      ],
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
    },
    showInfo() {
      this.$message({
        type: 'information',
        message: '正在查看信息'
      })
    }
  }
}
</script>

<style scoped>
.input {
  width: 200px;
  text-align: center;
}

</style>