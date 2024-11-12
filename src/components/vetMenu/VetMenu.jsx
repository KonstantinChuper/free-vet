import React from "react";
import MenuSquare from "../menuSquare/MenuSquare";
import s from "./vetMenu.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function VetMenu() {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <div className={s.menuLeft}>
        <Link to="/vet/questions" className={s.link}>
          <MenuSquare width="170px" height="170px">
            <p className={s.titleQuestions}>{t("vetMenu.questions")}</p>
            <p className={s.titleQuestionsTextMain}>{t("vetMenu.fromUsers")}</p>
            <button className={s.button}>
              {t("vetMenu.waitingForAnswer")}
            </button>
          </MenuSquare>
        </Link>
        <MenuSquare width="160px" height="160px">
          <p className={s.title}>{t("vetMenu.appointments")}</p>
          <p className={s.titleQuestionsText}>{t("vetMenu.online")}</p>
          <p className={s.inDev}>{t("vetMenu.inDevelopment")}</p>
        </MenuSquare>
      </div>
      <div className={s.menuRight}>
        <p className={s.titleMain}>{t("vetMenu.forSpecialists")}</p>
        <MenuSquare width="160px" height="160px">
          <p className={s.title}>{t("vetMenu.consultations")}</p>
          <p className={s.titleQuestionsText}>{t("vetMenu.online")}</p>
          <p className={s.inDev}>{t("vetMenu.inDevelopment")}</p>
        </MenuSquare>
      </div>
    </div>
  );
}
