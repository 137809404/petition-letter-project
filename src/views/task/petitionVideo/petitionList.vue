<template>

  <div class="background">
    <h3>视频信访</h3>
    <div class="div-card">
      <el-form :model="searchItem" label-width="100px" :inline="true" ref="SearchForm">
        <el-form-item label="登记号">
          <el-input v-model="searchItem.PetidSearch" style="width: 350px"></el-input>
        </el-form-item>
        <el-form-item label="登记时间">
          <el-date-picker
              v-model="searchItem.date"
              type="date"
              align="right"

          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="search()">搜索</el-button>
        </el-form-item>

      </el-form>
    </div>
    <div>
      <el-table
          :data="recordData"
          style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="登记 ID">
                <span>{{ props.row.Petid }}</span>
              </el-form-item>

              <el-form-item label="信访人员">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="身份证号">
                <span>{{ props.row.IDcard }}</span>
              </el-form-item>
              <el-form-item label="所属单位">
                <span>{{ props.row.government }}</span>
              </el-form-item>
              <el-form-item label="登记时间">
                <span>{{ props.row.date }}</span>
              </el-form-item>

              <el-form-item label="详细住址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="信访描述">
                <span>{{ props.row.desc }}</span>
              </el-form-item>

              <el-form-item>
                <el-button @click="goViewWithQuery('视频录制',props.row)">前往视频录制</el-button>
              </el-form-item>

            </el-form>
          </template>
        </el-table-column>
        <el-table-column
            label="登记时间"
            sortable
            prop="date">
        </el-table-column>
        <el-table-column
            label="登记号ID"
            prop="Petid">
        </el-table-column>
        <el-table-column
            label="信访人"
            prop="name">
        </el-table-column>
        <el-table-column
            label="描述"
            prop="desc">
        </el-table-column>
      </el-table>
    </div>

  </div>

</template>

<script>
export default {
  name: "petitionList",
  data() {
    return {
      searchItem: {
        PetidSearch: '',
        date: null,
      },

      pickerOptions2: {
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
        }]
      },


      tableData: [{
        Petid: '001',
        name: '叶修',
        date: '2020/12/4',
        IDcard: '610431200010154211',

        desc: '为国争光',
        address: '上海市普陀区真北路',
        government: '和平区',

      }, {
        Petid: '002',
        name: '叶秋',
        date: '2020/12/5',
        IDcard: '610431200010154211',

        desc: '职业选手',
        address: '上海市普陀区真北路',
        government: '浑南区',

      }, {
        Petid: '003',
        name: '哈哈',
        date: '2020-12-5',
        IDcard: '610431200010154211',

        desc: 'helloworld',
        address: '上海市普陀区真北路',
        government: '沈阳市',

      }, {
        Petid: '004',
        name: '呵呵',
        date: '2020-12-5',
        IDcard: '610431200010154211',

        desc: '信访信息描述',
        address: '上海市普陀区真北路',
        government: '东北大学',

      }],
      recordData:[],

    }
  },
  beforeMount() {
    this.recordData = this.tableData
  },


  methods: {
    goview(name) {
      this.$router.push({name}).catch(err => {
        err && console.log('刷新') // 待优化
      })
    },
    search() {
      let searchId = this.searchItem.PetidSearch

      let date = this.searchItem.date


      this.recordsData = this.tableData

      // 如果设置筛选条件，则进行过滤

      if (searchId.trim().length !== 0)
        this.recordData = this.tableData.filter(item => {
          return item.Petid === searchId
        })


      if (date != null)
        this.recordData = this.recordData.filter(item => {
          return item.date === date.toLocaleDateString()
        })

      this.$message({
        type: 'information',
        message: '查询到 ' + this.recordData.length + ' 条记录'
      })
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

.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.buttons {
  display: flex;
  flex-direction: row;
  /*align-items: center;*/
  /*justify-content: center;*/


  margin: 5px;

  padding: 0px;
  padding-left: 40px;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>