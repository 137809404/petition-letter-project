<template>
  <div class="sidebar">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
    router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>任务</span>
        </template>
          <el-menu-item index="/petitionVideo">信访录像</el-menu-item>
          <el-menu-item index="/videoRecords">信访查询</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "pageAside",
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.sidebar {
  height: 100%;
  top: 120px;
  bottom: 0;
  overflow-y: scroll;
  width: 200px;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>