import styles from "./vetAnswer.module.css";
import { useTranslation } from "react-i18next";

const VetAnswer = ({ text, isUser }) => {
  //TODO: rename
  const { t } = useTranslation();

  return (
    <div className={styles.answer_container}>
      {isUser ? (
        <h5 className={styles.answer_heading}>{t("userPage.vetAnswer")}</h5>
      ) : (
        <h5 className={styles.answer_heading}>
          {t("userPage.additionalQuestion")}
        </h5>
      )}
      <p className={styles.answer_contents}>{text}</p>
    </div>
  );
};

export default VetAnswer;
