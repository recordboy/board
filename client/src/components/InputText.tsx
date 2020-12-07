import React from "react";
import "./InputText.scss";

const InputText = (props: {
  message: string;
  changeData: (data: string) => void;
  sendData: (data: string) => void;
}) => {
  const { message, changeData, sendData } = props;

  return (
    <input
      type="text"
      className="input-text"
      onChange={(e: any) => {
        changeData(e.target.value);
      }}
      onKeyPress={(e: any) => {
        if (e.charCode === 13) {
          sendData(e.target.value);
        }
      }}
      value={message}
    />
  );
};

export default InputText;
