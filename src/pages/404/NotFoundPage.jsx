import React from "react";
import CustomButton from "../../components/customButton/CustomButton";
import { useTranslation } from "react-i18next";
import notFoundImg from "../../assets/404.png";
import s from "./NotFoundPage.module.css";

export const NotFoundPage = ({}) => {
  const { t } = useTranslation();

  return (
    <section className={s.section}>
      <div className={s.contentBox}>
        <div className={s.imgBox}>
          <img src={notFoundImg} alt="Not Found Image" />
        </div>
        <p className={s.heading}>{t("notFound.heading")}</p>
      </div>
      <CustomButton text={t("notFound.btnText")} link={"/"} />
    </section>
  );
};
