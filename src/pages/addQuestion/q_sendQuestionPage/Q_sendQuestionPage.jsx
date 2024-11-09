// import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { useTranslation } from "react-i18next";
// import s from "./q_sendQuestionPage.module.css";
// import FormHeader from "../../../components/formHeader/FormHeader";
// import LineHeader from "../../../components/lineHeader/LineHeader";
// import close from "../../../assets/close.svg";
// import CustomTextarea from "../../../components/customTextarea/CustomTextarea";
// import CustomButtonSubmit from "../../../components/customButtonSubmit/CustomButtonSubmit";
// import { addQuestion } from "../../../utils/api"; // Убедитесь, что этот API импортируется правильно

// const Q_sendQuestionPage = () => {
//   const { t } = useTranslation();
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Данные, переданные с предыдущей страницы
//   const { petArt, petWeight, petGender, isHomeless, files = [], userId, questionId } = location.state;

//   const { register, handleSubmit, formState: { errors, isValid } } = useForm({
//     mode: "onChange",
//   });

//   const onSubmit = async (data) => {
//     try {
//       const formData = new FormData();

//       // Добавляем текстовые поля в formData
//       formData.append("question", data.question);
//       formData.append("petArt", petArt);
//       formData.append("petWeight", petWeight);
//       formData.append("petGender", petGender);
//       formData.append("isHomeless", isHomeless);
//       formData.append("userId", userId);
//       formData.append("questionId", questionId);

//       // Добавляем файлы в formData
//       if (files.length > 0) {
//         files.forEach((file, index) => {
//           formData.append(`file_${index}`, file);
//         });
//       }

//       // Отправляем запрос
//       const response = await addQuestion(formData);
//       console.log("Ответ от сервера:", response);

//       // Переход на страницу подтверждения с передачей данных через state
//       navigate("/main/question/confirm", {
//         state: {
//           question: data.question,
//           petArt,
//           petWeight,
//           petGender,
//           isHomeless,
//           files,
//           userId
//         },
//       });
//     } catch (error) {
//       console.error("Ошибка при отправке вопроса:", error);
//       alert("Произошла ошибка при отправке вопроса.");
//     }
//   };

//   return (
//     <div className={s.q_sendQuestionPage}>
//       <div className={s.q_sendQuestionPage_header}>
//         <FormHeader path="/main/question/choice" fontSize={36} titleKey={t("questionPage.title")} />
//         <Link to={"/main/question/choice"}>
//           <img className={s.closeBtn} src={close} alt="close" />
//         </Link>
//       </div>
//       <LineHeader middle={"var(--color-main)"} right={"var(--color-main)"} />
//       <p className={s.q_sendQuestionPage_file_p}>{t("sendQuestionPage.addedMedia")}</p>
//       <div className={s.q_sendQuestionPage_fileBox}>
//         {files.length > 0 ? (
//           files.map((file, index) => (
//             <div key={index} className={s.fileBox}>
//               {file.type.startsWith("image") ? (
//                 <img src={file.url || URL.createObjectURL(file)} alt={`uploaded-file-${index}`} />
//               ) : file.type.startsWith("video") ? (
//                 <video controls src={file.data || URL.createObjectURL(file)} />
//               ) : (
//                 <p>{t("sendQuestionPage.unsupportedFileFormat")}</p>
//               )}
//             </div>
//           ))
//         ) : (
//           <p>{t("sendQuestionPage.noPhotos")}</p>
//         )}
//       </div>
//       <div className={s.q_sendQuestionPage_description}>
//         <p>{petArt}</p>
//         <p>{petWeight}</p>
//         <p>{petGender}</p>
//         <p style={{ display: "none" }}>
//           {t("sendQuestionPage.homeless")} {isHomeless ? t("yes") : t("no")}
//         </p>
//       </div>
//       <p className={s.q_sendQuestionPage_p}>{t("sendQuestionPage.writeQuestion")}</p>
// <form onSubmit={handleSubmit(onSubmit)}>
//         <CustomTextarea
//           {...register("question", { required: t("sendQuestionPage.requiredField") })}
//           rows={8}
//           cols={50}
//           placeholder={t("sendQuestionPage.questionPlaceholder")}
//           style={{
//             borderColor: "var(--color-input-bg-grey)",
//             backgroundColor: "var(--color-text-white)",
//             height: "310px",
//           }}
//         />
//         {errors.question && <p className={s.errorText}>{errors.question.message}</p>}

