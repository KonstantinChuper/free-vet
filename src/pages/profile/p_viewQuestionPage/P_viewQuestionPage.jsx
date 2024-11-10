import s from "./p_viewQuestionPage.module.css";
import { useTranslation } from "react-i18next";
import Modal from "../../../components/modalProfile/ModalProfile.jsx";
import VetAnswer from "../../../components/vetAnswer/VetAnswer.jsx";
import { useState } from "react";
import ViewPageHeader from "../../../components/viewPageHeader/ViewPageHeader.jsx";
import { Question } from "../../../components/shared/question/Question.jsx";

//в файле использованы тестовые данные, т.к. это необходимо для рендера модалки

const P_viewQuestionPage = () => {
  const { t } = useTranslation();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const testLinks = [
    { link: "/profile", text: "Add message" }, // добавить в переводы
    { link: "/main", text: "End session" }, // добавить в переводы
  ];

  // чтобы открыть модальное окно
  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={s.p_viewQuestionPage}>
      <ViewPageHeader
        path={"/profile/questions"}
        fontSize={36}
        titleKey={t("userPage.viewQuestion")}
      />
      <Question is_awaited={true} openModal={openModal} />
      <VetAnswer />
      <div>
        {isModalVisible && <Modal linksArr={testLinks} onClose={closeModal} />}
      </div>
    </div>
  );
};

export default P_viewQuestionPage;
