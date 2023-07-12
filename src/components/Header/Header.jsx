import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/langReducer";
import UaIcon from "../../assets/icons/ua_icon.png";
import UsaIcon from "../../assets/icons/usa_icon.png";
import { Link } from "react-scroll";
import "./Header.scss";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );

  const dispatch = useDispatch();

  const handleLangChange = (lang) => {
    changeLanguage(lang);
    dispatch(setLanguage(lang));
  };

  const handleBurgerCLick = () => {
    const header = document.querySelector("header");
    const body = document.querySelector("body");

    header.classList.toggle("open");
    if (header.classList.contains("open")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  };

  const handleLinkClick = () => {
    const header = document.querySelector("header");
    const body = document.querySelector("body");

    header.classList.remove("open");
    body.style.overflow = "auto";
  };
  return (
    <>
      <header className="header">
        <div className="header__container _container">
          <button
            className="header__burger"
            id="burger"
            onClick={handleBurgerCLick}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="header__logo">Krasnikov Ivan</div>
          <nav className="header__menu menu">
            <ul className="menu__list">
              <a href="/" className="menu__item">
                {t("home-menu")}
              </a>
              <Link
                className="menu__item"
                to="about"
                smooth={true}
                duration={300}
                offset={-10}
                onClick={handleLinkClick}
              >
                {t("about-menu")}
              </Link>
              <Link
                className="menu__item"
                to="contact"
                smooth={true}
                duration={300}
                offset={-10}
                onClick={handleLinkClick}
              >
                {t("contact-menu")}
              </Link>
              <button className="menu__item cv-download-button">
                <a
                  href="https://drive.google.com/file/d/1957EkaOkFRe1DkVZIZyw7Hv_74P6C4lp/view?usp=sharing"
                  download={true}
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("cv")}
                </a>
              </button>
            </ul>
          </nav>
          <div className="lang-buttons">
            <button
              className={`lang-button ${
                selectedLanguage === "en" ? "active-lang" : ""
              }`}
              onClick={() => handleLangChange("en")}
            >
              <img src={UsaIcon} alt="" />
            </button>
            |
            <button
              className={`lang-button ${
                selectedLanguage === "ua" ? "active-lang" : ""
              }`}
              onClick={() => handleLangChange("ua")}
            >
              <img src={UaIcon} alt="" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
