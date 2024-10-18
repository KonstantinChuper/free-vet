import React from "react";
import { useTranslation } from "react-i18next";
import CustomInput from "../../customInput/CustomInput";
import s from "./accordion.module.css";

const AccordionSection = ({
  title,
  isOpen,
  onClick,
  inputs,
  inputValues,
  onInputChange,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`${s.accordionSection} ${
        isOpen ? s.accordionSectionOpen : s.accordionSectionClosed
      }`}
      onClick={onClick}
    >
      <h3 className={s.accordionTitle}>{t(title)}</h3>

      {isOpen && (
        <div className={s.accordionContent}>
          {inputs.map((inputData, index) => (
            <div key={index}>
              <label>{t(inputData.label)}</label>
              <CustomInput
                placeholder={t(inputData.placeholder.toLowerCase())}
                backgroundColor="rgba(42, 157, 143, 0.09)"
                border="1px solid var(--color-main)"
                borderRadius="5px"
                padding="10px"
                color="green"
                width="100%"
                value={inputValues[index]}
                onChange={(e) => onInputChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionSection;
