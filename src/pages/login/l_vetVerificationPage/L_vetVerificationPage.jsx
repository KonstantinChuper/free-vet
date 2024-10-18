import React from "react";
import { useTranslation } from "react-i18next";
import LineHeader from "../../../components/lineHeader/LineHeader";
import CustomInput from "../../../components/customInput/CustomInput";
import s from "./l_vetVerificationPage.module.css";
import FileUploader from "../../../components/fileUploader/FileUploader";
import CustomButton from "../../../components/customButton/CustomButton";
import CustomCheckbox from "../../../components/customCheckbox/CustomCheckbox";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import CustomTextarea from "../../../components/customTextarea/CustomTextarea";

const L_vetVerificationPage = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
  });

  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isCreateButtonDisabled, setIsCreateButtonDisabled] = useState(true);
  const [isCancelButtonDisabled, setIsCancelButtonDisabled] = useState(false);

  const watchedName = watch("name");
  const watchedEmail = watch("email");
  const watchedTelegram = watch("telegram");
  const watchedSpecialization = watch("specialization");
  const watchedPetArt = watch("petArt");

  const handleChange = (e) => setText(e.target.value);

  const onUpload = (uploadedFiles) => {
    setFiles(uploadedFiles);
  };

  const handleConfirmationChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  useEffect(() => {
    const isFormValid =
      watchedName?.length > 1 &&
      watchedEmail?.length > 0 &&
      watchedTelegram?.length > 1 &&
      watchedSpecialization?.length > 1 &&
      watchedPetArt?.length > 1 &&
      files.length > 0 &&
      isCheckboxChecked;

    setIsCreateButtonDisabled(!isFormValid);
    setIsCancelButtonDisabled(isFormValid);
  }, [
    watchedName,
    watchedEmail,
    watchedTelegram,
    watchedSpecialization,
    watchedPetArt,
    files,
    isCheckboxChecked,
  ]);

  const onSubmit = (data) => {
    if (!isCheckboxChecked) {
      alert(t("vetVerificationPage.dataReliabilityAlert"));
      return;
    }
    console.log("Form submitted:", { ...data, text, files });
  };

  return (
    <div className={s.l_vetVerificationPage}>
      <h2>{t("vetVerificationPage.header")}</h2>
      <LineHeader showMiddleLine={false} />

      <h5 dangerouslySetInnerHTML={{ __html: t("vetVerificationPage.notAuthorized") }} />

      <p
        className={s.l_vetVerificationPage_pGreen}
        dangerouslySetInnerHTML={{ __html: t("vetVerificationPage.additionalData") }}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Имя и Фамилия */}
        <label style={{ alignSelf: "start" }}>
          {t("vetVerificationPage.nameLabel")}
          <span style={{ color: "#2A9D8F" }}>*</span>
        </label>
        <CustomInput
          {...register("name", {
            required: t("vetVerificationPage.nameRequired"),
            minLength: { value: 2, message: t("vetVerificationPage.nameMinLength") },
          })}
          color={"var(--color-text-dark)"}
          placeholder={t("vetVerificationPage.namePlaceholder")}
          borderColor="var(--color-input-bg-grey)"
          width={335}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

        {/* Документы */}
        <div style={{ display: "flex" }}>
          <label
            style={{ alignSelf: "start", lineHeight: 0.6 }}
            dangerouslySetInnerHTML={{ __html: t("vetVerificationPage.documentsLabel") }}
          />
          <span style={{ color: "#2A9D8F", position: "relative", top: "25px" }}>*</span>
        </div>
        <FileUploader maxFiles={6} boxSize={50} borderRadius={5} onUpload={onUpload} />

        {/* Дополнительная информация */}
        <label style={{ alignSelf: "start" }}>
          {t("vetVerificationPage.additionalInfoLabel")}
        </label>
        <CustomTextarea
          value={text}
          onChange={handleChange}
          rows={8}
          cols={50}
          placeholder={t("vetVerificationPage.additionalInfoPlaceholder")}
          style={{
            borderColor: "var(--color-input-bg-grey)",
            backgroundColor: "var(--color-text-white)",
          }}
        />

        {/* Email */}
        <label style={{ alignSelf: "start" }}>
          {t("vetVerificationPage.emailLabel")}
          <span style={{ color: "#2A9D8F" }}>*</span>
        </label>
        <CustomInput
          {...register("email", {
            required: t("vetVerificationPage.emailRequired"),
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: t("vetVerificationPage.emailPattern"),
            },
          })}
          color={"var(--color-text-dark)"}
          placeholder="Email"
          borderColor="var(--color-input-bg-grey)"
          width={335}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        {/* Telegram */}
        <label style={{ alignSelf: "start" }}>
          {t("vetVerificationPage.telegramLabel")}
          <span style={{ color: "#2A9D8F" }}>*</span>
        </label>
        <CustomInput
          {...register("telegram", {
            required: t("vetVerificationPage.telegramRequired"),
            minLength: { value: 2, message: t("vetVerificationPage.telegramMinLength") },
          })}
          color={"var(--color-text-dark)"}
          placeholder="@"
          borderColor="var(--color-input-bg-grey)"
          width={335}
        />
        {errors.telegram && <p style={{ color: "red" }}>{errors.telegram.message}</p>}

        {/* Специализация */}
        <label style={{ alignSelf: "start" }}>
          {t("vetVerificationPage.specializationLabel")}
          <span style={{ color: "#2A9D8F" }}>*</span>
        </label>
        <CustomInput
          {...register("specialization", {
            required: t("vetVerificationPage.specializationRequired"),
            minLength: {
              value: 2,
              message: t("vetVerificationPage.specializationMinLength"),
            },
          })}
          color={"var(--color-text-dark)"}
          placeholder={t("vetVerificationPage.specializationPlaceholder")}
          borderColor="var(--color-input-bg-grey)"
          width={335}
        />
        {errors.specialization && (
          <p style={{ color: "red" }}>{errors.specialization.message}</p>
        )}

        {/* Вид животных */}
        <div style={{ display: "flex" }}>
          <label
            style={{ alignSelf: "start", lineHeight: 0.6 }}
            dangerouslySetInnerHTML={{ __html: t("vetVerificationPage.petArtLabel") }}
          />
          <span style={{ color: "#2A9D8F", position: "relative", top: "25px" }}>*</span>
        </div>
        <CustomInput
          {...register("petArt", {
            required: t("vetVerificationPage.petArtRequired"),
            minLength: { value: 2, message: t("vetVerificationPage.petArtMinLength") },
          })}
          color={"var(--color-text-dark)"}
          placeholder={t("vetVerificationPage.petArtPlaceholder")}
          borderColor="var(--color-input-bg-grey)"
          width={335}
        />
        {errors.petArt && <p style={{ color: "red" }}>{errors.petArt.message}</p>}

        {/* Чекбокс */}
        <span className={s.checkboxBox}>
          <CustomCheckbox
            name="confirmation"
            checked={isCheckboxChecked}
            onChange={handleConfirmationChange}
          />
          <span>{t("vetVerificationPage.dataReliability")}</span>
        </span>

        <div className={s.buttonGroup}>
          <CustomButton
            disabled={isCancelButtonDisabled}
            text={t("vetVerificationPage.cancelBtn")}
            type="button"
          />
          <CustomButton
            disabled={isCreateButtonDisabled}
            text={t("vetVerificationPage.submitBtn")}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default L_vetVerificationPage;
