import React from "react";
import s from "./container.module.css";

export default function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}
