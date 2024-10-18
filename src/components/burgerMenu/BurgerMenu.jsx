import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import s from './burgerMenu.module.css';

const BurgerMenu = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.burgerMenu}>
      <div onClick={toggleMenu} className={s.burgerIcon}>
        <div className={s.dot}></div>
        <div className={s.dot}></div>
        <div className={s.dot}></div>
      </div>
      {isOpen && (
        <div className={s.modal}>
          <div className={s.modalContent}>
            <span className={s.close} onClick={toggleMenu}>&times;</span>
            <ul>
              <li>{t('burgerMenu.editProfile')}</li>
              <li>{t('burgerMenu.settings')}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
