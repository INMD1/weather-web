<template>
  <div class="container">
    <!-- 대한민국 표준시간 제공 -->
    <div class="row">
      <div class="col">
        <div class="menu_time">
          <div style="margin: auto">
            <h4 class="blod" :style="{ color: this.color }">
              현재 대한민국 표준 시간은...
            </h4>
            <span
              class="blod"
              style="font-size: 2em"
              :style="{ color: this.color }"
              >{{ this.time }}</span
            >
            <p
              class="blod"
              style="font-size: 1em"
              :style="{ color: this.color }"
            >
              {{ this.date }}
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <!--검색바 생성-->
        <div style="height: 10vh; display: flex">
          <div style="margin: auto">
            <!-- Search form -->
            <form>
              <button class="search">
                <div class="search-another">
                  <ion-icon style="font-size: 1em" name="search"></ion-icon>
                  <span class="search-text">지역 검색하기</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="col">
        <!--주간 날씨, 습도, 관련 뉴스 제공-->
          <h3 class="blod" :style="{ color: this.color }">주간 날씨</h3>
          <div class="menu_card card "  >
            <div class="card-body">
                <div class="menu_card_out">
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                  </div>
              </div>
          </div>
          <h3 class="blod" :style="{ color: this.color }">바람</h3>
          <div class="menu_card card " >
            <div class="card-body">
                <div class="menu_card_out">
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                    <div class=" menu_card_data">TEST중입니다</div>
                  </div>
              </div>          
            </div>
          <h3 class="blod" :style="{ color: this.color }">지역 정보</h3>
          <!--이 데이터들은 해수욕장 데이터가 리턴이 되면 뜬다-->
          <div class="row row-cols-2 g-2 g-lg-3">
            <div class="col">
              <div class="p-3 border bg-light">뭐 넣을까</div>
            </div>
            <div class="col">
              <div class="p-3 border bg-light">뭐 넣을까</div>
            </div>
            <div class="col">
              <div class="p-3 border bg-light">뭐 넣을까</div>
            </div>
            <div class="col">
              <div class="p-3 border bg-light">뭐 넣을까</div>
            </div>
          </div>
          <!--이 아래 데이터 같은 경우 일반 지역에서 소개되는 뉴스를 제공한다.-->
        </div>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
export default {
  props: ["bgid"],
  data() {
    return {
      color: "black",
      time: "불려오는중....",
      date: "불려오는중....",
    };
  },
  //watch를 활용해서 상위컴포먼트 데이터 변화를 감지한다.
  watch: {
    bgid() {
      if (this.bgid == 4 || this.bgid == 7) {
        this.color = "white";
      }
    },
  },
  //바로 실행되는 곳이다
  created() {},
  //웹 페이지가 빌드가 되면 표시하는 곳이다.
  async mounted() {
    setInterval(async () => {
      dayjs.locale("ko");
      this.date = dayjs().format("dddd YYYY.MM.DD");
      this.time = dayjs().format("A HH:mm:ss");
      //console.log(this.time);
    }, 1000);
  },
};
</script>
