import React from 'react';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import CustomButtonSubmit from '../../components/customButtonSubmit/CustomButtonSubmit';
import CustomStickTitle from '../../components/customStickTitle/CustomStickTitle';
import Footer from '../../components/footer/Footer';
import styles from './donatePage.module.css'; // Модульные стили
import ru from '../../locales/ru.json'; 
import logo from '../../assets/Vector.svg';

const DonatePage = () => {
  const texts = ru.DonatePage; 

  return (
    <div className={styles.donateContainer}>
      {/* Логотип */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>

      {/* Поддержать сервис */}
      <h2 className={styles.mainTitle}>{texts.title}</h2>

      {/* Финансовая поддержка */}
      <h3 className={styles.supportTitle}>{texts.financialSupportTitle} </h3>

      <div className={styles.donateSection}>
        <CustomStickTitle
          text={texts.oneTimeSupportTitle}
          style={{
            backgroundColor: 'var(--color-main)',
            color: 'white',
            marginLeft: 'auto'
          }}
        />
        <p style={{marginTop: '-10px'}}>{texts.amountPlaceholder}</p>

        {/* Инпут суммы */}
        <CustomInput
          placeholder={texts.amountPlaceholder}
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
        <p style={{ width: '80%', marginBottom: '22px', marginTop: '-10px'}} className={styles.amountHelpText}>{texts.amountHelpText}</p>

        {/* Кнопка оплаты */}
        <CustomButtonSubmit
          text={texts.payButton}
          onClick={() => console.log('Оплатить')}
          className={styles.payButton}
          customStyle={{
            width: '98%',
          }}
        />
      </div>

      <div className={styles.otherSupportSection}>
        <CustomStickTitle
          text={texts.otherSupportOptionsTitle}
          style={{
            backgroundColor: 'var(--color-main)',
            color: 'white',
            marginBottom: '5px',
            marginLeft: 'auto'
          }}
          className={styles.donateStickTitle}
        />

        <p style={{ width: '75%', marginBottom: '30px', marginTop: '24px'}}>{texts.moreSupportInfo}</p>

        {/* Кнопка "Ознакомиться" */}
        <CustomButtonSubmit
          text={texts.learnMoreButton}
          onClick={() => console.log('Ознакомиться')}
          className={styles.learnMoreButton}
          customStyle={{
            width: '98%',
          }}
        />
      </div>

      {/* Текст о поддержке FreeVet в любое время */}
      <p className={styles.supportAnytimeText}>{texts.supportAnytimeText}</p>
      <h3 className={styles.joinTitle}>{texts.joinProjectTitle}</h3>

      <div className={styles.joinSection}>
        <CustomStickTitle
          text={texts.applyButton}
          style={{
            backgroundColor: 'var(--color-main)',
            color: 'white',
            marginLeft: 'auto'
          }}
          className={styles.donateStickTitle}
        />
        <p style={{ width: '75%'}}>{texts.joinProjectDescription}</p>

        <div className={styles.buttonGroup}>
          {/* Кнопка "Заполнить форму" */}
          <CustomButton
            text={texts.fillFormButton}
            onClick={() => console.log('Заполнить форму')}
            className={styles.fillFormButton}
            customStyle={{
              padding: '15px 12px',
              fontSize: '14px',
              width: '50%',
            }}
          />

          {/* Кнопка "Написать нам" */}
          <CustomButton
            text={texts.contactUsButton}
            onClick={() => console.log('Написать нам')}
            className={styles.contactUsButton}
            customStyle={{
              padding: '15px 12px',
              fontSize: '14px',
              width: '50%',
            }}
          />
        </div>
      </div>
      <h4 className={styles.joinTitle}>{texts.footerThankYou}</h4>

      <Footer />
    </div>
  );
};

export default DonatePage;
