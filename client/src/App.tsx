import React, { Component, useState, useEffect } from "react";
import InputText from "./components/InputText";
import Button from "./components/Button";
import Screen from "./components/Screen";

function App() {
  // 시간 객체 생성
  const today = new Date();

  const [talk, setTalk] = useState("");
  const [contents, setContents] = useState([
    {
      item: {
        date: "",
        text: "",
      },
    },
  ]);

  // 초기 데이터 가져오기, 추후 비동기 처리로 바꿀지 고민
  useEffect(() => {
    setTimeout(() => {
      fetch(`/api/data/init`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setContents(data);
        });
    }, 50);
  }, []);

  const changeData = (data: string) => {
    setTalk(data);
  };

  const sendData = () => {
    const time = today.toLocaleDateString() + " " + today.toLocaleTimeString();

    // 보내질 데이터
    const sendData = {
      item: {
        date: time,
        text: talk,
      },
    };

    // 전송 데이터
    console.log(sendData.item);

    fetch(`/api/data/get`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(sendData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setContents(data);
      });
  };

  return (
    <div className="App">
      <InputText changeData={changeData} />
      <Button sendData={sendData} />
      {/* {JSON.stringify(contents)} */}
      <Screen contents={contents} />
    </div>
  );
}

export default App;
