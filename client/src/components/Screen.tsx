import React from "react";
import "./Screen.scss";

const Screen = (props: { contents: any }) => {
  const { contents } = props;
  console.log(contents);
  return (
    <div className="screen">
      {contents.map((item: any) => {
        return (
          <div>
            <div>{item.item.date}</div>
            <div>{item.item.text}</div>
          </div>
        );
      })}

    </div>
  );
};

export default Screen;
