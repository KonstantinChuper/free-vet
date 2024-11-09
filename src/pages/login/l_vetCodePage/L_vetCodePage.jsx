import s from "./l_vetCodePage.module.css";
import { useNavigate } from "react-router-dom";
import LineHeader from "../../../components/lineHeader/LineHeader";
import useVerificationCode from "../../../customHooks/useVerificationCode";
import CodeInputBox from "../../../components/codeInputBox/CodeInputBox";
import CustomButton from "../../../components/customButton/CustomButton";
import { useTranslation } from "react-i18next";
import axios from "axios";

const L_vetCodePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    control,
    setValue,
    handleSubmit,
    inputRefs,
    isFormValid,
    seconds,
    resendAvailable,
    codeError,
    errorVisible,
    handleInputChange,
    handleKeyDown,
    handleResendCode,
    validateCode,
  } = useVerificationCode();

  const onSubmit = async (data) => {
    const code = Object.values(data).join("");
    const phoneNumber = "+38268109018"; // Заменить на фактический номер телефона
    const email = ""; // Заменить на фактический email

    if (validateCode(code)) {
      try {
        const requestData = {
          phone: phoneNumber,
          email: email,
          verify_code: code,
        };
        // Если введённый код верификации валиден (validateCode(code)), отправляем запрос на сервер для подтверждения. При успешном ответе перенаправляем пользователя на страницу /verification/role.
        const response = await axios.post(
          "/api/users/verify_code_vet/",
          // "http://localhost:3333/api/users/verify_code_vet/",
          requestData
        );

        // Обработка успешного ответа
        if (response.status === 200) {
          console.log("Верификация успешна:", response.data);
          navigate("/verification/role");
        } else {
          console.error("Ошибка верификации:", response.data);
          alert(t("vetCodePage.verificationFailed"));
        }
      } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        alert(t("vetCodePage.verificationError"));
      }
    }
  };

  return (
    <div className={s.l_verificationPage}>
      <h2>{t("vetCodePage.header")}</h2>
      <LineHeader showMiddleLine={false} right={"var(--color-main)"} />
      <h5
        dangerouslySetInnerHTML={{ __html: t("vetCodePage.notAuthorized") }}
      />
      <p
        className={s.l_verificationCode}
        dangerouslySetInnerHTML={{ __html: t("vetCodePage.enterCode") }}
      />
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <CodeInputBox
          control={control}
          setValue={setValue}
          inputRefs={inputRefs}
          handleInputChange={handleInputChange}
          handleKeyDown={handleKeyDown}
          errorVisible={errorVisible}
          codeError={codeError}
          resendAvailable={resendAvailable}
          handleResendCode={handleResendCode}
          seconds={seconds}
        />
        <div className={s.buttonLine}>
          <CustomButton
            link="/main"
            customStyle={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            padding={"16px 54px"}
            text={t("vetCodePage.cancel")}
            disabled={isFormValid}
          />
          <button className={s.button} type="submit" disabled={!isFormValid}>
            {t("vetCodePage.submit")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default L_vetCodePage;

/*import s from "./l_vetCodePage.module.css";
import { useNavigate } from "react-router-dom";
import LineHeader from "../../../components/lineHeader/LineHeader";
import useVerificationCode from "../../../customHooks/useVerificationCode";
import CodeInputBox from "../../../components/codeInputBox/CodeInputBox";
import CustomButton from "../../../components/customButton/CustomButton";
import { useTranslation } from "react-i18next";

const L_vetCodePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    control,
    setValue,
    handleSubmit,
    inputRefs,
    isFormValid,
    seconds,
    resendAvailable,
    codeError,
    errorVisible,
    handleInputChange,
    handleKeyDown,
    handleResendCode,
    validateCode,
  } = useVerificationCode();

  const onSubmit = (data) => {
    const code = Object.values(data).join("");
    if (validateCode(code)) {
      navigate("/verification/role");
    }
  };

  return (
    <div className={s.l_verificationPage}>
      <h2>{t("vetCodePage.header")}</h2>
      <LineHeader showMiddleLine={false} right={"var(--color-main)"} />
      <h5
        dangerouslySetInnerHTML={{ __html: t("vetCodePage.notAuthorized") }}
      />
      <p
        className={s.l_verificationCode}
        dangerouslySetInnerHTML={{ __html: t("vetCodePage.enterCode") }}
      />
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <CodeInputBox
          control={control}
          setValue={setValue}
          inputRefs={inputRefs}
          handleInputChange={handleInputChange}
          handleKeyDown={handleKeyDown}
          errorVisible={errorVisible}
          codeError={codeError}
          resendAvailable={resendAvailable}
          handleResendCode={handleResendCode}
          seconds={seconds}
        />
        <div className={s.buttonLine}>
          <CustomButton
            link="/main"
            customStyle={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            padding={"16px 54px"}
            text={t("vetCodePage.cancel")}
            disabled={isFormValid}
          />
          <button className={s.button} type="submit" disabled={!isFormValid}>
            {t("vetCodePage.submit")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default L_vetCodePage;*/
