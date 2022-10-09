const axios = require("axios");
const moment = require("moment");
const convert = require("xml-js");

//데이터 정리 양식
let dataType = require("./datatype.json");

//시간 불려오기 위한 변수 설정
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

//URL 기본 설정
const today = moment().format("YYYYMMDD"); //오늘 날짜 선언
const today_time = moment().format("HHmm");

//지역 좌표설정 (이건 나중에 만들거다)
console.log(apitest(today, today_time));

async function apitest(today, today_time){
    const api = require("./api_key.json")//공공데이터포털에서 받아온 데이터키
    let json = [];
    let time = ["0200", "0500", "0800", "1100", "1400", "1700", "2000", "2300"]; //단기예보 기준 시간
    //현재 시간 이전 단기예보 정보를 불려오기 위해 가져올 시간을 정한다.
    for (let index = 0; index < time.length; index++) {
      if(today_time < time[index]){
          time = time[index]
      } 
    }
    const response = await axios.get("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst" + "?serviceKey=" + api.zc + 
        "&pageNo=1&numOfRows=1000&dataType=JSON" + "&base_date=" + today + "&base_time=" + time
        + "&nx=" + 55 + "&ny=" +127);
    //코드 시도 에려 발생시 오류 메시지 표출
    try {
        console.log(response.data);
      } catch (error) {
          console.log("Error! 기상청에서 데이터를 반환을 안했거나 Get오류 입니다.");
      }

}


//sample url 
//https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=[key Decode]pageNo=1&numOfRows=1000&dataType=JSON&base_date=20221009&base_time=0500&nx=55&ny=127

//요청변수

//ServiceKey : 인증키
//numOfRows: 한 페이지 결과 수
//pageNo: 페이지 번호
//dataType: 응답자료형식 -> json으로 설정하기 
//base_date: 발표일자
//base_time: 발표시각
//nx: 예보지점 X
//ny: 예보지점 Y