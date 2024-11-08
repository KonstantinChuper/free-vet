import s from './E_settingsNotificationProfileUserPage.module.css'
import React, { useState } from 'react';
import leftArrow from "../../../assets/left-arrow.svg";
import { useNavigate } from 'react-router-dom'; 

const E_settingsNotificationProfileUserPage = () => {

  const [vetAnswers, setVetAnswers] = useState(false);
  const [serviceNews, setServiceNews] = useState(false);
  const navigate = useNavigate();  // инициализация useNavigate

  const handleBackClick = () => {
    navigate("/editProfile");  // это вернёт пользователя на предыдущий экран
  };

  return (
    <div className={s.e_settingsNotificationProfilePage}>
 <div className={s.headerNotifications}>
  <img src={leftArrow} 
  alt="leftArrow" 
  className={s.leftArrow} 
  onClick={handleBackClick}
  />
       
    <h3 className={s.h3Notifications}>Уведомления</h3>
</div>
<div className={s.bodyNotifications}>
    <div className={s.swichNotifications}>
      <h5 className={s.h5Notifications}>Ответы ветеринаров</h5> 
      

      <input type="checkbox"
      className={s.checkboxNotifications}
      checked={vetAnswers} 
      onChange={(e) => setVetAnswers(e.target.checked)} 
       />
    </div>
 
    <div className={s.swichNotifications}>
      <h5 className={s.h5Notifications}>Новости сервиса</h5> 
      <input type="checkbox"
       className={s.checkboxNotifications} 
       checked={serviceNews} 
       onChange={(e) => setServiceNews(e.target.checked)} />
    </div>
    
    </div>
 </div>
  )
}

export default E_settingsNotificationProfileUserPage;