import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import s from "./l_phoneLoginPage.module.css";
import { useForm } from "react-hook-form";
import CustomInput from "../../../components/customInput/CustomInput";
import FormHeader from "../../../components/formHeader/FormHeader";
import { loginUserPhone } from "../../../utils/api.js";
import CustomButtonSubmit from "../../../components/customButtonSubmit/CustomButtonSubmit.jsx";

const L_phoneLoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    console.log("Отправка формы:", data);
    try {
      const formData = new FormData();
      formData.append("phone", data.phone);

      const response = await loginUserPhone(formData);
      console.log("Ответ от API:", response);

      if (response.success) {
        reset();
        navigate("/verification");
      } else {
        console.error("Ошибка логина, неверные данные.");
      }
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    }
  };

  return (
    <form className={s.l_phoneLoginPage} onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <FormHeader path="/" titleKey={t("phoneLoginPage.header")} />
        <p
          className={s.l_phoneLoginPage_subtitle}
          dangerouslySetInnerHTML={{ __html: t("phoneLoginPage.subtitle") }}
        />
        <label style={{ alignSelf: "start" }}>
          {t("registrationPage.phoneLabel")} <span style={{ color: "#2A9D8F" }}>*</span>
        </label>
        <CustomInput
          {...register("phone", {
            required: t("registrationPage.phoneErrorRequired"),
            pattern: {
              value: /^\+?[0-9]{10,}$/,
              message: t("registrationPage.phoneErrorPattern"),
            },
          })}
          placeholder="+"
          width={335}
        />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}
        <p className={s.l_phoneLoginPage_lostAccess}>{t("phoneLoginPage.lostAccess")}</p>
        <p className={s.l_phoneLoginPage_accessRestoration}>
          {t("phoneLoginPage.accessRestoration")}
        </p>
      </div>

      <CustomButtonSubmit
        type="submit"
        text={t("registrationPage.submitButton")}
        padding="16px 78px"
        disabled={!isValid}
      />
    </form>
  );
};

export default L_phoneLoginPage;
