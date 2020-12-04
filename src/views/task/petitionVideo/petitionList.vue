<template>
<div>待信访人列表
<el-button @click="goview('视频录制')">前往视频录制</el-button>
</div>
</template>

<script>
export default {
name: "petitionList",
  methods:{
    goview (name) {
      this.$router.push({ name }).catch(err => {
        err && console.log('刷新') // 待优化
      })
    }
  }
}
</script>

<style scoped>

</style>