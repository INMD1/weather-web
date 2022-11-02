const fs = require("fs")
let objects = [
    {
        "objectID": 0,
        "gu": "",
        "dong": "",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "중구",
        "dong": "",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "중구",
        "dong": "중앙동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "중구",
        "dong": "동광동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "중구",
        "dong": "대청동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "중구",
        "dong": "보수동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "중구",
        "dong": "부평동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "중구",
        "dong": "광복동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "중구",
        "dong": "남포동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "중구",
        "dong": "영주제1동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "중구",
        "dong": "영주제2동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "서구",
        "dong": "",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "서구",
        "dong": "동대신제1동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "서구",
        "dong": "동대신제2동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "서구",
        "dong": "동대신제3동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "서구",
        "dong": "서대신제1동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "서구",
        "dong": "서대신제3동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "서구",
        "dong": "서대신제4동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "서구",
        "dong": "부민동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "서구",
        "dong": "아미동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "서구",
        "dong": "초장동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "서구",
        "dong": "충무동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "서구",
        "dong": "남부민제1동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "서구",
        "dong": "남부민제2동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "서구",
        "dong": "암남동",
        "X": 97,
        "Y": 73
    },
    {
        "objectID": 0,
        "gu": "동구",
        "dong": "",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "동구",
        "dong": "초량제1동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "동구",
        "dong": "초량제2동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "동구",
        "dong": "초량제3동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "동구",
        "dong": "초량제6동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "동구",
        "dong": "수정제1동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "동구",
        "dong": "수정제2동",
        "X": 97,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "동구",
        "dong": "수정제4동",
        "X": 97,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "동구",
        "dong": "수정제5동",
        "X": 97,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "동구",
        "dong": "좌천동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "동구",
        "dong": "범일제1동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "동구",
        "dong": "범일제2동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "동구",
        "dong": "범일제5동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "영도구",
        "dong": "",
        "X": 98,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "영도구",
        "dong": "남항동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "영도구",
        "dong": "영선제1동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "영도구",
        "dong": "영선제2동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "영도구",
        "dong": "신선동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "영도구",
        "dong": "봉래제1동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "영도구",
        "dong": "봉래제2동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "영도구",
        "dong": "청학제1동",
        "X": 98,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "영도구",
        "dong": "청학제2동",
        "X": 98,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "영도구",
        "dong": "동삼제1동",
        "X": 98,
        "Y": 73
    },
    {
        "objectID": 0,
        "gu": "영도구",
        "dong": "동삼제2동",
        "X": 98,
        "Y": 73
    },
    {
        "objectID": 0,
        "gu": "영도구",
        "dong": "동삼제3동",
        "X": 98,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "",
        "X": 97,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "부전제1동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "부전제2동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "연지동",
        "X": 97,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "초읍동",
        "X": 97,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "양정제1동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "양정제2동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "전포제1동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "전포제2동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "부암제1동",
        "X": 97,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "부암제3동",
        "X": 97,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "당감제1동",
        "X": 97,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "당감제2동",
        "X": 97,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "당감제4동",
        "X": 97,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "가야제1동",
        "X": 97,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "가야제2동",
        "X": 97,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "개금제1동",
        "X": 97,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "개금제2동",
        "X": 97,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "개금제3동",
        "X": 97,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "범천제1동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "부산진구",
        "dong": "범천제2동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "동래구",
        "dong": "",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "동래구",
        "dong": "수민동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "동래구",
        "dong": "복산동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "동래구",
        "dong": "명륜동",
        "X": 98,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "동래구",
        "dong": "온천제1동",
        "X": 98,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "동래구",
        "dong": "온천제2동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "동래구",
        "dong": "온천제3동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "동래구",
        "dong": "사직제1동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "동래구",
        "dong": "사직제2동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "동래구",
        "dong": "사직제3동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "동래구",
        "dong": "안락제1동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "동래구",
        "dong": "안락제2동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "동래구",
        "dong": "명장제1동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "동래구",
        "dong": "명장제2동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "남구",
        "dong": "",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "남구",
        "dong": "대연제1동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "남구",
        "dong": "대연제3동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "남구",
        "dong": "대연제4동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "남구",
        "dong": "대연제5동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "남구",
        "dong": "대연제6동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "남구",
        "dong": "용호제1동",
        "X": 99,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "남구",
        "dong": "용호제2동",
        "X": 99,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "남구",
        "dong": "용호제3동",
        "X": 99,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "남구",
        "dong": "용호제4동",
        "X": 99,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "남구",
        "dong": "용당동",
        "X": 98,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "남구",
        "dong": "감만제1동",
        "X": 98,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "남구",
        "dong": "감만제2동",
        "X": 98,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "남구",
        "dong": "우암동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "남구",
        "dong": "문현제1동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "남구",
        "dong": "문현제2동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "남구",
        "dong": "문현제3동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "남구",
        "dong": "문현제4동",
        "X": 98,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "북구",
        "dong": "",
        "X": 96,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "북구",
        "dong": "구포제1동",
        "X": 97,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "북구",
        "dong": "구포제2동",
        "X": 96,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "북구",
        "dong": "구포제3동",
        "X": 97,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "북구",
        "dong": "금곡동",
        "X": 97,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "북구",
        "dong": "화명제1동",
        "X": 97,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "북구",
        "dong": "화명제2동",
        "X": 97,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "북구",
        "dong": "화명제3동",
        "X": 97,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "북구",
        "dong": "덕천제1동",
        "X": 97,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "북구",
        "dong": "덕천제2동",
        "X": 97,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "북구",
        "dong": "덕천제3동",
        "X": 97,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "북구",
        "dong": "만덕제1동",
        "X": 97,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "북구",
        "dong": "만덕제2동",
        "X": 97,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "북구",
        "dong": "만덕제3동",
        "X": 97,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "해운대구",
        "dong": "",
        "X": 99,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "해운대구",
        "dong": "우제1동",
        "X": 99,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "해운대구",
        "dong": "우제2동",
        "X": 99,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "해운대구",
        "dong": "우제3동",
        "X": 99,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "해운대구",
        "dong": "중제1동",
        "X": 99,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "해운대구",
        "dong": "중제2동",
        "X": 100,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "해운대구",
        "dong": "좌제1동",
        "X": 100,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "해운대구",
        "dong": "좌제2동",
        "X": 100,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "해운대구",
        "dong": "좌제3동",
        "X": 100,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "해운대구",
        "dong": "좌제4동",
        "X": 100,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "해운대구",
        "dong": "송정동",
        "X": 100,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "해운대구",
        "dong": "반여제1동",
        "X": 99,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "해운대구",
        "dong": "반여제2동",
        "X": 99,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "해운대구",
        "dong": "반여제3동",
        "X": 99,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "해운대구",
        "dong": "반여제4동",
        "X": 99,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "해운대구",
        "dong": "반송제1동",
        "X": 99,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "해운대구",
        "dong": "반송제2동",
        "X": 99,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "해운대구",
        "dong": "재송제1동",
        "X": 99,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "해운대구",
        "dong": "재송제2동",
        "X": 99,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "사하구",
        "dong": "",
        "X": 96,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "사하구",
        "dong": "괴정제1동",
        "X": 96,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "사하구",
        "dong": "괴정제2동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "사하구",
        "dong": "괴정제3동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "사하구",
        "dong": "괴정제4동",
        "X": 96,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "사하구",
        "dong": "당리동",
        "X": 96,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "사하구",
        "dong": "하단제1동",
        "X": 96,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "사하구",
        "dong": "하단제2동",
        "X": 96,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "사하구",
        "dong": "신평제1동",
        "X": 96,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "사하구",
        "dong": "신평제2동",
        "X": 96,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "사하구",
        "dong": "장림제1동",
        "X": 96,
        "Y": 73
    },
    {
        "objectID": 0,
        "gu": "사하구",
        "dong": "장림제2동",
        "X": 96,
        "Y": 73
    },
    {
        "objectID": 0,
        "gu": "사하구",
        "dong": "다대제1동",
        "X": 96,
        "Y": 73
    },
    {
        "objectID": 0,
        "gu": "사하구",
        "dong": "다대제2동",
        "X": 96,
        "Y": 73
    },
    {
        "objectID": 0,
        "gu": "사하구",
        "dong": "구평동",
        "X": 96,
        "Y": 73
    },
    {
        "objectID": 0,
        "gu": "사하구",
        "dong": "감천제1동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "사하구",
        "dong": "감천제2동",
        "X": 97,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "금정구",
        "dong": "",
        "X": 98,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "금정구",
        "dong": "서제1동",
        "X": 98,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "금정구",
        "dong": "서제2동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "금정구",
        "dong": "서제3동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "금정구",
        "dong": "금사회동동",
        "X": 98,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "금정구",
        "dong": "부곡제1동",
        "X": 98,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "금정구",
        "dong": "부곡제2동",
        "X": 98,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "금정구",
        "dong": "부곡제3동",
        "X": 98,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "금정구",
        "dong": "부곡제4동",
        "X": 98,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "금정구",
        "dong": "장전제1동",
        "X": 98,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "금정구",
        "dong": "장전제2동",
        "X": 98,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "금정구",
        "dong": "선두구동",
        "X": 98,
        "Y": 78
    },
    {
        "objectID": 0,
        "gu": "금정구",
        "dong": "청룡노포동",
        "X": 98,
        "Y": 78
    },
    {
        "objectID": 0,
        "gu": "금정구",
        "dong": "남산동",
        "X": 98,
        "Y": 78
    },
    {
        "objectID": 0,
        "gu": "금정구",
        "dong": "구서제1동",
        "X": 98,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "금정구",
        "dong": "구서제2동",
        "X": 98,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "금정구",
        "dong": "금성동",
        "X": 97,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "강서구",
        "dong": "",
        "X": 96,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "강서구",
        "dong": "대저1동",
        "X": 96,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "강서구",
        "dong": "대저2동",
        "X": 96,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "강서구",
        "dong": "강동동",
        "X": 95,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "강서구",
        "dong": "명지1동",
        "X": 95,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "강서구",
        "dong": "명지2동",
        "X": 95,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "강서구",
        "dong": "가락동",
        "X": 95,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "강서구",
        "dong": "녹산동",
        "X": 94,
        "Y": 74
    },
    {
        "objectID": 0,
        "gu": "강서구",
        "dong": "가덕도동",
        "X": 93,
        "Y": 73
    },
    {
        "objectID": 0,
        "gu": "연제구",
        "dong": "",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "연제구",
        "dong": "거제제1동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "연제구",
        "dong": "거제제2동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "연제구",
        "dong": "거제제3동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "연제구",
        "dong": "거제제4동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "연제구",
        "dong": "연산제1동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "연제구",
        "dong": "연산제2동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "연제구",
        "dong": "연산제3동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "연제구",
        "dong": "연산제4동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "연제구",
        "dong": "연산제5동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "연제구",
        "dong": "연산제6동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "연제구",
        "dong": "연산제8동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "연제구",
        "dong": "연산제9동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "수영구",
        "dong": "",
        "X": 99,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "수영구",
        "dong": "남천제1동",
        "X": 99,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "수영구",
        "dong": "남천제2동",
        "X": 99,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "수영구",
        "dong": "수영동",
        "X": 99,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "수영구",
        "dong": "망미제1동",
        "X": 98,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "수영구",
        "dong": "망미제2동",
        "X": 99,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "수영구",
        "dong": "광안제1동",
        "X": 99,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "수영구",
        "dong": "광안제2동",
        "X": 99,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "수영구",
        "dong": "광안제3동",
        "X": 99,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "수영구",
        "dong": "광안제4동",
        "X": 99,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "수영구",
        "dong": "민락동",
        "X": 99,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "사상구",
        "dong": "",
        "X": 96,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "사상구",
        "dong": "삼락동",
        "X": 96,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "사상구",
        "dong": "모라제1동",
        "X": 96,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "사상구",
        "dong": "모라제3동",
        "X": 96,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "사상구",
        "dong": "덕포제1동",
        "X": 96,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "사상구",
        "dong": "덕포제2동",
        "X": 96,
        "Y": 76
    },
    {
        "objectID": 0,
        "gu": "사상구",
        "dong": "괘법동",
        "X": 96,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "사상구",
        "dong": "감전동",
        "X": 96,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "사상구",
        "dong": "주례제1동",
        "X": 97,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "사상구",
        "dong": "주례제2동",
        "X": 97,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "사상구",
        "dong": "주례제3동",
        "X": 97,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "사상구",
        "dong": "학장동",
        "X": 96,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "사상구",
        "dong": "엄궁동",
        "X": 96,
        "Y": 75
    },
    {
        "objectID": 0,
        "gu": "기장군",
        "dong": "",
        "X": 100,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "기장군",
        "dong": "기장읍",
        "X": 100,
        "Y": 77
    },
    {
        "objectID": 0,
        "gu": "기장군",
        "dong": "장안읍",
        "X": 101,
        "Y": 79
    },
    {
        "objectID": 0,
        "gu": "기장군",
        "dong": "정관읍",
        "X": 100,
        "Y": 79
    },
    {
        "objectID": 0,
        "gu": "기장군",
        "dong": "일광읍",
        "X": 101,
        "Y": 78
    },
    {
        "objectID": 0,
        "gu": "기장군",
        "dong": "철마면",
        "X": 99,
        "Y": 78
    }
]
  
for (let index = 0; index < objects.length; index++) {
   if(index == 0){
    objects[index].objectID = "부산광역시"
   }else{
    objects[index].objectID = objects[index].gu + " > "+ objects[index].dong;
   }
}

fs.writeFileSync("in.json", JSON.stringify(objects))
