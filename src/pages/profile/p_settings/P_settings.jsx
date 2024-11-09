import s from "./p_settings.module.css";
import { useTransition, useState, useEffect } from "react";
import i18n from "../../../utils/i18n";
import back from "../../../assets/back.svg";
import close from "../../../assets/close.svg";
import arrowRight from "../../../assets/arrowRight.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
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

  // Устанавливаем начальный флаг на основе сохраненного языка
  const [selectedFlag, setSelectedFlag] = useState(() => {
    const sevedLanguageCode = localStorage.getItem("selectedLanguage");
    const savedLanguage = languages.find(
      (lang) => lang.code === sevedLanguageCode
    );
    return savedLanguage ? savedLanguage.flag : en; // Если языка нет, ставим английский по умолчанию
  });

  // функция для выбора флага
  const handleSelect = (flag, code) => {
    setSelectedFlag(flag); // обновляем состояние с новым флагом
    setIsOpen(false); // и закрываем меню

    startTransition(() => {
      i18n.changeLanguage(code); // Используем t для смены языка
      localStorage.setItem("selectedLanguage", code); // Сохраняем выбранный язык в localStorage
    });
  };

  useEffect(() => {
    const savedLanguageCode = localStorage.getItem("selectedLanguage");
    if (savedLanguageCode && savedLanguageCode !== i18n.language) {
      i18n.changeLanguage(savedLanguageCode);
    }
  }, []);
  return (
    <div className={s.conteater_settings}>
      <div className={s.settings_header}>
        <Link to="/profile">
          <img src={back} alt="back" />
        </Link>

        <h1>{t("settings.settings")}</h1>
        <Link to="/profile">
          <img src={close} alt="close" />
        </Link>
      </div>

      <div className={s.notification}>
        <p>{t("settings.notifications")}</p>
        <img src={arrowRight} alt="arrow right" />
      </div>

      <div className={s.language}>
        <p>{t("settings.language")}</p>

        {/* Контейнер для флагов */}
        <div className={s.flagContainer}>
          {!isOpen ? (
            <div className={s.selectedFlag} onClick={() => setIsOpen(!isOpen)}>
              <img src={selectedFlag} alt="Selected language" />
            </div>
          ) : (
            <div className={s.dropdownMenu}>
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className={s.option}
                  onClick={() => handleSelect(lang.flag, lang.code)}
                >
                  <img src={lang.flag} alt={lang.alt} />
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
