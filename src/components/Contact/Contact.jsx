import React from 'react';
import { useTranslation } from 'react-i18next';
import TelegramIcon from '../../assets/icons/telegram_icon.png'
import LinkedinIcon from "../../assets/icons/linkedin_icon_2.png";
import GmailIcon from "../../assets/icons/gmail_icon.png";
import './Contact.scss'

const Contact = () => {
    const { t } = useTranslation();
    return (
      <div className="contact" id="contact" data-aos="fade-left">
        <div className="contact__title">{t("contact-title")}</div>
        <div className="contact__subtitle">{t("contact-subtitle")}</div>
        <ul className="contact__list">
          <li className="contact__item">
            <img src={TelegramIcon} alt="" />
            <a href="https://t.me/ivan0990" rel="noreferrer" target="_blank">
              @ivan0990
            </a>
          </li>
          <li className="contact__item">
            <img src={GmailIcon} alt="" />
            <a
              href="mailto:example@example.com"
              rel="noreferrer"
              target="_blank"
            >
              krasnikov09122004@gmail.com
            </a>
          </li>
          <li className="contact__item">
            <img src={LinkedinIcon} alt="" />
            <a
              href="https://www.linkedin.com/in/ivan-krasnikov-181598248/"
              rel="noreferrer"
              target="_blank"
            >
              ivan-krasnikov
            </a>
          </li>
        </ul>
      </div>
    );
}

export default Contact;
