import React from "react";
import "./Header.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/langReducer";

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
  return (
    <>
      <header className="header">
        <div className="header__container _container">
          <div className="header__logo">Krasnikov Ivan</div>
          <nav className="header__menu menu">
            <ul className="menu__list">
              <li className="menu__item">{t("home-menu")}</li>
              <li className="menu__item">{t("about-menu")}</li>
              <li className="menu__item">{t("skills-menu")}</li>
              <li className="menu__item">{t("contact-menu")}</li>
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
              <div className="menu__item lang-buttons">
                <button
                  className={`lang-button ${
                    selectedLanguage === "en" ? "active-lang" : ""
                  }`}
                  onClick={() => handleLangChange("en")}
                >
                  EN
                </button>
                |
                <button
                  className={`lang-button ${
                    selectedLanguage === "ua" ? "active-lang" : ""
                  }`}
                  onClick={() => handleLangChange("ua")}
                >
                  UA
                </button>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
