import React, { useState } from "react";
import s from './p_addMessagePage.module.css';
import { useForm } from "react-hook-form";
import ViewPageHeader from "../../../components/" ;
import CustomTextarea from "../../../components/customTextarea/CustomTextarea";
import CustomButtonSubmit from "../../../components/customButtonSubmit/CustomButtonSubmit";

const P_addMessagePage = () => {


    const [images, setImages] = useState([]);
  
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
<ViewPageHeader/>
  <div className={s.photoUploader}>
    <label className={s.label}>
      Добавьте фото и (или) видео
    </label>
    <div className={s.imageGrid}>
      {images.map((image, index) => (
        <div key={index} className={s.imageWrapper}>
          <img src={image} alt={`Upload ${index}`} className={s.image} />
          <button
            className={s.removeButton}
            onClick={() => handleRemoveImage(index)}
          >
            &times;
          </button>
        </div>
      ))}
      {images.length < 3 && (
        <label className={s.addButton}>
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleAddImage}
            style={{ display: "none" }}
          />
          <span className={s.plus}>+</span>
        </label>
      )}
    </div>
  </div>




      {/* Замените `t("sendQuestionPage.writeQuestion")` на текст временно */}
      <p className={s.p_addMessagePage_p}>Напишите дополнительное сообщение</p> 
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomTextarea
          {...register("question", { required: "Обязательное поле" })}
          rows={8}
          cols={50}
          placeholder="Мне кажется, что состояние кота ухудшилось"
          style={{
            borderColor: "var(--color-input-bg-grey)",
            backgroundColor: "var(--color-text-white)",
            height: "310px",
          }}
        />
        {errors.question && <p className={s.errorText}>{errors.question.message}</p>}

        <div className={s.btnBox}>
          <CustomButtonSubmit
            text="Отправить сообщение"
            padding="16px 89.171px"
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  );
};

export default P_addMessagePage;