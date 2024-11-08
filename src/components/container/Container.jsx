import React from "react";
import s from "./container.module.css";

export default function Container({ children, backgroundColor }) {
  return (
    <div className={s.outerContainer} style={{ backgroundColor }}>
      <div className={s.innerContainer}>{children}</div>
    </div>
  );
}
