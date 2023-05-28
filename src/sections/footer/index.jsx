import { Logo } from "components/logo";
import { ReactComponent as Linkedin } from '../../assets/svg/linkedin.svg';
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg';
import { ReactComponent as Facebook } from '../../assets/svg/facebook.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__info">
            <Logo />
            <address className="footer__address">919 North Market Street, Suite 950, Wilmington, Delaware 19801</address>
          </div>
          <div className="footer__contacts">
            <ul className="footer__emails">
              <li className="footer__emails-item">
                <span>For investors</span>
                <a href="mailto:office@fuel-well.com" className="footer__emails-link">office@fuel-well.com</a>
              </li>
              <li className="footer__emails-item">
                <span>For B2B </span>
                <a href="mailto:sales@fuel-well.com" className="footer__emails-link">sales@fuel-well.com</a>
              </li>
            </ul>
            <ul className="footer__socials">
              <li className="footer__socials-item">
                <a href="/" className="footer__socials-link" title="Linkedin" aria-label="Link to Linkedin">
                  <Linkedin />
                </a>
              </li>
              <li className="footer__socials-item">
                <a href="/" className="footer__socials-link" title="Twitter" aria-label="Link to Twitter">
                  <Twitter />
                </a>
              </li>
              <li className="footer__socials-item">
                <a href="/" className="footer__socials-link" title="Facebook" aria-label="Link to Facebook">
                  <Facebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__policy"><span>Private policy</span></div>
      </div>
    </footer>
  );
};