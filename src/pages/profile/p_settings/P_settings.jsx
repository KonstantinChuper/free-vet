import s from "./p_settings.module.css";
import { useTransition, useState } from "react";
import i18n from "../../../utils/i18n";
import back from "../../../assets/back.svg";
import close from "../../../assets/close.svg";
import arrowRight from "../../../assets/arrowRight.svg";
import { useTranslation } from "react-i18next";
import ba from "../../../assets/flags/ba.svg";
import en from "../../../assets/flags/en.svg";
import fr from "../../../assets/flags/fr.svg";
import me from "../../../assets/flags/me.svg";
import rs from "../../../assets/flags/rs.svg";
import ru from "../../../assets/flags/ru.svg";
import ua from "../../../assets/flags/ua.svg";

function P_settings() {
  const { t } = useTranslation();
  const [isPending, startTransition] = useTransition(); // useTransition для асинхронного перехода
  const [isOpen, setIsOpen] = useState(false); // отслеживаем состояние открытия и закрытия выподающего меню
  const [selectedFlag, setSelectedFlag] = useState(en); // Флаг по умолчанию
  // массив данных о языке
  const languages = [
    { code: "en", flag: en, alt: "English" },
    { code: "me", flag: me, alt: "Montenegrin" },
    { code: "ba", flag: ba, alt: "Bosnian" },
    { code: "sr", flag: rs, alt: "Serbian" },
    { code: "ru", flag: ru, alt: "Russian" },
    { code: "ua", flag: ua, alt: "Ukrainian" },
    { code: "fr", flag: fr, alt: "French" },
  ];

  // Фильтрация флагов, чтобы исключить текущий выбранный флаг
  const filteredLanguages = languages.filter(
    (lang) => lang.flag !== selectedFlag
  );

  // функция для выбора флага
  const handleSelect = (flag, code) => {
    setSelectedFlag(flag); // обновляем состояние с новым флагом
    setIsOpen(false); // и закрываем меню

    startTransition(() => {
      i18n.changeLanguage(code); // Используем t для смены языка
      localStorage.setItem("selectedLanguage", code); // Сохраняем выбранный язык в localStorage
    });
  };
  // return (
  //   <div className={s.conteater_settings}>
  //     <div className={s.settings_header}>
  //       <img src={back} alt="back" />
  //       <h1>{t("settings.settings")}</h1>
  //       <img src={close} alt="close" />
  //     </div>

  //     <div className={s.notification}>
  //       <p>{t("settings.notifications")}</p>
  //       <img src={arrowRight} alt="arrow right" />
  //     </div>
  //     <hr />
  //     <div className={s.language}>
  //       <p>{t("settings.language")}</p>
  //       <div className={s.selectedFlag} onClick={() => setIsOpen(!isOpen)}>
  //         {!isOpen && (
  //           <img
  //             src={selectedFlag}
  //             alt="Selected language"
  //             className={s.selectedFlagImage}
  //           />
  //         )}
  //       </div>
  //       {isOpen && (
  //         <div className={s.dropdownMenu}>
  //           <img
  //             src={selectedFlag}
  //             alt="Selected language"
  //             className={s.flagImage}
  //           />
  //           {filteredLanguages.map((lang) => (
  //             <div
  //               key={lang.code}
  //               className={s.option}
  //               onClick={() => handleSelect(lang.flag, lang.code)}
  //             >
  //               <img src={lang.flag} alt={lang.alt} className={s.flagImage} />
  //             </div>
  //           ))}
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
  return (
    <div className={s.conteater_settings}>
      <div className={s.settings_header}>
        <img src={back} alt="back" />
        <h1>{t("settings.settings")}</h1>
        <img src={close} alt="close" />
      </div>

      <div className={s.notification}>
        <p>{t("settings.notifications")}</p>
        <img src={arrowRight} alt="arrow right" />
      </div>
      <hr />
      <div className={s.language}>
        <p>{t("settings.language")}</p>

        <div className={s.flagContainer}>
          <div className={s.selectedFlag} onClick={() => setIsOpen(!isOpen)}>
            <img
              src={selectedFlag}
              alt="Selected language"
              className={s.selectedFlagImage} // Добавьте класс для стилизации выбранного флага
            />
          </div>
          {isOpen && (
            <div className={s.dropdownMenu}>
              {filteredLanguages.map((lang) => (
                <div
                  key={lang.code}
                  className={s.option}
                  onClick={() => handleSelect(lang.flag, lang.code)}
                >
                  <img src={lang.flag} alt={lang.alt} className={s.flagImage} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default P_settings;
