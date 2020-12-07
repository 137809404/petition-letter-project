<template>
  <div>
    <h3>通知</h3>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="待接收消息" name="first">待接收消息</el-tab-pane>
      <el-tab-pane label="已发送消息" name="second">已发送消息</el-tab-pane>
      <el-tab-pane label="发送消息" name="third">
        <el-form label-width="150px">
          <el-form-item label="接收人">
            <el-input v-model="formData.recipient" style="width: 400px">
              <el-button slot="append" icon="el-icon-tickets" @click="select()"></el-button>
            </el-input>

          </el-form-item>
          <el-form-item label="文件上传"  style="width: 70%">
            <el-upload
                class="upload-demo"
                action=url
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="formData.fileList">
              <el-button size="small" type="primary" icon="el-icon-upload">点击上传</el-button>
<!--              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
            </el-upload>
          </el-form-item>
          <el-form-item label="简述（500字以内）" style="width: 70%">
            <el-input
                type="textarea"
                :autosize="{ minRows: 3,}"
                placeholder="请输入内容"
                v-model="formData.description">
            </el-input>
          </el-form-item>
          <el-form-item style="width: 70%">
            <div style="display: flex;flex-direction: row;align-items: flex-end;justify-content: flex-end">
              <el-button type="primary" @click="onSubmit" style="width: 20%">提交</el-button>
            </div>
          </el-form-item>

        </el-form>

      </el-tab-pane>


    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      activeName:'third',
      //文件上传地址
      url:'',
      //表单数据
      formData:{
        recipient:'',
        description:'',
        fileList: [{name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
          {name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      },

    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    select(){
      this.$message({
        message:'从列表选择联系人',
        type:'info'
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      fileList.delete(file)
      return this.$confirm(`确定移除 ${ file.name }？`);
    }

  }

}
</script>

<style scoped>



</style>