import React, { useState } from "react";
import s from './p_addMessagePage.module.css';
import { useForm } from "react-hook-form";
import CustomTextarea from "../../../components/customTextarea/CustomTextarea";
import CustomButtonSubmit from "../../../components/customButtonSubmit/CustomButtonSubmit";
import close from "../../../assets/close.svg";
import FileUploader from "../../../components/fileUploader/FileUploader";
 import { useTranslation } from "react-i18next";

const P_addMessagePage = () => {
  const {t}=useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [images, setImages] = useState([]);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  if (!isModalOpen) return null; // Если модальное окно закрыто, компонент не отображается

    // Функция для добавления изображений
    const handleAddImage = (event) => {
      const files = Array.from(event.target.files);
      const newImages = files.map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...newImages]);
    };
  
    // Функция для удаления изображения
    const handleRemoveImage = (index) => {
      setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };
    const { register, handleSubmit, formState: { errors, isValid } } = useForm();
    const onSubmit = (data) => {
      console.log(data);
    };
 

  return (
    <div className={s.p_addMessagePage}>

      <div className={s.p_addMessagePage_head}>
       
        <h2 className={s.p_addMessagePage_h2}>{t("P_addMessagePage.header")}</h2>
         <button
         onClick={closeModal} 
         className={s.button_close}
         >
          <img src={close} alt="close" className={s.p_addMessagePage_img} />
        </button>
        </div>
     <p className={s.p_addMessagePage_p}>{t("P_addMessagePage.addPhoto")}</p>
      <FileUploader/>


      {/* Замените `t("sendQuestionPage.writeQuestion")` на текст временно */}
      <p className={s.p_addMessagePage_p}>{t("P_addMessagePage.additionalMessage")}</p> 
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomTextarea
          {...register("question", { required: t("P_addMessagePage.requiredField")})}
          rows={8}
          cols={50}
          placeholder=" "
          style={{
            borderColor: "var(--color-input-bg-grey)",
            backgroundColor: "rgba(42, 157, 143, 0.09)",
            height: "310px",
          }}
        />
        {errors.question && <p className={s.errorText}>{errors.question.message}</p>}

        <div className={s.btnBox}>
          <CustomButtonSubmit
            text= {t("P_addMessagePage.sendMessage")}
            padding="16px 84px"
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  );
};

export default P_addMessagePage;