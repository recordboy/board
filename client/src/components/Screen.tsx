import React from "react";
import "./Screen.scss";

const Screen = (props: { contents: any }) => {
  const { contents } = props;
  return <div className="screen">{contents}</div>;
};

export default Screen;
