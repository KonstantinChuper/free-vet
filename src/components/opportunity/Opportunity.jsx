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
            <img
              src={OppAdd}
              alt={t("opportunity.catImageAlt")}
              className={s.cardImage}
            />
            <h4>{t("opportunity.askQuestion")}</h4>
          </Link>
        </div>
        <div className={s.card}>
          <img
            src={OppNavKl}
            alt={t("opportunity.clinicImageAlt")}
            className={s.cardImage}
          />
          <h3>{t("opportunity.clinicNavigator")}</h3>
          <p>{t("opportunity.inDevelopment")}</p>
        </div>
        <div className={s.card}>
          <img
            src={OppNavApt}
            alt={t("opportunity.pharmacyImageAlt")}
            className={s.cardImage}
          />
          <h3>{t("opportunity.pharmacyNavigator")}</h3>
          <p>{t("opportunity.inDevelopment")}</p>
        </div>
      </div>
      <div className={s.boxcard}>
        <div className={s.toocard}>
          <Link to="/vetbook">
            <img
              src={OppVetBook}
              alt={t("opportunity.dogImageAlt")}
              className={s.cardImage}
            />
            <h3>{t("opportunity.veterinaryBooks")}</h3>
          </Link>
        </div>
        <div className={s.toocard}>
          <img
            src={Online}
            alt={t("opportunity.onlineCatImageAlt")}
            className={s.cardImage}
          />
          <h3>{t("opportunity.onlineReception")}</h3>
          <p>{t("opportunity.inDevelopment")}</p>
        </div>
        <div className={s.toocard}>
          <img src={More} alt={t("opportunity.moreImageAlt")} className={s.cardImage} />
          <h3>{t("opportunity.more")}</h3>
          <p>{t("opportunity.inDevelopment")}</p>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
