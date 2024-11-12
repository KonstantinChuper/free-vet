
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import s from "./p_vetPage.module.css";
import avatarPlaceholder from "../../../assets/avatarPlaceholder.svg";
import BurgerMenu from "../../../components/burgerMenu/BurgerMenu";
import { Link } from "react-router-dom";
import Footer from "../../../components/footer/Footer.jsx";
import { Question } from "../../../components/shared/question/Question.jsx";
import Loader from "../../../components/loader/Loader.jsx";
import { getUser, getUserQuestions } from "../../../utils/api.js";
import { UnderConstructionIcon } from "../../../components/shared/underConstruction/UnderConstruction.jsx";
import Modal from "../../../components/shared/modal/Modal.jsx";

//TODO: replace mock data with userFetch

const P_vetPage = () => {
  const { t } = useTranslation();
  const [files, setFiles] = useState([]);
  const [questions, setQuestions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const userId = localStorage.getItem("userId");
  const [userInfo, setUserInfo] = useState({
    name: t("userPage.userName"),
    role: ["Vet", "Cats", "Dogs", "Birds"],
    photo: avatarPlaceholder,
    email: "test@mail.co",
  });

  const handleLogOut = () => {
    //TODO: handle log out
    console.log("log out");
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await getUserQuestions(userId);
      setQuestions(response);
    };
    const fetchUserData = async () => {
      const userData = await getUser(userId);
      console.log(userData);
      setUserInfo(userData);
      setIsLoading(false);
    };
    //TODO: add fetch for vet
    //fetchUserData();
    //TODO: add question for vet
    //fetchQuestions();
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
          {/* Имя пользователя */}
          <div className={s.userName}>{userInfo.name}</div>{" "}
          <div className={s.vetTags}>
            {userInfo.role.map((r, idx) => {
              return <div key={idx} className={s.userRole}>
                {r}
              </div>
            })}
          </div>
          <div className={s.vetInfo}>
            <p>@{userInfo.name}</p>
            <p>{userInfo.email}</p>
          </div>
        </div>
      </div>
      <div className={s.question_box_header}>
        <h6>{t("userPage.selectedQuestions")}</h6>
        <Link to="/profile/questions">
          <p>{t("userPage.allQuestions")}</p>
        </Link>
      </div>
      <div className={s.question_box_content}>
        {questions?.map((q, idx) => (
          <>
            <Question key={idx} {...q} openModal={() => setIsOpen(true)} />
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
          </>
        ))}
      </div>
      <div className={s.question_box_header}>
        <h6>Section</h6>
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
    </div >
  );
};

export default P_vetPage;
