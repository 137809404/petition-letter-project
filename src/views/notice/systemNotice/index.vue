<template>
<div>
  <el-card>
    <div slot="header" class="clearfix" style="font-size: 25px;">
      <span>系统通知</span>
    </div>
    <div>
      <el-form ref="form" :model="FormData" label-width="80px">
        <el-form-item label="通知时间">
          <el-date-picker
              v-model="FormData.daterange"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions">
          </el-date-picker>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="通知类型">
              <el-select v-model="FormData.noticeType" placeholder="请选择通知类型" style="width: 350px;">
                <el-option label="满意度评价" value="satisfaction"></el-option>
                <el-option label="其他" value="other"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="通知标题">
              <el-input v-model="FormData.noticeTopic" style="width: 350px;"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <div style="display: flex;flex-direction: row;align-items: center;justify-content: center">
            <el-button type="primary" @click="onSearch" icon="el-icon-search" style="width: 250px;">搜索</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
  <div style="width: 100%">
    <div style="width: 100%;display: flex;flex-direction: row;align-items: center;justify-content: center;margin-top: 10px">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[20, 40, 60, 80,100]"
          :page-size="20"
          layout="total, sizes, prev, pager, next, jumper"
          :total="100"
          :background="true"
      >
      </el-pagination>
    </div>
    <div style="width: 100%;display: flex;flex-direction: row;align-items: center;justify-content: center">
      <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            label="通知时间"
            width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
            prop="noticeType"
            label="通知类型"
            width="120">
        </el-table-column>
        <el-table-column
            prop="noticeTopic"
            label="地址"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="120">
          <template slot-scope="scope">
            <el-button
                @click.native.prevent="browse(scope.$index, tableData)"
                type="text"
                size="small">
              浏览
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>

</div>
</template>

<script>
export default {
name: "index",
  data() {
    return {
      //表格数据
      tableData: [
        {
          date: '2020/12/01',
          noticeType: '满意度评价',
          noticeTopic: '通知消息标题通知消息标题通知消息标题通知消息标题通知消息标题通知消息标题通知消息标题',
        },
        {
          date: '2020/12/03',
          noticeType: '满意度评价',
          noticeTopic: '通知消息标题通知消息标题通知消息标题通知消息标题通知消息标题通知消息标题通知消息标题',
        },
        {
          date: '2020/12/04',
          noticeType: '满意度评价',
          noticeTopic: '通知消息标题通知消息标题通知消息标题通知消息标题通知消息标题通知消息标题通知消息标题',
        },
        {
          date: '2020/12/05',
          noticeType: '满意度评价',
          noticeTopic: '通知消息标题通知消息标题通知消息标题通知消息标题通知消息标题通知消息标题通知消息标题',
        },
        {
          date: '2020/12/06',
          noticeType: '满意度评价',
          noticeTopic: '通知消息标题通知消息标题通知消息标题通知消息标题通知消息标题通知消息标题通知消息标题',
        },
        {
          date: '2020/12/07',
          noticeType: '满意度评价',
          noticeTopic: '通知消息标题通知消息标题通知消息标题通知消息标题通知消息标题通知消息标题通知消息标题',
        },

      ],
      multipleSelection: [],
      //分页
      currentPage: 1,

      //通知筛选
      FormData: {
        dateRange: '',
        noticeType: '',
        noticeTopic: ''
      },
      //日期快速选项
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }],
      }
    }
  },
  methods: {
    onSearch() {
      console.log('submit!');
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    browse(index, rows) {
      this.$message({
        message:'浏览详细信息'+index+rows,
        type:"info"
      })

    }
  }

}
</script>

<style scoped>

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
</style>