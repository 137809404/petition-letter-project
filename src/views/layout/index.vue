<template>
  <div class="container">
    <el-container>
      <el-header>
        <page-header/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <page-aside/>
        </el-aside>
        <el-main>
          <page-main/>
        </el-main>
      </el-container>
    </el-container>
  </div>
<!--  <div class="test"></div>-->
</template>

<script>
import pageMain from './components/pageMain'
import pageHeader from './components/pageHeader'
import pageAside from './components/pageAside'
export default {
  components: {
    pageHeader,
    pageMain,
    pageAside
  },
  created () {
  },
  methods: {

  },
  computed: {
    flag () {
      return true
    }
  }
}
</script>

<style scoped>
.container{
  width: 100vw;
  height: 100vh;
  background: -webkit-gradient(linear, 0 0, 0 50%, from(skyblue), to(white));
  /*background: -webkit-gradient(linear, 0 70%, 0 100%, from(white), to(skyblue));*/
}
.el-aside{
  overflow: visible;
}
.el-container{
  height: 100%;
  margin: 0px 20px;
  background-color: transparent;
}
.el-header{
  height: 100px !important;
  padding: 0px;
}
.el-main{
  background-color: white;
}

</style>
