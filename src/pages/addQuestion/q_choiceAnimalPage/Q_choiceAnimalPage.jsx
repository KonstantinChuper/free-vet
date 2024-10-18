import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import s from "./q_choiceAnimalPage.module.css";
import FormHeader from "../../../components/formHeader/FormHeader";
import LineHeader from "../../../components/lineHeader/LineHeader";
import close from "../../../assets/close.svg";
import QuestionPetList from "../../../components/questionPetList/QuestionPetList";
import CustomButton from "../../../components/customButton/CustomButton";
import plus from "../../../assets/plus.svg";

const Q_choiceAnimalPage = () => {
  const { t } = useTranslation();
  const [selectedAnimalType, setSelectedAnimalType] = useState(null);
  const [isNewAnimalSelected, setIsNewAnimalSelected] = useState(false);
  const [resetSelection, setResetSelection] = useState(false);

  const handleSelectImage = (type) => {
    setIsNewAnimalSelected(false);
    setSelectedAnimalType(type);
    setResetSelection(false);
  };

  const handleNewAnimalClick = () => {
    setSelectedAnimalType(null);
    setIsNewAnimalSelected(!isNewAnimalSelected);
    setResetSelection(true);
  };

  const animalBasedLink =
    selectedAnimalType === "digital"
      ? "/main/question/description-animal/send"
      : isNewAnimalSelected
      ? "/main/question/description-animal"
      : "#";

  return (
    <div className={s.q_choiceAnimalPage}>
      <div className={s.q_choiceAnimalPage_header}>
        <FormHeader path="/main" fontSize={36} titleKey={t("questionPage.title")} />
        <Link to={"/main"}>
          <img className={s.closeBtn} src={close} alt="close" />
        </Link>
      </div>
      <LineHeader middle={"var(--color-line)"} />
      <h5 dangerouslySetInnerHTML={{ __html: t("questionPage.animalSelection") }} />
      <QuestionPetList
        categories={[
          {
            title: t("userPage.myAnimalsTitle"),
            images: [
              { src: "https://placehold.co/400", type: "digital" },
              { src: "https://placehold.co/400", type: "digital" },
              { src: "https://placehold.co/400", type: "digital" },
            ],
            svgcolor: "green",
          },
          {
            title: t("userPage.strayAnimalsTitle"),
            images: [
              { src: "https://placehold.co/400", type: "non-digital" },
              { src: "https://placehold.co/400", type: "non-digital" },
              { src: "https://placehold.co/400", type: "non-digital" },
            ],
            svgcolor: "orange",
          },
        ]}
        onSelectImage={handleSelectImage}
        resetSelection={resetSelection}
      />
      <div className={s.q_choiceAnimalPage_newAnimal_box}>
        <h5 dangerouslySetInnerHTML={{ __html: t("questionPage.newAnimal") }} />
        <div className={s.q_choiceAnimalPage_newAnimal_boxBtnTitle}>
          <div
            className={s.q_choiceAnimalPage_newAnimal_btnPlus}
            onClick={handleNewAnimalClick}
          >
            <img src={plus} alt="plus" />
            <div className={`${s.circle} ${isNewAnimalSelected ? s.selected : ""}`} />
          </div>
          <h5>{t("questionPage.addAnimal")}</h5>
        </div>
      </div>
      <CustomButton
        text={t("questionPage.continueButton")}
        padding={"16px 120.5px"}
        link={animalBasedLink}
        disabled={!selectedAnimalType && !isNewAnimalSelected}
      />
    </div>
  );
};

export default Q_choiceAnimalPage;
