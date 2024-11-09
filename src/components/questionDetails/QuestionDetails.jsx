import React from "react";
import { useTranslation } from "react-i18next";
import s from "./questionDetails.module.css";

const QuestionDetails = ({
  files,
  petArt,
  petWeight,
  petGender,
  isHomeless,
  question,
}) => {
  const { t } = useTranslation();

  return (
    <div className={s.question_container}>
      <div className={s.status_question_container}>
        <span className={s.question_number}>
          {t("customMessage.questionTitle")}
        </span>
        <span className={s.status}> {petArt}</span>
      </div>
      <div className={s.animal_photos}>
        {files && files.length > 0 ? (
          files.map((file, index) => (
            <div key={index} className={s.fileBox}>
              {file.type.startsWith("image") ? (
                <img
                  src={file.url}
                  alt={`uploaded-file-${index}`}
                  className={s.uploadedImage}
                />
              ) : file.type.startsWith("video") ? (
                <video controls src={file.url} />
              ) : (
                <p>{t("sendQuestionPage.unsupportedFileFormat")}</p>
              )}
            </div>
          ))
        ) : (
          <p>{t("sendQuestionPage.noPhotos")}</p>
        )}
      </div>
      <div className={s.animal_data}>
        <p className={s.pet_data}>{petArt}</p>
        <p className={s.pet_data}>{petWeight}</p>
        <p className={s.pet_data}>{petGender}</p>
        {isHomeless && (
          <span className={s.is_homeless}>
            {t("customMessage.homelessAnimal")}
          </span>
        )}
      </div>
      <div className={s.question_text}>
        <p>{question}</p>
      </div>
    </div>
  );
};

export default QuestionDetails;
