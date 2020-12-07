import React, { useState, useEffect } from "react";
import "./UserIntro.scss";

const UserIntro = (props: { sendUserId: (id: string) => void }) => {
  const { sendUserId } = props;
  const [userId, setUserId] = useState("");
  const [isOn, setIsOn] = useState(true);
  
  useEffect(() => {
    if (localStorage.getItem("canvasUserId")) {
      // 유저 아이디 인트로 감춤
      setIsOn(false);
    } else {
      // 유저 아이디 인트로 보여짐
      setIsOn(true);
    }
  }, []);

  return (
    <div
      className="user-intro"
      style={
        isOn
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <div className="inner">
        <div className="tit">닉네임을 정해주세요!</div>
        <input
          type="text"
          value={userId}
          className="input-text"
          onChange={(e: any) => {
            setUserId(e.target.value);
          }}
        />
        <button
          type="button"
          className="button"
          onClick={() => {
            if (userId.length > 3) {
              alert("닉네임은 3글자 이하로 적어주세요");
              return;
            }
            sendUserId(userId);
            setIsOn(false);
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default UserIntro;
