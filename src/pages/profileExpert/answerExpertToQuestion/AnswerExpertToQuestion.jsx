import React, { useEffect, useState } from "react";
import { Question } from "../../../components/shared/question/Question";
import CustomTextarea from "../../../components/customTextarea/CustomTextarea";
import { Link, useParams } from "react-router-dom";
import s from "./answerExpertToQuestion.module.css";
import { useTranslation } from "react-i18next";
import CustomButton from "../../../components/customButton/CustomButton";
import FileUploader from "../../../components/fileUploader/FileUploader";
import close from "../../../assets/close.svg";

const AnswerExpertToQuestion = () => {
  const { questionId } = useParams();
  const { t } = useTranslation();
  const [question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await getUserQuestions(userId);
      setQuestion(response);
    };
    fetchQuestion();
  }, [questionId]);

  return (
    <div className={s.mainContainer}>
      <div className={s.header}>
        <Link to="/profile">
          <div className={s.arrowButton}></div>
        </Link>
        <h1 className={s.title}>{t("AnswerExpertToQuestion.title")}</h1>

        <img
          src={close}
          alt="close"
          className={s.closeIcon}
          style={{
            width: "24px",
            height: "24px",
            cursor: "default",
            position: "absolute",
            marginLeft: "350px",
            marginTop: "7px",
            opacity: "0.1",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "12px",
        }}
      >
        <span
          style={{
            border: "2px solid #2A9D8F",
            display: "inline-block",
            padding: "3px 5px",
            backgroundColor: "#F28A2E",
            color: "#ffffff",
            borderRadius: "16px",
            fontSize: "13px",
            fontWeight: "600",
            transform: "translateY(48px)",
            marginRight: "85px",
            cursor: "pointer",
          }}
        >
          {t("AnswerExpertToQuestion.ansver")}
        </span>
      </div>

      <Question />
      <div className={s.textPromt}>
        <p
          className={s.promptText}
          style={{
            fontSize: "18px",
            fontWeight: "600",
            whiteSpace: "nowrap",
          }}
        >
          {t("AnswerExpertToQuestion.ansver")}
        </p>
        <p
          style={{
            fontSize: "15px",
            fontWeight: "400",
            color: "#6c757d",
            marginLeft: "10px",
            marginTop: "10px",
            marginBottom: "-10px",
          }}
        >
          {t("AnswerExpertToQuestion.chat")}
        </p>
      </div>

      <CustomTextarea
        placeholder={t("AnswerExpertToQuestion.notification")}
        style={{
          width: "351px",
          height: "344px",
          border: "1px solid var(--color-main)",
          backgroundColor: "rgba(42, 157, 143, 0.09)",
          borderRadius: "20px",
          fontSize: "16px",
          color: "#242424",
          lineHeight: "1.5",
          padding: "16px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          whiteSpace: "pre-wrap",
          marginLeft: "8px",
        }}
      />

      <div className={s.textPromt}>
        <p
          className={s.promptText}
          style={{
            fontSize: "15px",
            fontWeight: "400",
            color: "#6c757d",
            marginRight: "100px",
            marginBottom: "-5px",
          }}
        >
          {t("AnswerExpertToQuestion.addFoto")}
        </p>
      </div>

      <div
        style={{
          marginLeft: "-3px",
        }}
      >
        <FileUploader />
        <CustomButton
          text={t("AnswerExpertToQuestion.sendAnswer")}
          link="/profile"
        />
      </div>
    </div>
  );
};

export default AnswerExpertToQuestion;
