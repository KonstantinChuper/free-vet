import s from "./l_userRolePage.module.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CustomCheckbox from "../../../components/customCheckbox/CustomCheckbox";
import CustomStickTitle from "../../../components/customStickTitle/CustomStickTitle";
import FormHeader from "../../../components/formHeader/FormHeader";
import { useTranslation } from "react-i18next";
import ErrorMessage from "../../../components/errorMessage/ErrorMessasge";
import CustomButtonSubmit from "../../../components/customButtonSubmit/CustomButtonSubmit";
import { updateUserRole } from "../../../utils/api";
import { useParams, useNavigate } from "react-router-dom";

const L_userRolePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { userId } = useParams();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (userId) {
      localStorage.setItem("userId", userId);
    }
  }, []);

  const [userRoles, setUserRoles] = useState({
    userId,
    homelessAnimals: false,
    pets: false,
    volunteer: false,
    shelterWorker: false,
    petOwner: false,
  });

  const [vetRoles, setVetRoles] = useState({
    userId,
    vetDoctor: false,
    cynologist: false,
    zooPsychologist: false,
  });

  const isUserRoleSelected = Object.values(userRoles).some((value) => value);
  const isVetRoleSelected = Object.values(vetRoles).some((value) => value);

  const isAnyRoleSelected = isUserRoleSelected || isVetRoleSelected;

  const roleBasedLink = isUserRoleSelected
    ? "/main"
    : isVetRoleSelected
    ? "/verification/role/vet/vet-verification"
    : "/";

  const handleUserRoleChange = (e) => {
    const { name, checked } = e.target;
    setUserRoles((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    if (checked) {
      setVetRoles({
        userId,
        vetDoctor: false,
        cynologist: false,
        zooPsychologist: false,
      });
    }
  };

  const handleVetRoleChange = (e) => {
    const { name, checked } = e.target;
    setVetRoles((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    if (checked) {
      setUserRoles({
        userId,
        homelessAnimals: false,
        pets: false,
        volunteer: false,
        shelterWorker: false,
        petOwner: false,
      });
    }
  };

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async () => {
    try {
      if (isUserRoleSelected) {
        await updateUserRole(userRoles);
      } else if (isVetRoleSelected) {
        await updateUserRole(vetRoles);
      }
      reset();
      navigate(roleBasedLink);
    } catch (error) {
      setErrorMessage(t("errorMessages.formSendError"));
      console.error("Ошибка при отправке формы:", error);
    }
  };

  return (
    <div className={s.l_userRolePage}>
      <div className={s.formHeader}>
        <FormHeader
          path="/"
          fontSize={36}
          titleKey={t("userRolePage.header")}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.formBox}>
          <h5 className={s.formBox_header}>{t("userRolePage.role")}</h5>

          <div
            className={`${s.formBox_checkboxBox_user} ${
              isVetRoleSelected ? s.disabledBox : ""
            }`}
          >
            <span>
              <p className={isVetRoleSelected ? s.disabledText : ""}>
                {t("userRolePage.helpWithFreeVet")}
              </p>
              <div className={s.formBox_checkboxBox_pets}>
                <span>
                  <CustomCheckbox
                    {...register("homelessAnimals")}
                    name="homelessAnimals"
                    onChange={handleUserRoleChange}
                    checked={userRoles.homelessAnimals}
                    disabled={isVetRoleSelected}
                  />{" "}
                  <span className={isVetRoleSelected ? s.disabledText : ""}>
                    {t("userRolePage.helpHomelessAnimals")}
                  </span>
                </span>
                <span>
                  <CustomCheckbox
                    {...register("pets")}
                    name="pets"
                    onChange={handleUserRoleChange}
                    checked={userRoles.pets}
                    disabled={isVetRoleSelected}
                  />{" "}
                  <span className={isVetRoleSelected ? s.disabledText : ""}>
                    {t("userRolePage.helpPets")}
                  </span>
                </span>
              </div>
            </span>
            <span>
              <p className={isVetRoleSelected ? s.disabledText : ""}>
                {t("userRolePage.tellAboutYourself")}
              </p>
              <div className={s.formBox_checkboxBox_pets}>
                <span>
                  <CustomCheckbox
                    {...register("volunteer")}
                    name="volunteer"
                    onChange={handleUserRoleChange}
                    checked={userRoles.volunteer}
                    disabled={isVetRoleSelected}
                  />{" "}
                  <span className={isVetRoleSelected ? s.disabledText : ""}>
                    {t("userRolePage.volunteer")}
                  </span>
                </span>
                <span style={{ position: "relative", right: "5px" }}>
                  <CustomCheckbox
                    {...register("shelterWorker")}
                    name="shelterWorker"
                    onChange={handleUserRoleChange}
                    checked={userRoles.shelterWorker}
                    disabled={isVetRoleSelected}
                  />{" "}
                  <span className={isVetRoleSelected ? s.disabledText : ""}>
                    {t("userRolePage.shelterWorker")}
                  </span>
                </span>
              </div>
            </span>
            <span>
              <div className={s.formBox_checkboxBox_pets}>
                <span>
                  <CustomCheckbox
                    {...register("petOwner")}
                    name="petOwner"
                    onChange={handleUserRoleChange}
                    checked={userRoles.petOwner}
                    disabled={isVetRoleSelected}
                  />{" "}
                  <span className={isVetRoleSelected ? s.disabledText : ""}>
                    {t("userRolePage.havePet")}
                  </span>
                </span>
              </div>
              <span
                className={isVetRoleSelected ? s.disabledText : ""}
                style={{ position: "absolute", bottom: "-1px", right: "-1px" }}
              >
                <CustomStickTitle
                  backgroundColor={"white"}
                  text={t("userRolePage.userStick")}
                />
              </span>
            </span>
          </div>

          <div className={s.lineBox}>
            <div className={s.line}></div>
            <p>{t("userRolePage.or")}</p>
            <div className={s.line}></div>
          </div>

          <div
            className={`${s.formBox_checkboxBox_specialist} ${
              isUserRoleSelected ? s.disabledBox : ""
            }`}
          >
            <span>
              <p className={isUserRoleSelected ? s.disabledText : ""}>
                {t("userRolePage.wantToJoin")}
              </p>
              <div className={s.formBox_checkboxBox_pets}>
                <span>
                  <CustomCheckbox
                    {...register("vetDoctor")}
                    name="vetDoctor"
                    onChange={handleVetRoleChange}
                    checked={vetRoles.vetDoctor}
                    disabled={isUserRoleSelected}
                  />{" "}
                  <span className={isUserRoleSelected ? s.disabledText : ""}>
                    {t("userRolePage.vetDoctor")}
                  </span>
                </span>
              </div>
            </span>
            <span>
              <div className={s.formBox_checkboxBox_pets}>
                <span>
                  <CustomCheckbox
                    {...register("cynologist")}
                    name="cynologist"
                    onChange={handleVetRoleChange}
                    checked={vetRoles.cynologist}
                    disabled={isUserRoleSelected}
                  />{" "}
                  <span className={isUserRoleSelected ? s.disabledText : ""}>
                    {t("userRolePage.cynologist")}
                  </span>
                </span>
              </div>
            </span>
            <div className={s.formBox_checkboxBox_pets}>
              <span>
                <CustomCheckbox
                  {...register("zooPsychologist")}
                  name="zooPsychologist"
                  onChange={handleVetRoleChange}
                  checked={vetRoles.zooPsychologist}
                  disabled={isUserRoleSelected}
                />{" "}
                <span className={isUserRoleSelected ? s.disabledText : ""}>
                  {t("userRolePage.zooPsychologist")}
                </span>
              </span>
              <span
                className={isUserRoleSelected ? s.disabledText : ""}
                style={{ position: "absolute", bottom: "-1px", right: "-1px" }}
              >
                <CustomStickTitle
                  text={t("userRolePage.vetStick")}
                  backgroundColor={"white"}
                />
              </span>
            </div>
          </div>
          <ErrorMessage message={errorMessage} />
        </div>
        <div className={s.buttonBox}>
          <CustomButtonSubmit
            onClick={handleSubmit}
            text={t("userRolePage.saveBtn")}
            padding="16px 78px"
            disabled={!isAnyRoleSelected}
          />
        </div>
      </form>
    </div>
  );
};

export default L_userRolePage;
