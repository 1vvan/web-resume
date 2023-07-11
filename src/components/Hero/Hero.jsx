import React from "react";
import Avatar from "../../assets/images/avatar.jpg";
import { useTranslation } from "react-i18next";
import GithubIcon from "../../assets/icons/github_icon.png";
import LinkedinIcon from "../../assets/icons/linkedin_icon.png";
import "./Hero.scss";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="hero">
        <div className="hero__content">
          <div className="hero__title">
            <div className="hero__hello">
              <p>{t("hero-hi")}</p>
              <p>{t("hero-name")}</p>
            </div>
            <div className="hero__profession">
              <p>{t("hero-proff-1")}</p>
              <p>{t("hero-proff-2")}</p>
            </div>
          </div>
          <div className="hero__more-text">{t("hero-more")}</div>
        </div>
        <div className="hero__image">
          <img className="avatar" src={Avatar} alt="" />
          <div className="hero__links">
            <a
              href="https://www.linkedin.com/in/ivan-krasnikov-181598248/"
              className="hero__link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="" />
            </a>
            <a
              href="https://github.com/1vvan"
              className="hero__link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
