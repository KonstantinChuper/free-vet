import { useState } from "react";
import s from "./p_respondQuestionPage.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import close from "../../../assets/close.svg";
import FormHeader from "../../../components/formHeader/FormHeader.jsx";
import { Question } from "../../../components/shared/question/Question.jsx";
import catTest from "../../../assets/kitty-cat.png";

const P_respondQuestionPage = () => {
  const { t } = useTranslation();

  const [question, setQuestion] = useState({
    id: 55,
    images: [catTest, catTest],
    is_homeless: true,
    is_awaited: true,
  });

  return (
    <div className={s.p_respondQuestionPage}>
      <div className={s.header}>
        <FormHeader
          path={"/profile/view-question"}
          fontSize={36}
          titleKey={t("respondQuestionPage.header")}
        />
        <Link to={"/profile"}>
          <img src={close} alt="close" />
        </Link>
      </div>
      <div className={s.subtitle}>{t("respondQuestionPage.subtitle")}</div>
      <Question {...question} />
    </div>
  );
};

export default P_respondQuestionPage;
