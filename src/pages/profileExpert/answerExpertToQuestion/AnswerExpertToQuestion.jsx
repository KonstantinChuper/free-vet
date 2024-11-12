import React, { useCallback, useEffect, useState } from "react";
import { Question } from "../../../components/shared/question/Question";
import CustomTextarea from "../../../components/customTextarea/CustomTextarea";
import { Link, useNavigate, useParams } from "react-router-dom";
import s from "./answerExpertToQuestion.module.css";
import { useTranslation } from "react-i18next";
import CustomButton from "../../../components/customButton/CustomButton";
import FileUploader from "../../../components/fileUploader/FileUploader";
import close from "../../../assets/close.svg";
import { getQuestionById, sendMessage } from "../../../utils/api";
import Loader from "../../../components/loader/Loader";
import { useForm } from "react-hook-form";
import CustomButtonSubmit from "../../../components/customButtonSubmit/CustomButtonSubmit";

const AnswerExpertToQuestion = () => {
  const { questionId } = useParams();
  const { t } = useTranslation();
  const [question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [files, setFiles] = useState([]);
  const userId = localStorage.getItem("userId") || -999; //TODO: add userId on vet login
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await getQuestionById(questionId);
      setQuestion(response);
      setIsLoading(false);
    };
    fetchQuestion();
  }, [questionId]);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("question_id", questionId);
    formData.append("user_id", userId);
    formData.append("text", data.answer);
    files.forEach((fileObj) => {
      formData.append(`files`, fileObj.file);
    });
    for (let pair of formData.entries()) {
      console.log("FormData содержит:", pair[0], "=", pair[1]);
    }
    try {
      const response = await sendMessage(questionId, formData);
      console.log("Ответ сервера:", response);
      navigate(`/vet/main`);
    } catch (error) {
      console.error(error);
    }
  };

  const onUpload = useCallback(
    (uploadedFiles) => {
      const newFiles = uploadedFiles.filter(
        (file) => !files.some((f) => f.name === file.name)
      );
      if (newFiles.length > 0) {
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      }
    },
    [files]
  );
  if (isLoading) {
    return <Loader />;
  }
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
        {/* <span
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
        </span> */}
      </div>

      <Question {...question} />
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomTextarea
          {...register("answer")}
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
          <FileUploader onUpload={onUpload} />
          <div
            style={{
              width: "fit-content",
              marginInline: "auto",
              paddingTop: 10,
            }}
          >
            <CustomButtonSubmit
              text={t("AnswerExpertToQuestion.sendAnswer")}
              // link="/profile"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AnswerExpertToQuestion;
