// import s from "./q_confirmationPage.module.css";
// import React, { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import FormHeader from "../../../components/formHeader/FormHeader";
// import close from "../../../assets/close.svg";
// import QuestionDetails from "../../../components/questionDetails/QuestionDetails";

// const Q_confirmationPage = () => {
//   const { t } = useTranslation();
//   const location = useLocation();
//   const { petArt, petWeight, petGender, isHomeless, files, userId, question } =
//     location.state || {};
//   console.log("Data received in Q_confirmationPage:", location.state);
//   const [hasVetbook, setHasVetbook] = useState(false);

//   return (
//     <div className={s.q_confirmationPage}>
//       <div className={s.q_sendQuestionPage_header}>
//         <FormHeader
//           path="/main/question/choice"
//           fontSize={36}
//           titleKey={t("questionPage.title")}
//         />
//         <Link to={"/main/question/choice"}>
//           <img className={s.closeBtn} src={close} alt="close" />
//         </Link>
//       </div>

//       {/* Displaying the Question Details */}
//       <QuestionDetails
//         petArt={petArt}
//         petWeight={petWeight}
//         petGender={petGender}
//         isHomeless={isHomeless}
//         question={question}
//         userId={userId}
//       />

//       {/* Displaying Files (Images or Videos) */}
//       <div className={s.q_confirmationPage_fileBox}>
//         {files && files.length > 0 ? (
//           files.map((file, index) => (
//             <div key={index} className={s.fileBox}>
//               {file.type.startsWith("image") ? (
//                 <img src={file.url} alt={`uploaded-file-${index}`} className={s.uploadedImage} />
//               ) : file.type.startsWith("video") ? (
//                 <video controls src={file.url} />
//               ) : (
//                 <p>{t("sendQuestionPage.unsupportedFileFormat")}</p>
//               )}
//             </div>
//           ))
//         ) : (
//           <p>{t("sendQuestionPage.noPhotos")}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Q_confirmationPage;
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FormHeader from "../../../components/formHeader/FormHeader";
import close from "../../../assets/close.svg";
import QuestionDetails from "../../../components/questionDetails/QuestionDetails";
import s from "./q_confirmationPage.module.css";

const Q_confirmationPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { petArt, petWeight, petGender, isHomeless, files = [], userId, question } = location.state || {};

  // Логирование полученных данных для отладки
  console.log("Data received in Q_confirmationPage:", location.state);

  const [hasVetbook, setHasVetbook] = useState(false); // Для дополнительной логики (если нужно)

  return (
    <div className={s.q_confirmationPage}>
      <div className={s.q_confirmationPage_header}>
        <FormHeader
          path="/main/question/choice"
          fontSize={36}
          titleKey={t("questionPage.title")}
        />
        <Link to="/main/question/choice">
          <img className={s.closeBtn} src={close} alt="close" />
        </Link>
      </div>

      {/* Отображение деталей вопроса */}
      <QuestionDetails
        petArt={petArt}
        petWeight={petWeight}
        petGender={petGender}
        isHomeless={isHomeless}
        question={question}
        userId={userId}
      />

      {/* Отображение файлов (изображений и видео) */}
      <div className={s.q_confirmationPage_fileBox}>
        {files && files.length > 0 ? (
          files.map((file, index) => (
            <div key={index} className={s.fileBox}>
              {file.type.startsWith("image") ? (
                <img src={URL.createObjectURL(file)} alt={`uploaded-file-${index}`} className={s.uploadedImage} />
              ) : file.type.startsWith("video") ? (
                <video controls src={URL.createObjectURL(file)} />
              ) : (
                <p>{t("sendQuestionPage.unsupportedFileFormat")}</p>
              )}
            </div>
          ))
        ) : (
          <p>{t("sendQuestionPage.noPhotos")}</p>
        )}
      </div>
    </div>
  );
};

export default Q_confirmationPage;