import s from './E_settingsNotificationProfileUserPage.module.css'
import React, { useState } from 'react';
import leftArrow from "../../../assets/left-arrow.svg";
import { useNavigate } from 'react-router-dom'; 
import { useTranslation } from "react-i18next";
const E_settingsNotificationProfileUserPage = () => {
  const { t } = useTranslation();
  const [vetAnswers, setVetAnswers] = useState(false);
  const [serviceNews, setServiceNews] = useState(false);
  const navigate = useNavigate();  // инициализация useNavigate

  const handleBackClick = () => {
    navigate("/editProfile");  // это вернёт пользователя на предыдущий экран
  };

  return (
    <div className={s.e_settingsNotificationProfilePage}>
      <div className={s.headerNotifications}>
        <img
          src={leftArrow}
          alt="leftArrow"
          className={s.leftArrow}
          onClick={handleBackClick}
        />

        <h3 className={s.h3Notifications}>
          {t("E_settingsNotificationProfileUserPage.notificationsTitle")}
        </h3>
      </div>
      <div className={s.bodyNotifications}>
        <div className={s.swichNotifications}>
          <h5 className={s.h5Notifications}>
            {t("E_settingsNotificationProfileUserPage.vetAnswers")}
          </h5>

          <input
            type="checkbox"
            className={s.checkboxNotifications}
            checked={vetAnswers}
            onChange={(e) => setVetAnswers(e.target.checked)}
          />
        </div>

        <div className={s.swichNotifications}>
          <h5 className={s.h5Notifications}>
            {t("E_settingsNotificationProfileUserPage.serviceNews")}
          </h5>
          <input
            type="checkbox"
            className={s.checkboxNotifications}
            checked={serviceNews}
            onChange={(e) => setServiceNews(e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
}

export default E_settingsNotificationProfileUserPage;