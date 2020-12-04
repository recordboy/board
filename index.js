// express 모듈 불러오기
const express = require("express");

// express 객체 생성
const app = express();

// path 모듈 불러오기
const path = require("path");

/////////////////////////////////////////////////////////////////////////////////////

// 요청 내용 읽기 모듈
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// 파일 생성 모듈
const fs = require("fs");

// 저장 데이터
let dataDB;

// 저장 데이터 가져오기
const getDB = () => {

  fs.readFile("data.json", "utf8", function (err, data) {
    if (data) {
      dataDB = JSON.parse(data);
    } else {
      dataDB = [];
    }
  });
}

getDB();

// 초기 데이터 세팅
app.use("/api/data/init", function (req, res) {
    res.send(dataDB);
});

// 미들웨어 함수를 특정 경로에 등록
app.post("/api/data/get", function (req, res) {

  // 데이터 추가
  dataDB.push(req.body);
  console.log(req.body);

  // 데이터 저장
  fs.writeFile("data.json", JSON.stringify(dataDB), "utf8", function (error) {
    console.log("write end");
  });

  res.send(dataDB);
});

/////////////////////////////////////////////////////////////////////////////////////

// 기본 포트를 app 객체에 설정
const port = process.env.PORT || 5000;
app.listen(port);

// 리액트 정적 파일 제공
app.use(express.static(path.join(__dirname, "client/build")));

// 라우트 설정
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

console.log(`server running at http ${port}`);
