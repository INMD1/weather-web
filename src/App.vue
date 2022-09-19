<template>
  <!--바탕화면 삽입-->
  <div class="background-set" :style="{'backgroundImage': 'url(https://raw.githubusercontent.com/INMD1/weather-web/main/src/assets/image/background/bg'+ bg_id +'.jpg)'}">
    <!--메인 페이지 -->
    <div class="container-filed">
      <div class="row">
        <div class="col-md-8"></div>

        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    data() {
      return {
        bg_id : 2
      };
    }, 
    mounted() {

    }
  }
</script>

