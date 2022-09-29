<template>
  <div class="row">
    <div class="blank">
      <div class="container-sm">
        <div class="col-4">
          <div class="container">
            <ion-icon class="sing" :style="{'color': this.color}"  name="sunny"></ion-icon>
            <h4 class="blod" :style="{'color': this.color}">부산광역시</h4>
            <h5 class="bold" :style="{'color': this.color}">해운대구</h5>
            <span class="bold" :style="{'font-size': '3em', 'color': this.color}">30°C</span>
            <p class="bold" :style="{'color': this.color}"><ion-icon name="map"></ion-icon>부산광역시 해운대구 해운대해변로</p>
          </div>
        </div>
      </div>
    </div>
    <!--이때 해변가 주변이면 최고,최저 온도, 파도,수온 습도 정보를 제공한다.
        그리고 다른 동네 일경우는 최고,최저 온도, 습도, 자외선, 미세먼지 정보를 제공한다.
        구분은 네 주소 ㄱ
         -->
    <div class="another_background">
      <div class="row hidden">
          <div class="col another_line another_grild_size">
              <div class="another_margin">
                  <h3 class="another_text_title" :style="{'color': this.color}">파도</h3>
                  <i class="bi bi-tsunami another_icon" :style="{'color': this.color}"></i>
                  <p class="another_text_data" :style="{'color': this.color}" >30m/s</p>
              </div>
          </div>
          <div class="col another_line another_grild_size">
              <div class="another_margin">
                  <h3 class="another_text_title" :style="{'color': this.color}">풍향</h3>
                  <i class="bi bi-signpost another_icon" :style="{'color': this.color}"></i>
                  <p class="another_text_data" :style="{'color': this.color}" >남동쪽</p>
              </div>
          </div>
          <div class="col another_line another_grild_size">
              <div class="another_margin">
                  <h3 class="another_text_title" :style="{'color': this.color}">자외전</h3>
                  <i class="bi bi-brightness-alt-high another_icon" :style="{'color': this.color}"></i>
                  <p class="another_text_data" :style="{'color': this.color}" >매우 높음</p>
              </div>
          </div>
          <div class="col another_line another_grild_size">
              <div class="another_margin">
                  <h3 class="another_text_title" :style="{'color': this.color}">습도</h3>
                  <i class="bi bi-droplet-half  another_icon
                  " :style="{'color': this.color}"></i>
                  <p class="another_text_data" :style="{'color': this.color}" >30%</p>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bgid"],
  data() {
		return {
      color: "black",
    }
  },
  //watch를 활용해서 상위컴포먼트 데이터 변화를 감지한다.
  watch: {
		bgid() {
      if(this.bgid == 4 || this.bgid == 7){
        this.color = "white"
      }
    }
  },
  //바로 실행되는 곳이다
  created() {

  }
}
</script>