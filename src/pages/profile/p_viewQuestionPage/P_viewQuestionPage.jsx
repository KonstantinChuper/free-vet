import s from "./p_viewQuestionPage.module.css";
import { useTranslation } from "react-i18next";
import Modal from "../../../components/modalProfile/ModalProfile.jsx";
import VetAnswer from "../../../components/vetAnswer/VetAnswer.jsx";
import { useEffect, useState } from "react";
import ViewPageHeader from "../../../components/viewPageHeader/ViewPageHeader.jsx";
import { Question } from "../../../components/shared/question/Question.jsx";
import { useParams } from "react-router-dom";
import { getMessages, getQuestionById } from "../../../utils/api.js";
import Loader from "../../../components/loader/Loader.jsx";

const P_viewQuestionPage = () => {
  const { t } = useTranslation();
  const { questionId } = useParams();
  const userId = localStorage.getItem("userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState(null);
  const linksArr = [
    {
      link: `/profile/message/add/${question.id}`,
      text: t("Modal_locales.addMessage"),
    },
    {
      link: `/main/question/close?questionId=${question.id}`,
      text: t("closeQuestionPage.header"),
    },
  ];

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const fetchQuestionAndAnswers = async () => {
      const response = await getQuestionById(questionId);
      setQuestion(response);
      const messages = await getMessages(questionId);
      setAnswers(messages);
      setIsLoading(false);
    };
    fetchQuestionAndAnswers();
  }, [userId, questionId]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={s.p_viewQuestionPage}>
      <ViewPageHeader
        path={"/profile/questions"}
        fontSize={36}
        titleKey={t("userPage.viewQuestion")}
      />
      <Question {...question} openModal={openModal} />
      {answers.map((answer, i) => (
        <VetAnswer key={i} text={answer.text} isUser={answer.is_user} />
      ))}
      <div>
        {isModalVisible && <Modal linksArr={linksArr} onClose={closeModal} />}
      </div>
    </div>
  );
};

export default P_viewQuestionPage;
