import FooterNav from "../mainPages/navigations/footerNav";
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="section4">
        <div>
          <h1>Let’s talk about your project</h1>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <button>Get in touch</button>
      </div>
      <div>
        <FooterNav />
        <div>
          <div>
            <h3>Designo Central Office</h3>
            <h3>3886 Wellington Street</h3>
            <h3>Toronto Ontario M9C 3J5</h3>
          </div>
          <div>
            <p>Contact Us (Central Office)</p>
            <h3>P: 256 742083075</h3>
            <h3>M: munirsebikaaka@gmail.com</h3>
          </div>
        </div>
        <div>
          <IoLogoFacebook />
          <FaYoutube />
          <FaTwitter />
          <CiLinkedin />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
