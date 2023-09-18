<template>
  <div class="row">
    <div class="blank">
      <div class="container-sm flet_left" >
        <div class=" col-8" >
          <div class="container hidden">
            <ion-icon
              class="sing"
              :style="{ color: this.color }"
              name="sunny"
            ></ion-icon>
            <h4 class="blod" :style="{ color: this.color }">부산광역시</h4>
            <!--아래 조건문 추가-->
            <h5
              v-if="this.$store.state.select_location.text == ''"
              class="bold"
              :style="{ color: this.color, fontSize: '0.9rem' }"
            >
              지역을 검색해주세요
            </h5>
            <h5
              v-else
              class="bold"
              :style="{ color: this.color, fontSize: '1.2rem' }"
            >
              {{ this.$store.state.select_location.text }}
            </h5>
          </div>
          <div class="container-fluid hidden_PC">
            <div class="row row-2">
              <div class="col-4">
                <ion-icon
                  class="sing"
                  :style="{ color: this.color, width: '17vw', height: '9vh' }"
                  name="sunny"
                ></ion-icon>
              </div>
              <div class="col-6" >
                <span >현재온도</span>
                <div class="w-100"></div>
                <span
                  class="bold"
                  :style="{ 'font-size': '2em', color: this.color }"
                  >30°C</span
                >
              </div>
              <div class="w-100"></div>
              <div class="col" v-on:click="search">
                <h6 class="blod" :style="{ color: this.color }">부산광역시</h6>
                <!--아래 조건문 추가-->
                <h5
                  v-if="this.$store.state.select_location.text == ''"
                  class="bold"
                  :style="{ color: this.color, fontSize: '0.8rem' }"
                >
                  여기를 눌려 지역을 검색하세요
                </h5>
                <h5
                  v-else
                  class="bold"
                  :style="{ color: this.color, fontSize: '1.2rem' }"
                >
                  {{ this.$store.state.select_location.text }}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--이때 해변가 주변이면 최고,최저 온도, 파도,수온 습도 정보를 제공한다.
      그리고 다른 동네 일경우는 최고,최저 온도, 습도, 자외선, 미세먼지 정보를 제공한다.-->
    <div class="another_background">
      <div class="row hidden">
 
      </div>
      <div class="hidden_PC">
        <menucom style="margin-top: 3vh;" />
      </div>
    </div>
  </div>
</template>

<script>
import menucom from "./menu_com.vue";
export default {
  components: {
    menucom
  },
  props: ["bgid"],
  data() {
    return {
      color: "black",
    };
  },
  //watch를 활용해서 상위컴포먼트 데이터 변화를 감지한다.
  watch: {},
  //바로 실행되는 곳이다
  created() {},
  mounted() {
    if (this.$store.state.bg_id == 4 || this.$store.state.bg_id == 7) {
      this.color = "white";
    }
  },
  methods: {
    search() {
      this.$store.commit("search", 1);
    },
  },
};
</script>
