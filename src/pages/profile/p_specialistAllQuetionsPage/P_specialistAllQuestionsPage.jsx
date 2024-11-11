import { useState } from "react";
import s from "./p_specialistAllQuestionsPage.module.css";
// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ViewPageHeader from "../../../components/viewPageHeader/ViewPageHeader.jsx";
import { Question } from "../../../components/shared/question/Question.jsx";
import catTest from "../../../assets/kitty-cat.png";
import Modal from "../../../components/shared/modal/Modal.jsx";

const P_specialistAllQuestionsPage = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  function onClose() {
    setIsOpen(false);
  }
  function onOpen() {
    setIsOpen(true);
  }

  const testLinks = [
    { link: "/profile", text: t("Modal_locales.allUserQuestionsModal") },
    // { link: "/main", text: "Завершить вопрос" },
  ];
  const [questions, setQuestions] = useState([
    {
      id: 50,
      images: [catTest, catTest, catTest],
      is_homeless: true,
      is_awaited: true,
    },
    {
      id: 53,
      is_homeless: false,
      is_awaited: false,
    },
  ]);

  return (
    <div className={s.p_allQuestionsPage}>
      <ViewPageHeader
        path={"/"}
        fontSize={36}
        titleKey={t(
          "E_settingsNotificationProfileSpecialistPage.allUserQuestions"
        )}
      />

      <div className={s.subtitle}>
        {t(
          "E_settingsNotificationProfileSpecialistPage.allUserQuestionsSubheading"
        )}
      </div>
      <div className={s.questions_wrapper}>
        {questions.map((q, idx) => (
          <Question key={idx} {...q} openModal={onOpen} />
        ))}
      </div>
      <div>{isOpen && <Modal linksArr={testLinks} onClose={onClose} />}</div>
    </div>
  );
};

export default P_specialistAllQuestionsPage;
