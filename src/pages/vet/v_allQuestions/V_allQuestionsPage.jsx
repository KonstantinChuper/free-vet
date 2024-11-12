import { Fragment, useEffect, useState } from "react";
import s from "./v_allQuestionsPage.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import close from "../../../assets/close.svg";
import FormHeader from "../../../components/formHeader/FormHeader.jsx";
import { Question } from "../../../components/shared/question/Question.jsx";
import { getAllQuestions } from "../../../utils/api.js";
import Loader from "../../../components/loader/Loader.jsx";
import Modal from "../../../components/shared/modal/Modal.jsx";

const V_allQuestionsPage = () => {
  const { t } = useTranslation();
  const [questions, setQuestions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getAllQuestions();
        setQuestions(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchQuestions();
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={s.p_allQuestionsPage}>
      <div className={s.header}>
        <FormHeader
          path={"/profile"}
          fontSize={36}
          titleKey={t("userPage.myQuestions")}
        />
        <Link to={"/profile"}>
          <img src={close} alt="close" />
        </Link>
      </div>
      <div className={s.subtitle}>{t("userPage.myQuestions_subtitle")}</div>
      <div className={s.questions_wrapper}>
        {questions?.map((q) => (
          <Fragment key={q.id}>
            <Question {...q} openModal={() => setIsOpen(true)} />
            {isOpen ? (
              <Modal
                linksArr={[
                  {
                    link: `/profile/message/add/${q.id}`,
                    text: t("Modal_locales.addMessage"),
                  },
                ]}
                onClose={() => setIsOpen(false)}
              />
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default V_allQuestionsPage;
