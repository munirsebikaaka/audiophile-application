import FooterNav from "../mainPages/navigations/footerNav";
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="main">
        <div className="padd">
          <div className="section4">
            <div className="shades7">
              <div className="sha1 sha2"></div>
              <div className="sha1 sha-f"></div>
            </div>
            <div className="shades8">
              <div className="sha1 sha"></div>
              <div className="sha1 sha2"></div>
              <div className="sha1 sha3"></div>
            </div>
            <div className="cont">
              <h1>Let’s talk about your project</h1>
              <p>
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow.
              </p>
            </div>
            <button>Get in touch</button>
          </div>
        </div>
        <div className="padd">
          <FooterNav />
          <div className="footer-main">
            <div className="locations-det">
              <h3>Designo Central Office</h3>
              <h3>3886 Wellington Street</h3>
              <h3>Toronto Ontario M9C 3J5</h3>
            </div>
            <div className="locations-det">
              <h3>Contact Us (Central Office)</h3>
              <h3>P: 256 742083075</h3>
              <h3>M: munirsebikaaka@gmail.com</h3>
            </div>
            <div className="icons-cell">
              <IoLogoFacebook className="footer-icon" />
              <FaYoutube className="footer-icon" />
              <FaTwitter className="footer-icon" />
              <CiLinkedin className="footer-icon" />
              <FaInstagram className="footer-icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
