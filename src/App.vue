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
        <ais-instant-search
          :search-client="searchClient"
          index-name="demo_ecommerce">
          <ais-search-box  />
          <ais-hits style="height: 10vh">
            <template v-slot:item="{ item }">
              <h2>{{ item.name }}</h2>
            </template>
          </ais-hits>
        </ais-instant-search>
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
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite-min.css';

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
      title_color: "black",
      searchClient: algoliasearch(
        'B1G2GM9NG0',
        'aadef574be1f9252bb48d4ea09b5cfe5'
      ),
    };
  },
  mounted() {
    //어두운 사진이 나오면 글자 색이 바뀐다.
    if(this.$store.state.bg_id == 4 || this.$store.state.bg_id == 7){
      this.title_color = "white"
    }
  }
}
</script>
