import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import s from "./p_userPage.module.css";
import avatarPlaceholder from "../../../assets/avatarPlaceholder.svg";
import QuestionPetList from "../../../components/questionPetList/QuestionPetList";
import CustomMessage from "../../../components/customMessage/CustomMessage";
import BurgerMenu from "../../../components/burgerMenu/BurgerMenu";
import { Link } from "react-router-dom";
import Footer from "../../../components/footer/Footer.jsx";
import { Question } from "../../../components/shared/question/Question.jsx";
import catTest from "../../../assets/kitty-cat.png";

//TODO: replace mock data with userFetch

const P_userPage = () => {
  const { t } = useTranslation();
  const [files, setFiles] = useState([]);
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
  const [userInfo, setUserInfo] = useState({
    name: t("userPage.userName"),
    role: "",
    photo: avatarPlaceholder,
  });

  const fetchUserData = async () => {
    const userData = {
      // Используем имя пользователя из i18n
      name: t("userPage.userName"),
      role: "volunteer", // Здесь можно установить роль пользователя
      photo: avatarPlaceholder, // Здесь должно быть изображение пользователя
    };
    setUserInfo(userData);
  };

  useEffect(() => {
    fetchUserData();
  }, [t]);

  return (
    <div className={s.p_userPage}>
      <BurgerMenu />
      <div className={s.name_Container}>
        <div className={s.avatarContainer}>
          <img
            src={
              files.length > 0 ? URL.createObjectURL(files[0]) : userInfo.photo
            }
            alt="Avatar"
            className={s.avatar}
          />
        </div>
        <div className={s.userInfo}>
          <div className={s.userName}>{userInfo.name}</div>{" "}
          {/* Имя пользователя */}
          <div className={s.userRole}>
            {userInfo.role === "volunteer"
              ? t("userPage.userRoleVolunteer")
              : t("userPage.userRolePetOwner")}
          </div>
        </div>
      </div>
      <div className={s.question_box_header}>
        <h6>{t("userPage.myQuestions")}</h6>
        <Link to="/main/question/choice">
          <p>{t("userPage.allQuestions")}</p>
        </Link>
      </div>
      <div className={s.question_box_content}>
        {questions.map((q, idx) => (
          <Question key={idx} {...q} />
        ))}
      </div>
      {/* <CustomMessage
        questionNumber={55}
        images={[
          'https://placehold.co/400',
          'https://placehold.co/400',
          'https://placehold.co/400',
          'https://placehold.co/400',
        ]}
        animalInfo={t('userPage.animalInfo')}
        message={t('userPage.message')}
      /> */}
      <div className={s.question_box2}>
        <h6>{t("userPage.vetBooks")}</h6>
        <p>{t("userPage.allVetBooks")}</p>
      </div>
      {/** TODO: section in progress remove mock after complete vet book */}
      <div>under construction...</div>
      {/* <QuestionPetList
        categories={[
          {
            title: t('userPage.myAnimalsTitle'),
            images: [
              { src: 'https://placehold.co/400', type: 'digital' },
              { src: 'https://placehold.co/400', type: 'digital' },
              { src: 'https://placehold.co/400', type: 'digital' },
            ],
            svgcolor: 'green',
          },
          {
            title: t('userPage.strayAnimalsTitle'),
            images: [
              { src: 'https://placehold.co/400', type: 'non-digital' },
              { src: 'https://placehold.co/400', type: 'non-digital' },
              { src: 'https://placehold.co/400', type: 'non-digital' },
            ],
            svgcolor: 'orange',
          },
        ]}
      /> */}
      <Footer />
    </div>
  );
};

export default P_userPage;
