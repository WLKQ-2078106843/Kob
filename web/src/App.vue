<!-- 用来写html -->
<template> 
  <div>
    <div>Bot昵称：{{bot_name}}</div>
    <div>Bot战力：{{ bot_rating }}</div>
  </div>
</template>

<!-- 用来写js -->
<script>
import $ from 'jquery';
import { ref } from 'vue'; // 定义变量

export default {
    name: "App",
    setup: () => { // 主函数入口
      let bot_name = ref(""); // 变量
      let bot_rating = ref("");

      // 从后端返回数据
      $.ajax({
        type: "get",
        url: "http://localhost:8080/pk/getbotinfo/",
        data: "data",
        dataType: "json",
        success: function (response) { // 返回的数据存在response中
          bot_name.value = response.name;
          bot_rating.value = response.rating;
        }
      });
      return { // 返回变量的值
      bot_name,
      bot_rating
    }
  }
}
</script>

<!-- 用来写css -->
<style>
</style>
