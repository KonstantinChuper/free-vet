import s from "./authOptions.module.css";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import phone from "../../assets/loginIcons/phone.svg";
import facebook from "../../assets/loginIcons/facebook.svg";
import google from "../../assets/loginIcons/google.svg";
import apple from "../../assets/loginIcons/apple.svg";
import { useTranslation } from "react-i18next";
import API_BASE_URL from "../../utils/api.js";

const AuthOptions = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

   useEffect(() => {
     const params = new URLSearchParams(window.location.search);
     const userId = params.get("user_id");

     console.log("Current URL:", window.location.href);
     console.log("User ID from params:", userId);

     if (userId) {
       localStorage.setItem("userId", userId);
       console.log("UserID saved to localStorage:", userId);
     }
   }, []);

  const handleAppleLogin = () => {
    alert("Apple login не реализован");
  };

  const handlePhoneLogin = () => {
    navigate("/register");
  };

  return (
    <div className={s.container}>
      <p className={s.title}>{t("authOptions.register")}</p>
      <div className={s.buttonGroup}>
        <button onClick={handlePhoneLogin} className={s.button}>
          <img src={phone} alt="Phone Login" className={s.icon} />
        </button>

        <a href={`${API_BASE_URL}/api/users/login/facebook`}>
          <img src={facebook} alt="Facebook Login" className={s.icon} />
        </a>

        <a href={`${API_BASE_URL}/api/users/login/google`}>
          <img src={google} alt="Google Login" className={s.icon} />
        </a>

        <button onClick={handleAppleLogin} className={s.button}>
          <img src={apple} alt="Apple Login" className={s.icon} />
        </button>
      </div>

      <div className={s.lineBox}>
        <div className={s.line}></div>
        <p>{t("authOptions.or")}</p>
        <div className={s.line}></div>
      </div>

      <p className={s.title}>{t("authOptions.login")}</p>
      <div className={s.buttonGroup}>
        <Link to={"/login"} className={s.button}>
          <img src={phone} alt="Phone Login" className={s.icon} />
        </Link>

        <a href={`${API_BASE_URL}/api/users/login/facebook`}>
          <img src={facebook} alt="Facebook Login" className={s.icon} />
        </a>

        <a href={`${API_BASE_URL}/api/users/login/google`}>
          <img src={google} alt="Google Login" className={s.icon} />
        </a>

        <button onClick={handleAppleLogin} className={s.button}>
          <img src={apple} alt="Apple Login" className={s.icon} />
        </button>
      </div>
    </div>
  );
};

export default AuthOptions;
