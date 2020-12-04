<template>
<div>
  <h3>接访预约</h3>
  <div style="margin-left: 5px;margin-right:5px;margin-top: 5px;margin-bottom: 5px;width: 100%;
    border-radius: 5px;
    box-shadow:  0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding-bottom: 5px;padding-right: 20px" >
    <el-row >
      <div style="font-size: 20px;font-weight: bold;
        display: flex;flex-direction: column;align-items: flex-start;justify-content: flex-start;
        margin-top: 15px;margin-left: 15px;margin-bottom: 10px;
        ">信访人信息</div>
    </el-row>

    <el-row>
      <el-col :span="6">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="18">
        <el-form-item label="信访时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="1" style="display:flex;flex-direction:row;align-items: center;justify-content: center">
            <div>--</div>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>

        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-form-item label="性别" prop="gender">
          <el-select v-model="ruleForm.gender" placeholder="请选择性别" style="width: 100%;">
            <el-option label="男" value="man"></el-option>
            <el-option label="女" value="woman"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="政治面貌" prop="politics">
          <el-select v-model="ruleForm.politics" placeholder="请选择政治面貌" style="width: 100%">
            <el-option label="群众" value="0"></el-option>
            <el-option label="共青团员" value="1"></el-option>
            <el-option label="预备党员" value="2"></el-option>
            <el-option label="党员" value="3"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="手机号" prop="phonenumber">
          <el-input v-model="ruleForm.phonenumber" style="width: 100%"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-form-item label="身份证号" prop="IDcard">
          <el-input v-model="ruleForm.IDcard" style="width: 100%"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="详细住址" prop="address">
          <el-input v-model="ruleForm.address" style="width: 100%"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
export default {
name: "apply"
}
</script>

<style scoped>

</style>