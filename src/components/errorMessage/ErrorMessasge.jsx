import React from "react";
import s from "./errorMessage.module.css";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return <div className={s.errorMessage}>{message}</div>;
};

export default ErrorMessage;
