import FooterNav from "../mainPages/navigations/footerNav";
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const ContactFooter = () => {
  return (
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
  );
};
export default ContactFooter;
