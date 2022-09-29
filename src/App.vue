<template>
  <!--바탕화면 삽입-->
  <div class="background-set" :style="{'backgroundImage': 'url(https://raw.githubusercontent.com/INMD1/weather-web/main/src/assets/image/background/bg'+ this.bg_id +'.webp)'}">
    <!--메인 페이지 -->
    <div class="container-filed">
      <div class="row">
        <!--현재 온도 또는 습도,풍속,UV 정보를 크게 보여주는 컴포먼트-->
        <div class="col-lg-9">
          <nav class="navbar">
            <div class="container">
              <a class="navbar-brand MICEGothic" :style="{'color': this.title_color, 'font-weight': 'bold'}"  href="#">부산광역시 종합 날씨 정보</a>
            </div>
          </nav>
          <anothercom :bgid="bg_id"/>
        </div>
        <!--검색 또는 주간날씨를 알려주는 컴포먼트-->
        <div class="hidden menu_background col-md-3">
          <menucom :bgid="bg_id"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
  import menucom from "./compoment/menu_com.vue";
  import anothercom from "./compoment/another_com.vue";
  export default {
    name: 'App',
    components : {
      menucom,
      anothercom
    },
    data() {
      return {
        bg_id : 0,
        title_color: "black"
      };
    }, 
    mounted() {
      //이미 랜덤 호출 코드
      this.bg_id = Math.floor(Math.random() * (8 - 2)) + 2;

      //어두운 사진이 나오면 글자 색이 바뀐다.
      if(this.bg_id == 4 || this.bg_id == 7){
        this.title_color = "white"
      }
    }
  }
</script>

