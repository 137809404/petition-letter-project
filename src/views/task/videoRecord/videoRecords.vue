<template>
  <div>
    <h3>信访记录查询</h3>
    <el-form ref="form" label-width="120px" :inline="true" table-width @submit.native.prevent>
      <!-- 搜索条件 -->
      <el-form-item label="录像编号">
        <el-input v-model="searchPetitionId"/>
      </el-form-item>

      <el-form-item label="信访人">
        <el-input v-model="petitioner"/>
      </el-form-item>


      <el-form-item label="录制时间">
        <el-date-picker
            v-model="recordDate"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
        </el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="search">查找</el-button>
      </el-form-item>

      <br>
      <!-- 记录展示表格 -->
      <el-table :data="recordsData" ref="recordsTable">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column
            v-for="{prop,label} in colConfigs"
            :key="prop"
            :prop="prop"
            :label="label">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="watch(scope.row)">观看录像</el-button>
          </template>
        </el-table-column>

      </el-table>
    </el-form>

  </div>
</template>

<script>
export default {
  name: "videoRecords",
  data() {
    return {
      searchPetitionId: '',
      petitioner: '',
      recordDate: null,


      recordsData: [],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      colConfigs: [
        {prop: 'recordId', label: '记录编号'},
        {prop: 'petitioner', label: '信访人'},
        {prop: 'startTime', label: '录制时间'},
        {prop: 'totalTime', label: '总时长'},
      ],
      tmpData: [
        {recordId: '001', petitioner: '王先生', startTime: '2020/12/1', totalTime: '1h'},
        {recordId: '001', petitioner: '张先生', startTime: '2020/12/2', totalTime: '1h'},
        {recordId: '001', petitioner: '王先生', startTime: '2020/12/3', totalTime: '1h'},
        {recordId: '002', petitioner: '张先生', startTime: '2020/12/3', totalTime: '2h'},
        {recordId: '003', petitioner: '张先生', startTime: '2020/12/2', totalTime: '3h'},
        {recordId: '003', petitioner: '张先生', startTime: '2020/12/3', totalTime: '3h'},
      ]
    }
  },
  mounted() {
    this.search()
  },
  methods: {
    search() {
      let searchId = this.searchPetitionId
      let petitioner = this.petitioner
      let date = this.recordDate


      this.recordsData = this.tmpData

      // 如果设置筛选条件，则进行过滤

      if (searchId.trim().length !== 0)
        this.recordsData = this.tmpData.filter(item => {
          return item.recordId === searchId
        })

      if (petitioner.trim().length !== 0)
        this.recordsData = this.recordsData.filter(item => {
          return item.petitioner === petitioner
        })

      if (date != null)
        this.recordsData = this.recordsData.filter(item => {
          return item.startTime === date.toLocaleDateString()
        })

      this.$message({
        type: 'information',
        message: '查询到 ' + this.recordsData.length + ' 条记录'
      })
    },

    watch(row) {
      this.$message({
        type: 'information',
        message: '正在观看录像，录像编号为： ' + row.recordId
      })
      this.goViewWithQuery('查看录像', row)
    },
    goViewWithQuery(name, data) {
      this.$router.push({name, query: {data: data}}).catch(err => {
        err && console.log('刷新') // 待优化
      })
    }

  }
}
</script>

<style scoped>

</style>