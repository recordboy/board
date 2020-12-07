import React, { useState, useEffect } from "react";
import UserIntro from "./components/UserIntro";
import InputForm from "./components/InputForm";
import Screen from "./components/Screen";
import "./App.css";

function App() {

  // 시간 객체 생성
  const today = new Date();
  const [message, setMessage] = useState("");
  const [contents, setContents] = useState([
    {
      item: {
        id: "",
        date: "",
        message: "",
      },
    },
  ]);

  const sendUserId = (id: string) => {
    localStorage.setItem("canvasUserId", id);
  };

  // 초기 데이터 가져오기
  useEffect(() => {
    setTimeout(() => {
      fetch(`/api/data/init`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setContents(data);

          // 초기 화면 맨 아래로 세팅
          window.scrollTo({
            top: document.querySelector(".screen")?.clientHeight,
          });
        });
    }, 50);
  }, []);

  const changeData = (data: string) => {
    setMessage(data);
  };

  // 입력 데이터 전송
  const sendData = () => {
    if (message === "") {
      return;
    }

    const time = today.toLocaleTimeString();

    // 보내질 데이터
    const sendData = {
      item: {
        id: localStorage.getItem("canvasUserId"),
        date: time.substr(0, time.length - 3),
        message: message,
      },
    };

    setMessage("");

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

    screenMove();
  };

  const screenMove = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.querySelector(".screen")?.clientHeight,
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <div className="App">
      <UserIntro sendUserId={sendUserId} />
      <InputForm
        message={message}
        changeData={changeData}
        sendData={sendData}
      />
      <Screen contents={contents} />
    </div>
  );
}

export default App;
