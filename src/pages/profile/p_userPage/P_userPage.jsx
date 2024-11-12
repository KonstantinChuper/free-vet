import React, { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import s from "./p_userPage.module.css";
import avatarPlaceholder from "../../../assets/avatarPlaceholder.svg";
import BurgerMenu from "../../../components/burgerMenu/BurgerMenu";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/footer/Footer.jsx";
import { Question } from "../../../components/shared/question/Question.jsx";
import Loader from "../../../components/loader/Loader.jsx";
import { getUser, getUserQuestions } from "../../../utils/api.js";
import { UnderConstructionIcon } from "../../../components/shared/underConstruction/UnderConstruction.jsx";
import Modal from "../../../components/shared/modal/Modal.jsx";

const P_userPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const userId = localStorage.getItem("userId");
  const [userInfo, setUserInfo] = useState({
    name: t("userPage.userName"),
    role: "",
    photo: avatarPlaceholder,
  });

  const handleLogOut = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getUser(userId);
      console.log(userData);
      setUserInfo(userData);
    };
    const fetchQuestions = async () => {
      const response = await getUserQuestions(userId);
      setQuestions(response);
      setIsLoading(false);
    };
    fetchUserData();
    fetchQuestions();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={s.p_userPage}>
      <BurgerMenu />
      <div className={s.name_Container}>
        <div className={s.avatarContainer}>
          <img
            src={userInfo.photo ? userInfo.photo : avatarPlaceholder}
            alt="Avatar"
            className={s.avatar}
          />
        </div>
        <div className={s.userInfo}>
          <div className={s.userName}>{userInfo.name}</div>{" "}
          {/* Имя пользователя */}
          <div className={s.userRole}>
            {userInfo.volunteer
              ? t("userPage.userRoleVolunteer")
              : t("userPage.userRolePetOwner")}
          </div>
        </div>
      </div>
      <div className={s.question_box_header}>
        <h6>{t("userPage.myQuestions")}</h6>
        <Link to="/profile/questions">
          <p>{t("userPage.allQuestions")}</p>
        </Link>
      </div>
      <div className={s.question_box_content}>
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
                  {
                    link: `/main/question/close?questionId=${q.id}`,
                    text: t("closeQuestionPage.header"),
                  },
                ]}
                onClose={() => setIsOpen(false)}
              />
            ) : null}
          </Fragment>
        ))}
      </div>
      <div className={s.question_box_header}>
        <h6>{t("userPage.vetBooks")}</h6>
        <p>{t("userPage.allVetBooks")}</p>
      </div>
      {/** TODO: section in progress remove mock after complete vet book */}
      <div style={{ marginInline: "auto" }}>
        <p>Under construction...</p>
        <UnderConstructionIcon />
      </div>
      <button type="button" className={s.closeBtn} onClick={handleLogOut}>
        <h5>{t("userPage.logOutButton")}</h5>
      </button>
      <Footer />
    </div>
  );
};

export default P_userPage;
