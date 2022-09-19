<template>
  <!--바탕화면 삽입-->
  <div class="background-set" :style="{'backgroundImage': 'url(../image/background/bg1.jpg)'}">
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
        bg_path : "./assets/background/bg1"
      };
    }, 
    mounted() {

    }
  }
</script>

