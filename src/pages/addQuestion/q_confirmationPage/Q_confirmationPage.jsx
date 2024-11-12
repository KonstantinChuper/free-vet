import axios from "axios";
import s from "./q_confirmationPage.module.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FormHeader from "../../../components/formHeader/FormHeader";
import close from "../../../assets/close.svg";
import { getUserQuestions } from "../../../utils/api";
import { Question } from "../../../components/shared/question/Question";
import Loader from "../../../components/loader/Loader";
import Modal from "../../../components/shared/modal/Modal";

const Q_confirmationPage = () => {
  const { t } = useTranslation();
  const userId = localStorage.getItem("userId");
  const [question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await getUserQuestions(userId);
      const len = response.length - 1;
      setQuestion(response[len]);
      setIsLoading(false);
    };
    fetchQuestions();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={s.q_confirmationPage}>
      <div className={s.q_confirmationPage_header}>
        <FormHeader
          path="/main/question/choice"
          fontSize={36}
          titleKey={t("questionPage.title")}
        />
        <Link to="/main/question/choice">
          <img className={s.closeBtn} src={close} alt="close" />
        </Link>
      </div>
      <div className={s.question_box}>
        <Question {...question} openModal={() => setIsOpen(true)} />
        {isOpen ? (
          <Modal
            linksArr={[
              {
                link: `/profile/message/add/${question.id}`,
                text: t("Modal_locales.addMessage"),
              },
              {
                link: `/main/question/close?questionId=${question.id}`,
                text: t("closeQuestionPage.header"),
              },
            ]}
            onClose={() => setIsOpen(false)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Q_confirmationPage;
