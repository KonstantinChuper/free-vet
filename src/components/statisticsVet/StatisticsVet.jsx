import React from "react";
import { useTranslation } from "react-i18next";
import s from "./statisticsVet.module.css";

const Statistics = () => {
  const { t } = useTranslation();

  return (
    <section className={s.statistics}>
      <h2>{t("statistics.title")}</h2>
      <div className={s.stats}>
        <div className={s.statItem}>
          <span>203</span>
          <p className={s.statNarrowText}>{t("statistics.helpedAnimals")}</p>
        </div>
        <div className={s.statItem}>
          <span>75</span>
          <p className={s.statNarrowText}>{t("statistics.helpedThisMonth")}</p>
        </div>
        <div className={s.statItem}>
          <span>550</span>
          <p>{t("statistics.donatedAmount")}</p>
        </div>
      </div>
      <div className={s.statsOrange}>
        <div className={s.statItemOrange}>
          <span>0</span>
          <p className={s.statNarrowText}>
            {t("statistics.helpedAnimalsTotal")}
          </p>
        </div>
        <div className={s.statItemOrange}>
          <span>0</span>
          <p className={s.statNarrowText}>
            {t("statistics.helpedAnimalsMonth")}
          </p>
        </div>
      </div>
      <h2 className={s.serviceStatistics}>{t("statistics.serviceStatistics")}</h2>
      <p className={s.inDevelopment}>{t("opportunity.inDevelopment")}</p>
    </section>
  );
};

export default Statistics;
