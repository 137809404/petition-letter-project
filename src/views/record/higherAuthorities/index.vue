<template>
  <div>
    <h3>上级转交办件</h3>

    <h4>转送任务（主送）</h4>
    <div class="paginationStyle">
      <el-pagination
          :current-page="currentPage"
          :page-sizes="[20, 40, 60, 80,100]"
          :page-size="20"
          layout="total, sizes, prev, pager, next, jumper"
          :total="100"
          :background="true"
      >
      </el-pagination>
    </div>
    <el-table :data="primaryData" ref="primaryTable">
      <el-table-column
          v-for="{prop,label} in colConfigs"
          :key="prop"
          :prop="prop"
          :label="label">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handle(scope.row)">处理</el-button>
        </template>
      </el-table-column>
    </el-table>
    <h4>转送任务（督办/抄送）</h4>
    <div class="paginationStyle">
      <el-pagination
          :current-page="currentPage"
          :page-sizes="[20, 40, 60, 80,100]"
          :page-size="20"
          layout="total, sizes, prev, pager, next, jumper"
          :total="100"
          :background="true"
      >
      </el-pagination>
    </div>
    <el-table :data="passData" ref="passTable">
      <el-table-column
          v-for="{prop,label} in colConfigs"
          :key="prop"
          :prop="prop"
          :label="label">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handle(scope.row)">处理</el-button>
        </template>
      </el-table-column>
    </el-table>



  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      currentPage: 1,
      colConfigs: [
        {prop: 'letterType', label: '来函类型'},
        {prop: 'letterId', label: '来函编号'},
        {prop: 'letterUnit', label: '来函单位'},
        {prop: 'businessId', label: '业务编号'},
        {prop: 'problemPlace', label: '问题发生地'},
        {prop: 'petitionerAddress', label: '信访人地址'},
        {prop: 'petitionerName', label: '信访人'},
        {prop: 'status', label: '状态'},
        {prop: 'date', label: '任务时间'},
      ],
      primaryData: [
        {
          letterType: '综合转送函',
          letterId: '辽（2019）',
          letterUnit: '辽宁省信访局',
          businessId: '电邮（2020）',
          problemPlace: '丛台区',
          petitionerAddress: '创新路',
          petitionerName: '王先生',
          status: '待分发',
          date: '2020/12/01',
        },
       {
          letterType: '综合转送函',
          letterId: '辽（2020）',
          letterUnit: '辽宁省信访局',
          businessId: '信邮（2020）',
          problemPlace: '浑南区',
          petitionerAddress: '创新路',
          petitionerName: '李先生',
          status: '待分发',
          date: '2020/12/02',
        },

      ],
      passData: [
        {
          letterType: '转送单',
          letterId: '辽（2017）',
          letterUnit: '辽宁省信访局',
          businessId: '电邮（2020）',
          problemPlace: '丛台区',
          petitionerAddress: '创新路',
          petitionerName: '王先生',
          status: '待分发',
          date: '2020/12/03',
        },
       {
          letterType: '转送单',
          letterId: '辽（2020）',
          letterUnit: '辽宁省信访局',
          businessId: '信邮（2020）',
          problemPlace: '浑南区',
          petitionerAddress: '创新路',
          petitionerName: '李先生',
          status: '待分发',
          date: '2020/12/05',
        }],

    }
  },
  methods:{
    handle(row){
      this.$message({
        type: 'information',
        message: '正在处理来函编号为 ' + row.letterId + '的函件'
      })
    }
  }
}
</script>

<style scoped>
.paginationStyle {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px
}
</style>