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
import { updateQuestion } from "../../../utils/api.js";

const Q_sendQuestionPage = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const { petArt, petWeight, petGender, isHomeless, files, userId } =
        location.state || {};

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = async (data) => {
        try {
            const dataToSend = {
                user_id: userId,
                questions: data.question,
            };

            // Отправляем запрос через updateQuestion
            await updateQuestion(JSON.stringify(dataToSend));

            // После успешной отправки формы перенаправляем пользователя
            navigate("/main/question/confirm"),
                {
                    state: {
                        question: data.question,
                        petArt: data.petArt,
                        petWeight: data.petWeight,
                        petGender: data.petGender,
                        isHomeless: isHomeless,
                        files: files,
                        userId: userId,
                    },
                };
        } catch (error) {
            console.error("Ошибка при отправке вопроса", error);
        }
    };

    return (
        <div className={s.q_sendQuestionPage}>
            <div className={s.q_sendQuestionPage_header}>
                <FormHeader
                    path="/main/question/choice"
                    fontSize={36}
                    titleKey={t("questionPage.title")}
                />
                <Link to={"/main/question/choice"}>
                    <img className={s.closeBtn} src={close} alt="close" />
                </Link>
            </div>
            <LineHeader
                middle={"var(--color-main)"}
                right={"var(--color-main)"}
            />
            <p className={s.q_sendQuestionPage_file_p}>
                {t("sendQuestionPage.addedMedia")}
            </p>
            <div className={s.q_sendQuestionPage_fileBox}>
                {files && files.length > 0 ? (
                    <div className={s.filesContainer}>
                        {files.map((file, index) => {
                            const fileUrl = URL.createObjectURL(file.file);
                            return (
                                <div key={index} className={s.fileBox}>
                                    {/* {file.type.startsWith('image') ? (
                                    <img
                                        src={file.data}
                                        alt={`uploaded-file-${index}`}
                                    />
                                ) : file.type.startsWith('video') ? (
                                    <video controls src={file.data} />
                                ) : (
                                    <p>
                                        {t(
                                            'sendQuestionPage.unsupportedFileFormat'
                                        )}
                                    </p>
                                )} TODO: findout data structure from backend*/}
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
                    <p>{t("sendQuestionPage.noPhotos")}</p>
                )}
            </div>
            <div className={s.q_sendQuestionPage_description}>
                <p>
                    {t("sendQuestionPage.petArt")}: {petArt}
                </p>
                <p>
                    {t("sendQuestionPage.petWeight")}: {petWeight}
                </p>
                <p>
                    {t("sendQuestionPage.petGender")}: {petGender}
                </p>
                <p style={{ display: "none" }}>
                    {t("sendQuestionPage.homeless")}{" "}
                    {isHomeless ? t("yes") : t("no")}
                </p>
            </div>
            <p className={s.q_sendQuestionPage_p}>
                {t("sendQuestionPage.writeQuestion")}
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CustomTextarea
                    {...register("question", {
                        required: t("sendQuestionPage.requiredField"),
                    })}
                    rows={8}
                    cols={50}
                    placeholder={t("sendQuestionPage.questionPlaceholder")}
                    style={{
                        borderColor: "var(--color-input-bg-grey)",
                        backgroundColor: "var(--color-text-white)",
                        height: "310px",
                    }}
                />
                {errors.question && (
                    <p className={s.errorText}>{errors.question.message}</p>
                )}

                <div className={s.btnBox}>
                    <CustomButtonSubmit
                        text={t("sendQuestionPage.submitButton")}
                        padding={"16px 99.5px"}
                        disabled={!isValid}
                    />
                </div>
            </form>
        </div>
    );
};

export default Q_sendQuestionPage;
