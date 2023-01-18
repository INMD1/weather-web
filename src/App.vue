<template>
  <!--바탕화면 삽입-->
  <div
    class="background-set"
    :style="{
      backgroundImage:
        'url(https://raw.githubusercontent.com/INMD1/weather-web/main/src/assets/image/background/bg' +
        this.$store.state.bg_id +
        '.webp)',
    }"
  >
    <!--검색 페이지 (안쓸때는 hide 처리)-->
    <div class="algolia" v-if="this.$store.state.search_check == 1">
      <div class="card search_config">
        <model-select
          :options="options"
          v-model="item"
          placeholder="select item"
        >
        </model-select>
      </div>
    </div>
    <!--메인 페이지 -->
    <div class="container-filed">
      <div class="row">
        <!--현재 온도 또는 습도,풍속,UV 정보를 크게 보여주는 컴포먼트-->
        <div class="col-lg-9">
          <nav class="navbar">
            <div class="container">
              <a
                class="navbar-brand MICEGothic"
                :style="{ color: this.title_color, 'font-weight': 'bold' }"
                href="#"
                >부산광역시 종합 날씨 정보</a
              >
            </div>
          </nav>
          <anothercom />
        </div>
        <!--검색 또는 주간날씨를 알려주는 컴포먼트-->
        <div class="hidden menu_background col-md-3">
          <menucom />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { ModelSelect } from 'vue-search-select'
import menucom from "./compoment/menu_com.vue";
import anothercom from "./compoment/another_com.vue";
import data from "./assets/in.json"
export default {
  name: 'App',
  components : {
    menucom,
    anothercom,
    ModelSelect

  },
  data() {
    return {
      title_color: "black",
      item: {
          value: '',
          text: ''
        },
      options: data,

    };
  },
  methods :{
    reset () {
        this.item = {}
      },
      selectFromParentComponent1 () {
        // select option from parent component
        this.item = this.options[0]
      },
  },
  mounted() {
    //어두운 사진이 나오면 글자 색이 바뀐다.
    if(this.$store.state.bg_id == 4 || this.$store.state.bg_id == 7){
      this.title_color = "white"
    }
  }
}
</script>
