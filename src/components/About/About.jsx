import React from "react";
import { useTranslation } from "react-i18next";
import SkillsImage from "../../assets/images/skills.png";
import "./About.scss";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about" id="about" data-aos="fade-right">
      <div className="about__image">
        <img src={SkillsImage} alt="" />
      </div>
      <div className="about__body">
        <div className="about__content">
          <div className="about__title">{t("about-title")}</div>
          <div className="about__text">{t("about-text")}</div>
        </div>
        <div className="about__skills skills">
          <ul className="skills-list">
            <li className="skills-item">
              <div className="skill-title">
                <span>HTML/CSS</span>
                <span>100%</span>
              </div>
              <div className="skill-rate">
                <div className="rate-bg"></div>
              </div>
            </li>
            <li className="skills-item">
              <div className="skill-title">
                <span>JavaScript</span>
                <span>100%</span>
              </div>
              <div className="skill-rate">
                <div className="rate-bg"></div>
              </div>
            </li>
            <li className="skills-item">
              <div className="skill-title">
                <span>React.js</span>
                <span>90%</span>
              </div>
              <div className="skill-rate">
                <div className="rate-bg" style={{ width: "90%" }}></div>
              </div>
            </li>
            <li className="skills-item">
              <div className="skill-title">
                <span>PHP</span>
                <span>80%</span>
              </div>
              <div className="skill-rate">
                <div className="rate-bg" style={{ width: "80%" }}></div>
              </div>
            </li>
            <li className="skills-item">
              <div className="skill-title">
                <span>MySQL</span>
                <span>80%</span>
              </div>
              <div className="skill-rate">
                <div className="rate-bg" style={{ width: "80%" }}></div>
              </div>
            </li>
            <li className="skills-item">
              <div className="skill-title">
                <span>WebFlow</span>
                <span>75%</span>
              </div>
              <div className="skill-rate">
                <div className="rate-bg" style={{ width: "75%" }}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
