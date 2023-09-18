const axios = require("axios");
const moment = require("moment");

//시간 불려오기 위한 변수 설정
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

//URL 기본 설정
const today = moment().format("YYYYMMDD"); //오늘 날짜 선언
const today_time = moment().format("HHmm");

export { Getfun }
//지역 좌표설정 (이건 나중에 만들거다)
async function Getfun(nx,ny) {
    let temp = [], data_temp = [];
    data_temp = JSON.parse(await apitest(today - 1, today_time, nx, ny))
    for (let index = 0; index < data_temp.length; index++) {
        if (data_temp[index].report_Date == today) {
            temp.push(data_temp[index]);
        }
    }
    data_temp = JSON.parse(await apitest(today, today_time,nx, ny))
    for (let index = 0; index < data_temp.length; index++) {
        temp.push(data_temp[index])
    }
    console.log([...new Set(temp)]);
    console.log(JSON.stringify([...new Set(temp)]));
}

async function apitest(today, today_time, nx, ny) {

    const api = require("./api_key.json")//공공데이터포털에서 받아온 데이터키
    let json = new Map(); let dataType = {};
    let time = ["0200", "0500", "0800", "1100", "1400", "1700", "2000", "2300"]; //단기예보 기준 시간
    //현재 시간 이전 단기예보 정보를 불려오기 위해 가져올 시간을 정한다.
    for (let index = 0; index < time.length; index++) {
        if (today_time <= time[index] && today_time > time[index]) {
            time = time[index]
        }
    }
    const response = await axios.get("http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst" + "?serviceKey=" + api.zc +
        "&pageNo=1&numOfRows=1000&dataType=JSON" + "&base_date=" + today + "&base_time=" + time
        + "&nx=" + nx + "&ny=" + ny);
    const result = response.data.response.body.items.item;
    //코드 시도 에려 발생시 오류 메시지 표출
    try {
        //시간 분류
        for (let index = 0; index < result.length - 1; index++) {
            if (result[index].fcstTime == result[index + 1].fcstTime) {
                dataType[`${result[index].category}`] = result[index].fcstValue;
            } else {
                dataType.report_Date = result[index].fcstDate;
                dataType.report_Index = result[index].fcstTime;
                json.set(result[index].fcstDate + "-" + result[index].fcstTime, dataType);
                dataType = {}
            }
        }
        //console.log(Array.from(json.values()));
        return JSON.stringify(Array.from(json.values()));
    } catch (error) {
        console.log(error);
        console.log(today);
        console.log("Error! 기상청에서 데이터를 반환을 안했거나 Get오류 입니다.");
    }

}