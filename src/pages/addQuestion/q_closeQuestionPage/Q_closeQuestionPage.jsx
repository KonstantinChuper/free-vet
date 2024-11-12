import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CustomCheckbox from "../../../components/customCheckbox/CustomCheckbox";
import CustomTextarea from "../../../components/customTextarea/CustomTextarea";
import CustomButton from "../../../components/customButtonSubmit/CustomButtonSubmit";
import s from "./q_closeQuestionPage.module.css";
import { useTranslation } from "react-i18next";
import { closeMessage } from "../../../utils/api";

//TODO Добавить URL-адрес

const Q_closeQuestionPage = () => {
  const { t } = useTranslation();
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Get a specific query parameter
  const questionId = searchParams.get("questionId");

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    setSelectedRating(parseInt(name));
  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Нужно добавить URL-адрес");
    if (!selectedRating) return;

    const formData = new FormData();
    formData.append("text", textareaValue);
    formData.append("score", selectedRating);

    // Проверяем что попало в FormData
    for (let pair of formData.entries()) {
      console.log("FormData содержит:", pair[0], "=", pair[1]);
    }

    try {
      setIsSubmitting(true);
      const response = await closeMessage(questionId, formData);
      console.log("Ответ сервера:", response);
      navigate("/donate");
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={s.closeQuestionPage}>
      <h2>{t("closeQuestionPage.header")}</h2>
      <h5>{t("closeQuestionPage.confirmation")}</h5>
      <p
        className={s.closeQuestionText}
        dangerouslySetInnerHTML={{
          __html: t("closeQuestionPage.ratingPrompt"),
        }}
      />{" "}
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.checkboxContainer}>
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index + 1} className={s.checkboxWrapper}>
              <CustomCheckbox
                checked={selectedRating === index + 1}
                onChange={handleCheckboxChange}
                name={(index + 1).toString()}
              />
              <span>{index + 1}</span>
            </div>
          ))}
        </div>
        <div className={s.areaContainer}>
          <p>{t("closeQuestionPage.feedbackPrompt")}</p>
          <CustomTextarea
            backgroundColor="#2A9D8F16"
            value={textareaValue}
            onChange={handleTextareaChange}
          />
        </div>
        <CustomButton
          text={t("closeQuestionPage.submitButton")}
          type="submit"
          disabled={!selectedRating || isSubmitting}
          customStyle={{ marginTop: "80px" }}
        />
      </form>
    </div>
  );
};

export default Q_closeQuestionPage;
