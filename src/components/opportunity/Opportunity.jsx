import React from "react";
import s from "./opportunity.module.css";
import OppAdd from "../../assets/opportunityImg/oppAdd.svg";
import OppVetBook from "../../assets/opportunityImg/oppVetBook.svg";
import OppNavKl from "../../assets/opportunityImg/oppNavKl.svg";
import OppNavApt from "../../assets/opportunityImg/oppNavApt.svg";
import Online from "../../assets/opportunityImg/online.svg";
import More from "../../assets/opportunityImg/more.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Opportunity = () => {
  const { t } = useTranslation();

  return (
    <section className={s.opportunity}>
      <h2>{t("opportunity.title")}</h2>
      <div className={s.featureCards}>
        <div className={s.cat}>
          <Link to="/main/question/choice">
            <div className={s.heroImageBox}>
              <img
                src={OppAdd}
                alt={t("opportunity.catImageAlt")}
                className={s.cardImage}
              />
            </div>
            <h4>{t("opportunity.askQuestion")}</h4>
          </Link>
        </div>
        <div className={s.rightCatBox}>
          <div className={s.card}>
            <img
              src={OppNavKl}
              alt={t("opportunity.clinicImageAlt")}
              className={s.cardImage}
            />
            <h3 className={s.titleWithStatus}>
              {t("opportunity.clinicNavigator")}
              <span className={s.status}>{t("opportunity.inDevelopment")}</span>
            </h3>
          </div>
          <div className={s.card}>
            <img
              src={OppNavApt}
              alt={t("opportunity.pharmacyImageAlt")}
              className={s.cardImage}
            />
            <h3 className={s.titleWithStatus}>
              {t("opportunity.pharmacyNavigator")}
              <span className={s.status}>{t("opportunity.inDevelopment")}</span>
            </h3>
          </div>
        </div>
      </div>
      <div className={s.boxcard}>
        <div className={s.toocard}>
          <img
            src={OppVetBook}
            alt={t("opportunity.dogImageAlt")}
            className={s.cardImage}
          />
          <h3>
            {t("opportunity.veterinaryBooks")}
            <span className={s.status}>{t("opportunity.inDevelopment")}</span>
          </h3>
        </div>
        <div className={s.toocard}>
          <img
            src={Online}
            alt={t("opportunity.onlineCatImageAlt")}
            className={s.cardImage}
          />
          <h3 className={s.titleWithStatus}>
            {t("opportunity.onlineReception")}
            <span className={s.status}>{t("opportunity.inDevelopment")}</span>
          </h3>
        </div>
        <div className={s.toocard}>
          <img
            src={More}
            alt={t("opportunity.moreImageAlt")}
            className={s.cardImage}
          />
          <h3 className={s.titleWithStatus}>
            {t("opportunity.more")}
            <span className={s.status}>{t("opportunity.inDevelopment")}</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
