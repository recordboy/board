import React from "react";
import "./Button.scss";

const Button = (props: { sendData: () => void }) => {
  const { sendData } = props;

  return (
    <button type="button" className="btn" onClick={() => {
        sendData();
    }}>
      send
    </button>
  );
};

export default Button;