//         <div className={s.btnBox}>
//           <CustomButtonSubmit
//             text={t("sendQuestionPage.submitButton")}
//             padding={"16px 89.171px"}
//             disabled={!isValid}
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Q_sendQuestionPage;

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import s from "./q_sendQuestionPage.module.css";
import FormHeader from "../../../components/formHeader/FormHeader";
import LineHeader from "../../../components/lineHeader/LineHeader";
import close from "../../../assets/close.svg";
import CustomTextarea from "../../../components/customTextarea/CustomTextarea";
import CustomButtonSubmit from "../../../components/customButtonSubmit/CustomButtonSubmit";
import { addQuestion } from "../../../utils/api"; // Убедитесь, что этот API импортируется правильно


const Q_sendQuestionPage = ({ petData }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Инициализация состояния для файлов и ошибок
  const [files, setFiles] = useState(petData.files || []);
  const [petDataFromServer, setPetDataFromServer] = useState(null);

  const {
    petArt,
    petWeight,
    petGender,
    isHomeless,
    userId,
    questionId,
  } = petData; // Используем данные, переданные через пропсы

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    // Запрос на сервер для получения актуальных данных о питомце
    const fetchPetData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/pets/${userId}`);
        setPetDataFromServer(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных с сервера:', error);
      }
    };
    fetchPetData();
  }, [userId]);

  const onSubmit = async (data) => {
    try {
      const dataToSend = {
        user_id: userId,
        questions: data.question,
      };


      // Добавляем текстовые поля в formData
      formData.append('question', data.question);
      formData.append('petArt', petArt);
      formData.append('petWeight', petWeight);
      formData.append('petGender', petGender);
      formData.append('isHomeless', isHomeless);
      formData.append('userId', userId);
      formData.append('questionId', questionId);

      // Добавляем файлы в formData
      files.forEach((file, index) => {
        formData.append(`file_${index}`, file);
      });

      // Отправляем данные обратно на сервер
      const response = await axios.put(`http://localhost:3000/pets/${userId}`, formData);
      console.log('Ответ от сервера:', response.data);

      // Переход на страницу подтверждения
      navigate('/main/question/confirm', {
        state: {
          question: data.question,
          petArt,
          petWeight,
          petGender,
          isHomeless,
          files,
          userId,
        },
      });
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
      alert('Произошла ошибка при отправке вопроса.');
    }
  };

  if (!petDataFromServer) {
    return <p>Загрузка данных...</p>;
  }

  return (
    <div className={s.q_sendQuestionPage}>
      <div className={s.q_sendQuestionPage_header}>
        <FormHeader path="/main/question/choice" fontSize={36} titleKey={t('questionPage.title')} />
        <Link to="/main/question/choice">
          <img className={s.closeBtn} src={close} alt="close" />
        </Link>
      </div>
      <LineHeader middle="var(--color-main)" right="var(--color-main)" />
      <p className={s.q_sendQuestionPage_file_p}>{t('sendQuestionPage.addedMedia')}</p>
      <div className={s.q_sendQuestionPage_fileBox}>
        {files.length > 0 ? (
          files.map((file, index) => (
            <div key={index} className={s.fileBox}>
              {file.type.startsWith('image') ? (
                <img src={URL.createObjectURL(file)} alt={`uploaded-file-${index}`} />
              ) : file.type.startsWith('video') ? (
                <video controls src={URL.createObjectURL(file)} />
              ) : (<p>{t('sendQuestionPage.unsupportedFileFormat')}</p>
              )}
            </div>
          ))
        {files && files.length > 0 ? (
          <div className={s.filesContainer}>
            {files.map((file, index) => {
              const fileUrl = URL.createObjectURL(file.file);
              return (
                <div key={index} className={s.fileBox}>
                  <img
                    src={fileUrl}
                    alt="Uploaded"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <p>{t('sendQuestionPage.noPhotos')}</p>
        )}
      </div>
      <div className={s.q_sendQuestionPage_description}>
        <p>{petArt}</p>
        <p>{petWeight}</p>
        <p>{petGender}</p>
        <p>{t('sendQuestionPage.homeless')} {isHomeless ? t('yes') : t('no')}</p>
      </div>
      <p className={s.q_sendQuestionPage_p}>{t('sendQuestionPage.writeQuestion')}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomTextarea
          {...register('question', { required: t('sendQuestionPage.requiredField') })}
          rows={8}
          cols={50}
          placeholder={t('sendQuestionPage.questionPlaceholder')}
          style={{
            borderColor: 'var(--color-input-bg-grey)',
            backgroundColor: 'var(--color-text-white)',
            height: '310px',
          }}
        />
        {errors.question && <p className={s.errorText}>{errors.question.message}</p>}

        <div className={s.btnBox}>
          <CustomButtonSubmit
            text={t('sendQuestionPage.submitButton')}
            padding="16px 89.171px"
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  );
};

export default Q_sendQuestionPage;