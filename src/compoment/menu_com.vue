<template>
  <div class="container">
    <!-- 대한민국 표준시간 제공 -->
    <div class="row hidden" >
      <div class="col">
        <div class="menu_time">
          <div style="margin: auto">
            <h4 class="blod" :style="{ color: this.color }">
              현재 대한민국 표준 시간은...
            </h4>
            <span class="time blod" :style="{ color: this.color }">{{
              this.time
            }}</span>
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
      <div class="col search-bar">
        <!--검색바 생성-->
        <div style="height: 10vh; display: flex">
          <div>
            <!-- Search form -->
            <button class="search" v-on:click="search">
              <div class="search-another">
                <ion-icon style="font-size: 1.5em" name="search"></ion-icon>
                <span class="search-text">지역 검색하기</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div class="col">
        <!--주간 날씨, 습도, 관련 뉴스 제공-->
        <h3 class="blod" :style="{ color: this.color }">주간 날씨</h3>
        <div class="menu_card card">
          <div class="card-body">
            <!--for문 삽입 바림-->
            <div class="menu_card_out">
              <div v-for="(item, idx) in getdata" :key="idx">
                <div class="menu_card_data">
                  <div class="row" style="width: 5vw; text-align: center">
                    <div class="col">
                      <span style="font-size: 0.7em">
                        {{ time_set[item.report_Index] }}
                      </span>
                      <br/>
                      {{ item.TMP }} °C
                    </div>
                    <div class="w-100"></div>
                    <div class="col">
                      <br />
                    </div>
                    <div class="w-100"></div>
                    <div class="col">
                      <p style="font-size: 0.4em">
                        강수확률 <br />
                        {{ item.POP }} %
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <h3 class="blod" :style="{ color: this.color }">바람</h3>
        <div class="menu_card_wind card">
          <div class="card-body">
            <div class="menu_card_out_wind">
              <div v-for="(item, idx) in getdata" :key="idx">
                <div class="menu_card_data">
                  <div class="row" style="width: 5vw; text-align: center">
                    <div class="col">
                      <span style="font-size: 0.7em">
                        {{ time_set[item.report_Index] }}
                        <br />
                      </span>
                    </div>
                    <div class="w-100"></div>
                    <div class="col">
                      <br />
                      <br />
                    </div>
                    <div class="w-100"></div>
                    <div class="col">
                      <p style="font-size: 0.4rem">
                        풍향 <br />
                        {{ item.VEC }} deg
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 class="blod" :style="{ color: this.color }">지역 정보</h3>
      <!--이 데이터들은 해수욕장 데이터가 리턴이 되면 뜬다-->
      <div class="row row-cols-2 g-2 g-lg-3">
        <div class="col">
          <div class="p-5 border bg-light">뭐 넣을까</div>
        </div>
        <div class="col">
          <div class="p-5 border bg-light">뭐 넣을까</div>
        </div>
        <div class="col">
          <div class="p-5 border bg-light">뭐 넣을까</div>
        </div>
        <div class="col">
          <div class="p-5 border bg-light">뭐 넣을까</div>
        </div>
      </div>

      <!--이 아래 데이터 같은 경우 일반 지역에서 소개되는 뉴스를 제공한다.-->
    </div>
    <div class="row mobile_hide">
      <div class="col">
        <!--주간 날씨, 습도, 관련 뉴스 제공-->
        <h3 class="blod" :style="{ color: this.color }">주간 날씨</h3>
        <div class="menu_card card">
          <div class="card-body">
            <!--for문 삽입 바림-->
            <div class="menu_card_out">
              <div v-for="(item, idx) in getdata" :key="idx">
                <div class="menu_card_data">
                  <div class="row" style="width: 20vw; text-align: center">
                    <div class="col">
                      <span style="font-size: 0.7rem">
                        {{ time_set[item.report_Index] }}
                      </span>
                      <br />
                      {{ item.TMP }} °C
                    </div>
                    <div class="w-100"></div>
                    <div class="col">
                      <br />
                    </div>
                    <div class="w-100"></div>
                    <div class="col">
                      <p style="font-size: 0.4rem">
                        강수확률 <br />
                        {{ item.POP }} %
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <h3 class="blod" :style="{ color: this.color }">바람</h3>
        <div class="menu_card_wind card">
          <div class="card-body">
            <div class="menu_card_out_wind">
              <div v-for="(item, idx) in getdata" :key="idx">
                <div class="menu_card_data">
                  <div class="row" style="width: 20vw; text-align: center">
                    <div class="col">
                      <span style="font-size: 0.8rem">
                        {{ time_set[item.report_Index] }}
                        <br />
                        풍향
                        <br />
                        {{ item.VEC }} %
                      </span>
                    </div>
                    <div class="w-100"></div>
                    <div class="col">
                      <br />
                    </div>
                    <div class="w-100"></div>
                    <div class="col">
                      <p style="font-size: 0.4rem">
                        풍향 <br />
                        {{ item.VEC }} deg
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 class="blod" :style="{ color: this.color }">지역 정보</h3>
      <!--이 데이터들은 해수욕장 데이터가 리턴이 되면 뜬다-->
      <div class="row row-cols-2 g-2 g-lg-3" style="margin-left: 0.45%">
        <div class="col">
          <div class="p-5 border bg-light">뭐 넣을까</div>
        </div>
        <div class="col">
          <div class="p-5 border bg-light">뭐 넣을까</div>
        </div>
        <div class="col">
          <div class="p-5 border bg-light">뭐 넣을까</div>
        </div>
        <div class="col">
          <div class="p-5 border bg-light">뭐 넣을까</div>
        </div>
      </div>

      <!--이 아래 데이터 같은 경우 일반 지역에서 소개되는 뉴스를 제공한다.-->
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
import example_data from "../assets/style/example/example_sea_data.json";
export default {
  components: {},
  props: ["bgid"],
  data() {
    return {
      color: "black",
      time: "불려오는중....",
      date: "불려오는중....",
      getdata: "",
      time_set: {
        "0000": "오전 00",
        "0100": "오전 01",
        "0200": "오전 02",
        "0300": "오전 03",
        "0400": "오전 04",
        "0500": "오전 05",
        "0600": "오전 06",
        "0700": "오전 07",
        "0800": "오전 08",
        "0900": "오전 10",
        1000: "오전 11",
        1100: "오후 12",
        1200: "오후 00",
        1300: "오후 01",
        1400: "오후 02",
        1500: "오후 03",
        1600: "오후 04",
        1700: "오후 05",
        1800: "오후 06",
        1900: "오후 07",
        2000: "오후 08",
        2100: "오후 09",
        2200: "오후 10",
        2300: "오후 11",
      },
    };
  },
  computed: {},
  //watch를 활용해서 상위컴포먼트 데이터 변화를 감지한다.
  watch: {},
  //바로 실행되는 곳이다
  created() {
    this.getdata = example_data;
    // dayjs().format("HHmm")
    for (let index = 0; index < this.getdata.length; index++) {
      //00시 이후
      if (
        dayjs().format("YYYYMMDD") == this.getdata[index].report_Date &&
        100 < this.getdata[index].report_Index
      ) {
        if (
          dayjs().format("YYYYMMDD") == this.getdata[index].report_Date &&
          dayjs().format("HHMM") > this.getdata[index].report_Index
        ) {
          this.getdata.splice(index, 1);
        }
      }
    }
    console.log(this.getdata);
  },
  methods: {
    search() {
      this.$store.commit("search", 1);
    },
  },
  //웹 페이지가 빌드가 되면 표시하는 곳이다.
  async mounted() {
    if (this.$store.state.bg_id == 4 || this.$store.state.bg_id == 7) {
      this.color = "white";
    }
    setInterval(async () => {
      dayjs.locale("ko");
      this.date = dayjs().format("dddd YYYY.MM.DD");
      this.time = dayjs().format("A HH:mm:ss");
      //console.log(this.time);
    }, 1000);
  },
};
</script>
