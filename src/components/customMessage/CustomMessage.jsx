/* eslint-disable react/prop-types */
import CustomStickTitle from "../customStickTitle/CustomStickTitle";
import s from "./customMessage.module.css";
import { useTranslation } from "react-i18next";

const CustomMessage = ({ questionNumber, images, animalInfo, message }) => {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <div className={s.questionBlock}>
        <h2 className="text-xl font-semibold mb-4">
          {t("customMessage.questionTitle")} {questionNumber}
        </h2>
        <CustomStickTitle
          backgroundColor={"var(--color-orange)"}
          color={"white"}
          border={"none"}
          text={t("customMessage.awaitingResponse")}
        />
      </div>

      <div className={s.imageBlock}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Animal ${index + 1}`}
            style={{ maxWidth: "48%" }}
          />
        ))}
      </div>

      <div className={s.animalInfo}>
        <div className={s.animalTitle}>
          <h3 className="text-lg font-medium mb-2">{animalInfo}</h3>
          <CustomStickTitle
            border={"0.5px solid var(--color-orange)"}
            color={"black"}
            text={t("customMessage.homelessAnimal")}
            style={{ fontWeight: 300, fontStyle: "italic" }}
          />
        </div>

        <p>{message}</p>
      </div>
    </div>
  );
};

export default CustomMessage;
