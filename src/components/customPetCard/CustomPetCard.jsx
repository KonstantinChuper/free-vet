import React from "react";
import { useTranslation } from "react-i18next";
import "../../App.css";
import styles from "./customPetCard.module.css";

const CustomPetCard = ({
  name,
  type,
  weight,
  gender,
  imageUrl,
  statusMessage,
  link,
  imageWidth,
  StatusComponent,
}) => {
  const { t } = useTranslation();

  return (
    <a href={link} className={styles.customPetCard}>
      <div className={styles.customPetCardContent}>
        <img
          src={imageUrl}
          alt={name}
          className={styles.petImage}
          style={{ width: imageWidth, height: "auto" }}
        />
        <div className={styles.petDetails}>
          <h3 className={styles.petName}>{name}</h3>
          <p className={styles.petInfo}>
            <span className={styles.petType}>{type}</span>
            <span className={styles.petWeightAndGender}>
              {weight} {t("customPetCard.weightLetter")} {gender}
            </span>
          </p>
          {statusMessage && StatusComponent && (
            <div className={styles.statusContainer}>
              <StatusComponent
                text={`${t("customPetCard.statusMessage")} ${statusMessage}`}
              />
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default CustomPetCard;
