import styles from "./vetAnswer.module.css";
import { useTranslation } from "react-i18next";

const VetAnswer = () => {
  const { t } = useTranslation();

  <div className={styles.answer_container}>
    <h6 className={styles.answer_heading}>{t("userPage.vetAnswer")}</h6>
    <p className={styles.answer_contents}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam harum,
      pariatur nemo quasi cupiditate sapiente, eos quibusdam corrupti recusandae
      officiis eum, possimus necessitatibus deleniti.
    </p>
  </div>;
};

export default VetAnswer;
