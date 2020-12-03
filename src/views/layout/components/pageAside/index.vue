<template>
  <div class="sidebar">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
    router>
      <el-menu-item-group v-for="(item,key) in routesArr" :index="key+1+''" :key=key>
        <template class="grouptitle" slot="title">{{item.name}}</template>
        <el-menu-item v-for="(subitem,key) in item.children" :key=key :index="subitem.path">{{subitem.name}}</el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </div>
</template>

<script>
import {routes} from "@/router";
export default {
  name: "pageAside",
  data(){
    return {
      routesArr: [],
      fullPath: ''
    }
  },
  methods:{
    init () {
      this.routesArr = routes.filter(item => item.hidden !== true)
      this.fullPath = '/' + this.$route.fullPath.split('/')[1]
      console.log(this.routesArr)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  watch: {
    $route: {
      handler (newVal) {
        if (newVal) {
          this.init()
        }
      },
      immediate: true
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
  overflow: visible;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
  padding-top: 10px;
}

.el-menu-item-group /deep/ .el-menu-item-group__title{
  position: relative;
  /*left: -10px;*/
  width: 188px;
  color: white;
  line-height: 25px;
  font-size: 20px;
  font-weight: bolder;
  height: 25px;
  left: -8px;
  background-color: cornflowerblue;
}
.el-menu-item{
  height: 40px;
  line-height: 40px;
}
</style>