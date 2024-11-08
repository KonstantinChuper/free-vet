import styles from "./styles.module.css";
import arrow_icon from "../../assets/icons/arrow_icon.svg";
import { Link } from "react-router-dom";

function ModalWindow() {
  return (
    <div className={styles.modal_container}>
      <Link to="#" className={styles.modal_content}>
        <button className={styles.modal_button}>Ответить</button>
        <img src={arrow_icon} alt="Arrow_Icon" />
      </Link>
      <Link to="#" className={styles.modal_content}>
        <button className={styles.modal_button}>Завершить вопрос</button>
        <img src={arrow_icon} alt="Arrow_Icon" />
      </Link>

      <Link to="#" className={styles.modal_bttn}>
        <button className={styles.modal_back_button}>Назад</button>
      </Link>
    </div>
  );
}

export default ModalWindow;
