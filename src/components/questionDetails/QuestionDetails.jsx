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
        <span className={s.status}>{petArt}</span>
      </div>
      <div className={s.animal_photos}>
        {files && files.length > 0 ? (
          <div className={s.filesContainer}>
            {files.map((file, index) => (
              <div key={index} className={s.file_box}>
                {file.type &&
                (file.type.startsWith("image") ||
                  file.type.startsWith("video")) ? (
                  file.type.startsWith("image") ? (
                    <img src={file.data} alt={`uploaded-file-${index}`} />
                  ) : (
                    <video controls src={file.data} />
                  )
                ) : (
                  <p>Unsupported File Format</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>No Photos</p>
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
