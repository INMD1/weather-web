<template>
  <!--바탕화면 삽입-->
  <div class="background-set" :style="{'backgroundImage': 'url(https://raw.githubusercontent.com/INMD1/weather-web/main/src/assets/image/background/bg'+ this.bg_id +'.jpg)'}">
    <!--메인 페이지 -->
    <nav class="navbar">
      <div class="container">
        <a class="navbar-brand MICEGothic" :style="{'color': this.title_color}"  href="#">부산광역시 종합 날씨 정보</a>
      </div>
    </nav>
    <div class="container-filed">
      <div class="row">
        <!--현재 온도 또는 습도,풍속,UV 정보를 크게 보여주는 컴포먼트-->
        <div class="col-md-8">

        </div>
        <!--검색 또는 주간날씨를 알려주는 컴포먼트-->
        <div class="col-md-4">

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    components : {

    },
    data() {
      return {
        bg_id : 0,
        title_color: "black"
      };
    }, 
    mounted() {
      //이미 랜덤 호출 코드
      this.bg_id = Math.floor(Math.random() * (8 - 1)) + 1;

      //어두운 사진이 나오면 글자 색이 바뀐다.
      if(this.bg_id == 4 || this.bg_id == 6 || this.bg_id == 7){
        this.title_color = "white"
      }
    }
  }
</script>

