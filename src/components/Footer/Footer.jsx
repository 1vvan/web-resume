import React from 'react';
import GithubIcon from "../../assets/icons/github_icon.png";
import LinkedinIcon from "../../assets/icons/linkedin_icon.png";
import './Footer.scss'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__container _container">
          <div className="footer__body">
            <div className="footer__logo">Krasnikov Ivan</div>
            <ul className="footer__links">
              <a
                href="https://www.linkedin.com/in/ivan-krasnikov-181598248/"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                <img src={LinkedinIcon} alt="" />
              </a>
              <a
                href="https://github.com/1vvan"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                <img src={GithubIcon} alt="" />
              </a>
            </ul>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
