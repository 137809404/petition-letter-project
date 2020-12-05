<template>
<div>
  <div class="header"><h3>查询码查询</h3><el-button type="primary" class="searchButton" @click="onSubmit">
    查询
  </el-button></div>
  <el-form ref="form" :model="form" label-width="100px">
    <el-row>
      <el-col :span="4"><div>
        <el-form-item label="仅国家级来件">
          <el-checkbox v-model="form.country"></el-checkbox>
        </el-form-item>
      </div></el-col>
      <el-col :span="6"><div><el-form-item label="打印状态">
        <el-select v-model="form.print" placeholder="请选择">
          <el-option
              label="已打印"
              value="已打印">
          </el-option>
          <el-option
              label="未打印"
              value="未打印">
          </el-option>
        </el-select>
      </el-form-item></div></el-col>
      <el-col :span="12"><div>    <el-form-item label="打印机构">
        <el-input v-model="form.institutions"></el-input>
      </el-form-item></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="10"><div>
        <el-form-item label="信访类型">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="信" name="type"></el-checkbox>
            <el-checkbox label="访" name="type"></el-checkbox>
            <el-checkbox label="电" name="type"></el-checkbox>
            <el-checkbox label="诉" name="type"></el-checkbox>
            <el-checkbox label="邮" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </div></el-col>
      <el-col :span="12"><div>
        <el-form-item label="经办日期">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
      </div></el-col>
    </el-row>
  </el-form>
  <div>
    <el-table
        :data="tableData"
        stripe
        style="width: 100%">
      <el-table-column
          prop="code"
          label="信访件编号"
          width="300">
      </el-table-column>
      <el-table-column
          prop="institution"
          label="打印机构">
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
export default {
name: "index",
  data() {
    return {
      tableData: [
        {
          code:'国信来信（2016）1XXX号',
          institution: '沈阳市XXX'
        }
      ],
      form: {
        country:false,
        institutions: '',
        print:'',
        date1: '',
        date2: '',
        delivery: false,
        type: []
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>
  .header{
    display: flex;
    justify-content: space-between;
  }
  .header .el-button{
    height: 35px;
    padding: 0px 20px;
    margin-right: 30px;
  }
  .el-checkbox{
    margin-right: 0px;
    width: 20%;
  }
</style>