import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import s from "./customCheckbox.module.css";
import checkbox_icon from "../../assets/checkbox/checkbox_icon.svg";
import checked_icon from "../../assets/checkbox/checked_icon.svg";

const CustomCheckbox = forwardRef(({ checked, onChange, disabled, name }, ref) => {
  const { t } = useTranslation();

  const handleClick = () => {
    if (!disabled) {
      onChange({ target: { name, checked: !checked } });
    }
  };

  return (
    <div
      className={`${s.customCheckbox} ${disabled ? s.disabled : ""}`}
      onClick={handleClick}
      style={{ position: "relative", cursor: disabled ? "not-allowed" : "pointer" }}
      title={
        checked
          ? t("customCheckbox.checkedTooltip")
          : t("customCheckbox.uncheckedTooltip")
      }
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
        disabled={disabled}
        ref={ref}
        className={s.checkboxInput}
        style={{ display: "none" }}
      />
      <img src={checkbox_icon} alt="checkbox" className={s.checkboxIcon} />
      {checked && (
        <img
          src={checked_icon}
          alt="checked"
          className={s.checkedIcon}
          style={{ position: "absolute", top: "4px", left: "5px" }}
        />
      )}
    </div>
  );
});

CustomCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

export default CustomCheckbox;
