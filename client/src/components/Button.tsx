import React from "react";
import "./Button.scss";

const Button = (props: { sendData: () => void }) => {
  const { sendData } = props;
  
  return (
    <button type="button" className="button" onClick={() => {
        sendData();
    }}>
      SEND
    </button>
  );
};

export default Button;
