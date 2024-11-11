import { Link } from "react-router-dom";
import styles from "./modalProfile.module.css";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const Modal = ({ linksArr, onClose }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <ul>
          {linksArr.map((link) => (
            <li key={link.link}>
              <Link to={link.link} className={styles.linkItem}>
                <p>{t(link.text)}</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 4L16.5 12L8 20.5"
                    stroke="#242424"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
        <button type="button" className={styles.close} onClick={onClose}>
          <h5>{t("formHeader.backButtonAlt")}</h5>
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  linksArr: PropTypes.array,
  onClose: PropTypes.func,
};

export default Modal;
