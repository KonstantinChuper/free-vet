import styles from "./ModalWindow.module.css";
import modal_right_arrow_icon from "../../assets/modal_right_arrow_icon.svg";
import { Link } from "react-router-dom";

function ModalWindow() {
  return (
    <div className={styles.modal_container}>
      <Link to="#" className={styles.modal_content}>
        <button className={styles.modal_button}>Ответить</button>
        <img src={modal_right_arrow_icon} alt="Arrow_Icon" />
      </Link>
      <Link to="#" className={styles.modal_content}>
        <button className={styles.modal_button}>Завершить вопрос</button>
        <img src={modal_right_arrow_icon} alt="Arrow_Icon" />
      </Link>

      <Link to="#" className={styles.modal_bttn}>
        <button className={styles.modal_back_button}>Назад</button>
      </Link>
    </div>
  );
}

export default ModalWindow;
