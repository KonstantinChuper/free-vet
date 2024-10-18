import React from "react";
import s from "./customButtonSubmit.module.css";
import texts from "../../utils/ru_text";
import { useTranslation } from "react-i18next";

const CustomButtonSubmit = ({
  backgroundColor,
  border,
  padding,
  text = texts.customButtonSubmit.submitText,
  type = "submit",
  color,
  disabled,
  customStyle = {},
  onClick,
}) => {
  const { t } = useTranslation();
  const buttonClasses = disabled ? `${s.button} ${s.disabled}` : s.button;

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      style={{
        backgroundColor: disabled
          ? backgroundColor
          : backgroundColor || "var(--color-main)",
        border: border || "none",
        padding: padding || "16px 51px",
        color: color || "var(--color-text-white)",
        lineHeight: 1.1,
        cursor: disabled ? "not-allowed" : "pointer",
        ...customStyle,
      }}
    >
      {text || t("customButton.submitText")}
    </button>
  );
};

export default CustomButtonSubmit;
