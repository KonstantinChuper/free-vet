import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import s from "./l_verificationPage.module.css";
import FormHeader from "../../../components/formHeader/FormHeader";
import useVerificationCode from "../../../customHooks/useVerificationCode";
import CodeInputBox from "../../../components/codeInputBox/CodeInputBox";
import ErrorMessage from "../../../components/errorMessage/ErrorMessasge";
import { useState } from "react";

const L_verificationPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { phone_number } = location.state || {};
  console.log(phone_number);
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
    submitVerificationCode,
  } = useVerificationCode(phone_number);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    const code = Object.values(data).join("");
    try {
      const response = await submitVerificationCode(code);
      if (response.success) {
        if (validateCode(response.expectedCode, code)) {
          navigate("/verification/role");
        } else {
          setErrorMessage(t("errorMessages.invalidCode"));
        }
      } else {
        setErrorMessage(t("errorMessages.formSendError"));
        console.error("Verification failed:", response.error);
      }
    } catch (error) {
      setErrorMessage(t("errorMessages.formSendError"));
      console.error("Verification error:", error);
    }
  };

  return (
    <div className={s.l_verificationPage}>
      <FormHeader path="/register" titleKey={t("verificationPage.header")} />
      <p
        className={s.enterCode}
        dangerouslySetInnerHTML={{ __html: t("verificationPage.enterCode") }}
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
        <ErrorMessage message={errorMessage} />
        <button className={s.button} type="submit" disabled={!isFormValid}>
          {t("verificationPage.confirm")}
        </button>
      </form>
    </div>
  );
};

export default L_verificationPage;
