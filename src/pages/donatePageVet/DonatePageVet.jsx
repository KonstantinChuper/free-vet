import React from 'react';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import CustomButtonSubmit from '../../components/customButtonSubmit/CustomButtonSubmit';
import CustomStickTitle from '../../components/customStickTitle/CustomStickTitle';
import Footer from '../../components/footer/Footer';
import { useTranslation } from 'react-i18next';
import styles from './donatePageVet.module.css';
import logo from '../../assets/VectorLogo.png';

const DonatePage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.donateContainer}>
      {/* Логотип */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>

      {/* Поддержать сервис */}
      <h2 className={styles.mainTitle}>{t('DonatePage.title')}</h2>

      {/* Финансовая поддержка */}
      <h3 className={styles.supportTitle}>{t('DonatePage.financialSupportTitle')}</h3>

      <div className={styles.donateSection}>
        <CustomStickTitle
          text={t('DonatePage.oneTimeSupportTitle')}
          style={{
            backgroundColor: 'var(--color-main)',
            color: 'white',
            marginLeft: 'auto',
          }}
        />
        <p style={{ marginTop: '-10px' }}>{t('DonatePage.amountPlaceholder')}</p>

        {/* Инпут суммы */}
        <CustomInput
          placeholder={t('DonatePage.amountPlaceholder')}
          type="number"
          defaultValue={5}
          className={styles.donateInput}
          style={{
            backgroundColor: 'rgba(42, 157, 143, 0.08)',
            border: '1px solid var(--color-main)',
            padding: '10px',
            borderRadius: '12px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        />

        {/* Текст-подсказка под инпутом суммы */}
        <p style={{ width: '80%', marginBottom: '22px', marginTop: '-10px' }}>
          {t('DonatePage.amountHelpText')}
        </p>

        {/* Кнопка оплаты */}
        <CustomButtonSubmit
          text={t('DonatePage.payButton')}
          onClick={() => console.log('Оплатить')}
          className={styles.payButton}
          customStyle={{
            width: '98%',
          }}
        />
      </div>

      <div className={styles.otherSupportSection}>
        <CustomStickTitle
          text={t('DonatePage.otherSupportOptionsTitle')}
          style={{
            backgroundColor: 'var(--color-main)',
            color: 'white',
            marginBottom: '5px',
            marginLeft: 'auto',
          }}
          className={styles.donateStickTitle}
        />

        <p style={{ width: '75%', marginBottom: '30px', marginTop: '24px' }}>
          {t('DonatePage.moreSupportInfo')}
        </p>

{/* Кнопка "Ознакомиться" */}
<a 
  href="https://tailbook.me/supporttheproject" 
  target="_blank" 
  rel="noopener noreferrer"
  className={styles.learnMoreButton}
>
  <CustomButtonSubmit
    text={t('DonatePage.learnMoreButton')}
    onClick={() => console.log('Ознакомиться')}
    customStyle={{
      width: '98%',
    }}
  />
</a>
      </div>

      {/* Текст о поддержке FreeVet в любое время */}
      <p className={styles.supportAnytimeText}>{t('DonatePage.supportAnytimeText')}</p>
      {/* <h3 className={styles.joinTitle}>{t('DonatePage.joinProjectTitle')}</h3> */}

      {/* <div className={styles.joinSection}>
        <CustomStickTitle
          text={t('DonatePage.applyButton')}
          style={{
            backgroundColor: 'var(--color-main)',
            color: 'white',
            marginLeft: 'auto',
          }}
          className={styles.donateStickTitle}
        />
        <p style={{ width: '75%' }}>{t('DonatePage.joinProjectDescription')}</p>

        <div className={styles.buttonGroup}>

          <CustomButton
            text={t('DonatePage.fillFormButton')}
            onClick={() => console.log('Заполнить форму')}
            className={styles.fillFormButton}
            customStyle={{
              padding: '15px 12px',
              fontSize: '14px',
              width: '50%',
            }}
          />
          
          <CustomButton
            text={t('DonatePage.contactUsButton')}
            onClick={() => console.log('Написать нам')}
            className={styles.contactUsButton}
            customStyle={{
              padding: '15px 12px',
              fontSize: '14px',
              width: '50%',
            }}
          />
        </div>
      </div> */}
      <h4 className={styles.joinTitle}>{t('DonatePage.footerThankYou')}</h4>

      <Footer />
    </div>
  );
};

export default DonatePage;
