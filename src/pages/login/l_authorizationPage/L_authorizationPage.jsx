import React from "react";
import { useTranslation } from "react-i18next";
import s from "./l_authorizationPage.module.css";
import AuthOptions from "../../../components/authOptions/AuthOptions.jsx";
import LanguageSwitcher from "../../../components/languageSwitcher/LanguageSwitcher.jsx";
import logo from "../../../assets/TailBook_ecosystem.png";
import banner from "../../../assets/banner.png";

const L_authorizationPage = () => {
  const { t } = useTranslation();

  return (
    <div className={s.l_authorizationPage}>
      <div className={s.header}>
        <img src={logo} alt="" />
        <LanguageSwitcher />
      </div>
      <div className={s.banner}>
        <img src={banner} alt="" />
        <p>{t("authorizationPage.bannerText")}</p>
      </div>
      <AuthOptions />
    </div>
  );
};

export default L_authorizationPage;
