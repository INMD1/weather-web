const axios = require("axios");
const moment = require("moment");
const convert = require("xml-js");

let dataType = require("./datatype.json");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

//URL설정
const today = moment().format("YYYYMMDD"); //오늘 날짜 선언
const today_time = moment().format("HHmm");

//위도 경도
const beach_num = "304";

console.log(Network(today, beach_num, dataType, today_time ));

//동기
async function Network(today, beach_num, dataType, today_time) {
  const api = require("./api_key.json")//공공데이터포털에서 받아온 데이터키
  let json = [];
  let time = ["0200", "0500", "0800", "1100", "1400", "1700", "2000", "2300"]; //단기예보 기준 시간
  //현재 시간 이전 단기예보 정보를 불려오기 위해 가져올 시간을 정한다.
  for (let index = 0; index < time.length; index++) {
    if(today_time < time[index]){
        time = time[index]
    } 
  }
  console.log(time);
  const response = await axios.get("http://apis.data.go.kr/1360000/BeachInfoservice/getVilageFcstBeach" + "?serviceKey=" + api.zc + "&beach_num=" + beach_num + "&base_date=" + today + "&base_time=" + time);
  try {
        const result = JSON.parse(convert.xml2json(response.data, { compact: true, spaces: 4 })).response.body.items.item;
        for (let i = 0; i < result.length; i++) {
        dataType.report_Date = result[i].fcstDate._text;
        dataType.report_time = time;
        dataType[`${result[i].category._text}`].data =
            result[i].fcstValue._text;
        }
        json.push(dataType);
        console.log(JSON.stringify(json));
    } catch (error) {
        console.log("Error! 기상청에서 데이터를 반환을 안했거나 Get오류 입니다.");
    }
}


//비동기
// //json 설정
// let json= [];
//     //시간별 데이터 송신
//     for (let index = 0; index < time.length; index++) {
//         // dataType.report_time = time[index]
//         axios.get("http://apis.data.go.kr/1360000/BeachInfoservice/getVilageFcstBeach" + "?serviceKey=" + key + "&beach_num="+ beach_num +"&base_date=" + 20220902 + "&base_time=" + time[index] ).then((response) => {
//                 const result = JSON.parse(convert.xml2json(response.data, {compact: true, spaces: 4})).response.body.items.item
//                 for(let i = 0; i < result.length; i ++){
//                     dataType.report_Date = result[i].fcstDate._text;
//                     dataType.report_time = result[i].fcstTime._text;
//                     dataType[`${result[i].category._text}`].data = result[i].fcstValue._text;
//                 }
//                 json.push(dataType)
//         });
//         console.log(json);
//     }

//sample url
// http://apis.data.go.kr/1360000/BeachInfoservice/getVilageFcstBeach?serviceKey=[key code]&beach_num=1&base_date=20220830&base_time=1100

// http://apis.data.go.kr/1360000/BeachInfoservice/getVilageFcstBeach?serviceKey=[key code]beach_num3&base_date=20220829&base_time=1700

//다음에 해야할일

// api를 어떻게 json으로 변환할지 생각하기 사이트에서 파싱하기 쉽게
// 사이트 디자인 하기
