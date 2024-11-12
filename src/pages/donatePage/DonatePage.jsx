import React from 'react';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import CustomButtonSubmit from '../../components/customButtonSubmit/CustomButtonSubmit';
import CustomStickTitle from '../../components/customStickTitle/CustomStickTitle';
import Footer from '../../components/footer/Footer';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';  // Импортируем Link
import styles from './donatePage.module.css';
import logo from '../../assets/VectorLogo.png';

const DonatePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className={styles.donateContainer}>
      {/* Логотип */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>

      {/* Поддержать сервис */}
      <h2 className={styles.mainTitle}>{t("DonatePage.title")}</h2>

      {/* Финансовая поддержка */}
      <h3 className={styles.supportTitle}>
        {t("DonatePage.financialSupportTitle")}
      </h3>

      <div className={styles.donateSection}>
        <CustomStickTitle
          text={t("DonatePage.oneTimeSupportTitle")}
          style={{
            backgroundColor: "var(--color-main)",
            color: "white",
            marginLeft: "auto",
          }}
        />
        {/* <p style={{ marginTop: "-10px" }}>
          {t("DonatePage.amountPlaceholder")}
        </p> */}

        {/* Инпут суммы */}
        {/* <CustomInput
          placeholder={t("DonatePage.amountPlaceholder")}
          type="number"
          defaultValue={5}
          className={styles.donateInput}
          style={{
            backgroundColor: "rgba(42, 157, 143, 0.08)",
            border: "1px solid var(--color-main)",
            padding: "10px",
            borderRadius: "12px",
            width: "100%",
            boxSizing: "border-box",
          }}
        /> */}

        {/* Текст-подсказка под инпутом суммы */}
        <p style={{ width: "80%", marginBottom: "22px", marginTop: "10px" }}>
          {t("DonatePage.amountHelpText")}
        </p>

        {/* Кнопка оплаты */}

        <CustomButtonSubmit
          text={t('DonatePage.payButton')}
          onClick={() =>
            (window.location.href =
              'https://www.patreon.com/tailbook/membership?showCustomPledge=true')
          }
          className={styles.payButton}
          customStyle={{
            width: "98%",
          }}
        />
      </div>

      <div className={styles.otherSupportSection}>
        <CustomStickTitle
          text={t("DonatePage.otherSupportOptionsTitle")}
          style={{
            backgroundColor: "var(--color-main)",
            color: "white",
            marginBottom: "5px",
            marginLeft: "auto",
          }}
          className={styles.donateStickTitle}
        />

        <p style={{ width: "75%", marginBottom: "30px", marginTop: "24px" }}>
          {t("DonatePage.moreSupportInfo")}
        </p>

        {/* Кнопка "Ознакомиться" */}
        <CustomButtonSubmit
          text={t('DonatePage.learnMoreButton')}
          onClick={() =>
            window.open('https://tailbook.me/supporttheproject', '_blank')
          }
          customStyle={{
            width: '98%',
          }}
        />
      </div>

      {/* Текст о поддержке FreeVet в любое время */}
      <p className={styles.supportAnytimeText}>
        {t("DonatePage.supportAnytimeText")}
      </p>
      <h3 className={styles.joinTitle}>{t("DonatePage.joinProjectTitle")}</h3>

      <div className={styles.joinSection}>
        <CustomStickTitle
          text={t("DonatePage.applyButton")}
          style={{
            backgroundColor: "var(--color-main)",
            color: "white",
            marginLeft: "auto",
          }}
          className={styles.donateStickTitle}
        />
        <p style={{ width: "75%" }}>{t("DonatePage.joinProjectDescription")}</p>

<div className={styles.buttonGroup}>
  {/* Кнопка "Заполнить форму" */}
  <CustomButtonSubmit
    text={t('DonatePage.fillFormButton')}
    onClick={() =>
      window.open('https://tailbook.me/services/freevet', '_blank')
    }
    className={styles.fillFormButton}
    customStyle={{
      padding: '15px 12px',
      fontSize: '14px',
      width: '50%',
    }}
  />

  {/* Кнопка "Написать нам" */}
  <CustomButtonSubmit
    text={t('DonatePage.contactUsButton')}
    onClick={() =>
      window.open('mailto:tailbookme@gmail.com')
    }
    className={styles.contactUsButton}
    customStyle={{
      padding: '15px 12px',
      fontSize: '14px',
      width: '50%',
    }}
  />
</div>
      </div>

      <h4 className={styles.joinTitle}>{t('DonatePage.footerThankYou')}</h4>

      <Footer />
    </div>
  );
};

export default DonatePage;
