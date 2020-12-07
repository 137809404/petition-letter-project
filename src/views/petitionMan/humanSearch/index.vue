<template>
  <div>
    <h3>信访人查询搜索</h3>

    <el-form ref="form" label-width="120px" :inline="true" table-width @submit.native.prevent>
      <!-- 搜索条件 -->
      <el-form-item label="姓名">
        <el-input v-model="searchName"/>
      </el-form-item>

      <el-form-item label="身份证号">
        <el-input v-model="searchId"/>
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="search">查找</el-button>
      </el-form-item>

      <br>
      <!-- 记录展示表格 -->
      <el-table :data="petitionerData" ref="petitionerData">
        <el-table-column
            v-for="{prop,label} in colConfigs"
            :key="prop"
            :prop="prop"
            :label="label">
        </el-table-column>
      </el-table>
    </el-form>


  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
      searchId:'',
      searchName:'',
      petitionerData:[],
      colConfigs: [
        {prop: 'name', label: '姓名'},
        {prop: 'id', label: '身份证号'},
        {prop: 'phoneNum', label: '手机号'},
        {prop: 'address', label: '家庭住址'},
      ],
      tmpData: [
        {id: '001', name: '王生', phoneNum: '10086', address: '陕西省'},
        {id: '002', name: '李承', phoneNum: '1008611', address: '贵州省'},
        {id: '003', name: '杨宁', phoneNum: '10010', address: '浙江省'},
        {id: '004', name: '杨宁', phoneNum: '95535', address: '福建省'},
      ]
    }
  },
  methods:{
    search() {

      let searchId = this.searchId;
      let searchName = this.searchName;


      this.petitionerData = this.tmpData

      // 如果设置筛选条件，则进行过滤

      if (searchId.trim().length !== 0)
        this.petitionerData = this.tmpData.filter(item => {
          return item.id === searchId
        })

      if (searchName.trim().length !== 0)
        this.petitionerData = this.petitionerData.filter(item => {
          return item.name === searchName
        })


      this.$message({
        type: 'information',
        message: '查询到 ' + this.petitionerData.length + ' 条记录'
      })
    },
  }
}
</script>

<style scoped>

</style>