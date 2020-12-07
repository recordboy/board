import React from "react";
import InputText from "./InputText";
import Button from "./Button";
import "./InputForm.scss";

const InputForm = (props: {
  message: string;
  changeData: (data: string) => void;
  sendData: () => void;
}) => {
  const { message, changeData, sendData } = props;

  return (
    <div className="input-form">
      <InputText message={message} changeData={changeData} sendData={sendData} />
      <Button sendData={sendData} />
    </div>
  );
};

export default InputForm;
