import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import s from "./footer.module.css";
import PlusWhite from "../../assets/PlusWhite.png";
import Profile from "../../assets/Profile.png";
import Vectore from "../../assets/Vector.png";
import Paw from "../../assets/paw.png";

const Footer = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const links = [
    { icon: PlusWhite, label: t("footer.main"), path: "/main" },
    { icon: Profile, label: t("footer.profile"), path: "/profile" },
    { icon: Vectore, label: t("footer.donate"), path: "/donate" },
    { icon: Paw, label: t("footer.service"), path: "/service" },
  ];

  const handleLinkClick = (path) => {
    if (pathname === "/main" && path === "/main") {
      window.location.reload();
    }
  };

  return (
    <div className={s.footer}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className={s.footerItem}
          onClick={() => handleLinkClick(link.path)}
        >
          <img src={link.icon} alt={link.label} className={s.footerIcon} />
          <span className={s.footer_links}>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Footer;
