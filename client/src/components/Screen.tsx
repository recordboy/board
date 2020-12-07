import React from "react";
import "./Screen.scss";

const Screen = (props: { contents: any }) => {
  const { contents } = props;
  return (
    <div className="screen">
      {contents.map((item: any, idx: number) => {
        return (
          <div key={idx} className="item">
            <div className="id">{item.item.id}</div>
            <div className="date">{item.item.date}</div>
            <div className="message">{item.item.message}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Screen;
