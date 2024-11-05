import s from "./p_settings.module.css";
import back from "../../../assets/back.svg";
import close from "../../../assets/close.svg";

function P_settings() {
  return (
    <div className={s.conteater_settings}>
      <div className={s.settings_header}>
        <img src={back} alt="back" />
        <h1>Settings</h1>
        <img src={close} alt="close" />
      </div>
    </div>
  );
}

export default P_settings;
