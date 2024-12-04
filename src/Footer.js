import FooterNav from "./AppFooterNav";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-cell">
      <footer>
        <FooterNav />
        <div className="main">
          <div className="inner">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <h3>Copyright {new Date().getFullYear()} All Rights Reserved</h3>
          </div>
          <div className="footer-icons">
            <RiFacebookBoxFill className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
