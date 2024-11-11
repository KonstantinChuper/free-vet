import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import s from "./customTextarea.module.css";

const CustomTextarea = forwardRef(
  (
    {
      rows = 8,
      cols = 50,
      placeholder,
      width,
      backgroundColor,
      border,
      padding,
      color,
      borderRadius,
      style,
      ...rest
    },
    ref
  ) => {
    const { t } = useTranslation();

    return (
      <div className={s.customTextarea}>
        <textarea
          ref={ref}
          rows={rows}
          cols={cols}
          placeholder={placeholder ?? ""}
          // L_vetVerificationPage.jsx
          // fix: отключён дефолтный плейсхолдер, чтобы избежать лишней подсказки в CustomTextarea
          // placeholder={placeholder || t("customInput.defaultErrorMessage")}
          style={{
            width: width || "335px",
            backgroundColor: backgroundColor || "white",
            border: border || "0.5px solid",
            padding: padding || "10px",
            color: color || "var(--color-text-grey)",
            lineHeight: 1.1,
            borderRadius: borderRadius || "20px",
            resize: "none",
            ...style,
          }}
          {...rest}
        />
      </div>
    );
  }
);

CustomTextarea.propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number,
  placeholder: PropTypes.string,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  padding: PropTypes.string,
  color: PropTypes.string,
  borderRadius: PropTypes.string,
  style: PropTypes.object,
};

CustomTextarea.defaultProps = {
  rows: 8,
  cols: 50,
  placeholder: "",
};

export default CustomTextarea;
