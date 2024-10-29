import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import s from "./customInput.module.css";

const CustomInput = forwardRef((props, ref) => {
  const { t } = useTranslation();

  const {
    backgroundColor,
    border,
    borderColor,
    borderRadius,
    padding,
    placeholder,
    color,
    width,
    margin,
    errorMessage,
    showError,
    ...rest
  } = props;

  return (
    <div style={{ marginBottom: "10px" }}>
      {" "}
      {/* Обертка для обработки отступов и ошибок */}
      <input
        className={s.customInput}
        style={{
          backgroundColor: backgroundColor || "var(--color-text-white)",
          border: border || "0.5px solid",
          borderColor: borderColor || "var(--color-input-bg-grey)",
          borderRadius: borderRadius || "10px",
          padding: padding || "12px 10px",
          color: color || "var(--color-input-bg-grey)",
          width: width || "100%",
          margin: margin || "0",
          lineHeight: 1.1,
        }}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
      {showError && (
        <p style={{ color: "red", marginTop: "5px" }}>
          {errorMessage || t("customInput.defaultErrorMessage")}
        </p>
      )}
    </div>
  );
});

// CustomInput.propTypes = {
//   backgroundColor: PropTypes.string,
//   border: PropTypes.string,
//   borderColor: PropTypes.string,
//   borderRadius: PropTypes.string,
//   padding: PropTypes.string,
//   placeholder: PropTypes.string.isRequired,
//   color: PropTypes.string,
//   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   margin: PropTypes.string,
//   errorMessage: PropTypes.string, // Добавлено для кастомного сообщения об ошибке
//   showError: PropTypes.bool, // Для отображения ошибки
// };

export default CustomInput;
