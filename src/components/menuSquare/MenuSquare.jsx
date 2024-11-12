import React from "react";
import s from "./menuSquare.module.css";

export default function MenuSquare({
  children,
  width = "160px",
  height = "160px",
  style,
}) {
  const combinedStyle = {
    width: width,
    height: height,
    ...style,
  };

  return (
    <div style={combinedStyle} className={s.container}>
      {children}
    </div>
  );
}
