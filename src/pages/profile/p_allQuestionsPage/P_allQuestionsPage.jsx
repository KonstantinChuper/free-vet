import { useState } from "react";
import s from "./p_allQuestionsPage.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import close from "../../../assets/close.svg";
import FormHeader from "../../../components/formHeader/FormHeader";
import { Question } from "../../../components/shared/question/Question.jsx";
import catTest from "../../../assets/kitty-cat.png";

const P_allQuestionsPage = () => {
  const { t } = useTranslation();

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
        {questions.map((q, idx) => (
          <Question key={idx} {...q} />
        ))}
      </div>
    </div>
  );
};

export default P_allQuestionsPage;
