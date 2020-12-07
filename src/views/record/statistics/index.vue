<template>
<div>
  <h3>数据统计</h3>
  <el-form ref="form" :model="form" label-width="100px">
    <el-row>
      <el-col :span="12"><div>
        <el-form-item label="统计范围">
          <el-date-picker
              v-model="form.time"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions">
          </el-date-picker>
        </el-form-item>
      </div>
      </el-col>
      <el-col :span="6"><div>
        <el-form-item label="">
          <el-checkbox label="显示未及时、未按期" v-model="form.timeout"></el-checkbox>
        </el-form-item>
      </div></el-col>
      <el-col :span="6"><div>
        <el-form-item>
          <el-button type="primary">检索</el-button>
          <el-button type="primary">导出</el-button>
        </el-form-item>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div>
        <el-form-item label="受理单位">
          <el-select v-model="form.institution" placeholder="请选择">
            <el-option
                label="国家信访局与河北省信访局"
                value="国家信访局与河北省信访局">
            </el-option>
          </el-select>
        </el-form-item>
      </div></el-col>
      <el-col :span="6"><div>
        <el-form-item label="全系统初重">
          <el-select v-model="form.allSysten" placeholder="请选择">
            <el-option
                label="全部"
                value="全部">
            </el-option>
          </el-select>
        </el-form-item>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div>
        <el-form-item label="信访形式">
          <el-select v-model="form.type" placeholder="请选择">
          </el-select>
        </el-form-item>
      </div></el-col>
      <el-col :span="6"><div>
        <el-form-item label="信访目的">
          <el-select v-model="form.purpose" placeholder="请选择">
            <el-option
                label="全部"
                value="全部">
            </el-option>
          </el-select>
        </el-form-item>
      </div></el-col>
      <el-col :span="6"><div>
        <el-form-item label="经办人">
          <el-select v-model="form.agent" placeholder="请选择">
          </el-select>
        </el-form-item>
      </div></el-col>
    </el-row>
  </el-form>
  <el-table
      :data="tableData">
    <el-table-column
        prop="institution"
        label="地区/单位"
        width="100"
        align="center">
    </el-table-column>
    <el-table-column label="受理/不受理--续访机构" align="center">
      <el-table-column
          prop="province"
          label="应受理"
          align="center">
      </el-table-column>
      <el-table-column
          prop="city"
          label="及时受理"
          align="center">
      </el-table-column>
      <el-table-column
          prop="address"
          label="及时受理率"
          align="center">
      </el-table-column>
    </el-table-column>
    <el-table-column label="受理/不受理--有权机关" align="center">
      <el-table-column
          prop="province"
          label="应受理"
          align="center">
      </el-table-column>
      <el-table-column
          prop="city"
          label="及时受理"
          align="center">
      </el-table-column>
      <el-table-column
          prop="address"
          label="及时受理率"
          align="center">
      </el-table-column>
    </el-table-column>
    <el-table-column label="满意度评价--续访机构" align="center">
      <el-table-column
          prop="province"
          label="满意"
          align="center">
      </el-table-column>
      <el-table-column
          prop="city"
          label="基本满意"
          align="center">
      </el-table-column>
      <el-table-column
          prop="address"
          label="不满意"
          align="center">
      </el-table-column>
      <el-table-column
          prop="address"
          label="满意率"
          align="center">
      </el-table-column>
      <el-table-column
          prop="address"
          label="超时未评价"
          align="center">
      </el-table-column>
      <el-table-column
          prop="address"
          label="应评价小计"
          align="center">
      </el-table-column>
      <el-table-column
          prop="address"
          label="答评率"
          align="center">
      </el-table-column>
    </el-table-column>
    <el-table-column label="满意度评价--有权机关" align="center">
      <el-table-column
          prop="province"
          label="满意"
          align="center">
      </el-table-column>
      <el-table-column
          prop="city"
          label="基本满意"
          align="center">
      </el-table-column>
      <el-table-column
          prop="address"
          label="不满意"
          align="center">
      </el-table-column>
      <el-table-column
          prop="address"
          label="满意率"
          align="center">
      </el-table-column>
      <el-table-column
          prop="address"
          label="超时未评价"
          align="center">
      </el-table-column>
      <el-table-column
          prop="address"
          label="应评价小计"
          align="center">
      </el-table-column>
      <el-table-column
          prop="address"
          label="答评率"
          align="center">
      </el-table-column>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
name: "index",
  data(){
  return{
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
      }]
    },
    form:{
      time:'',
      institution:'',
      allSysten:'',
      timeout:false,
      type:'',
      purpose:'',
      agent:''
    },
    tableData:[]
  }
  }
}
</script>

<style scoped>
.el-date-picker /deep/ .el-date-editor{
  width: 100% !important;
}
</style>