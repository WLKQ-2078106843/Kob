<!-- 用来写html -->
<template> 
  <NavBar/>
  <router-view></router-view>
</template>



<!-- 用来写js -->
<script>
// 导入组件 ./表示返回一个上一级 ../表示返回两个上一级
import NavBar from './components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

export default {
  components: {
    NavBar
  }
}
</script>

<!-- 用来写css -->
<style>
body {
  /* 导入图片~@/表示src */
  background-image: url("~@/assets/images/background.jpeg"); 
  background-size: cover;
  /* 背景图片%100填充 */
}
</style>
