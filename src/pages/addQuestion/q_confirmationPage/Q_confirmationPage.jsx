import s from "./q_confirmationPage.module.css";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FormHeader from "../../../components/formHeader/FormHeader";
import close from "../../../assets/close.svg";
import QuestionDetails from "../../../components/questionDetails/QuestionDetails";

const Q_confirmationPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { petArt, petWeight, petGender, isHomeless, files, userId, question } =
    location.state || {};
  console.log("Data received in Q_confirmationPage:", location.state);
  const [hasVetbook, setHasVetbook] = useState(false);

  return (
    <div className={s.q_confirmationPage}>
      <div className={s.q_sendQuestionPage_header}>
        <FormHeader
          path="/main/question/choice"
          fontSize={36}
          titleKey={t("questionPage.title")}
        />
        <Link to={"/main/question/choice"}>
          <img className={s.closeBtn} src={close} alt="close" />
        </Link>
      </div>
      <QuestionDetails
        files={files}
        petArt={petArt}
        petWeight={petWeight}
        petGender={petGender}
        isHomeless={isHomeless}
        question={question}
        userId={userId}
      />
    </div>
  );
};

export default Q_confirmationPage;
