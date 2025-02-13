import Countries from "../../generals/countries";
import AppNav from "../navigations/appNavigation";
import FooterNav from "../navigations/footerNav";
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const ContactUs = ({ showLinks, setShowLinks }) => {
  return (
    <main className="contact">
      <AppNav showLinks={showLinks} setShowLinks={setShowLinks} />
      <section className="section1">
        <div className="cont-sec1-det-shade2"></div>

        <div>
          <div className="det">
            <div className="cont-sec1-det-shade"></div>

            <h1>Contact Us</h1>
            <p>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
        </div>
        <div className="login">
          <label>name</label>
          <input type="text" />
          <label>email address</label>
          <input type="text" />
          <label>number</label>
          <input type="number" />
          <label className="msg">your Message</label>
          <input type="text" />
          <button>SUBMIT</button>
        </div>
      </section>
      <div className="count">
        <Countries />
      </div>
      <footer>
        <div className="main">
          <FooterNav />
          <div className="footer-main">
            <div>
              <h3>Designo Central Office</h3>
              <h3>3886 Wellington Street</h3>
              <h3>Toronto Ontario M9C 3J5</h3>
            </div>
            <div>
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
      </footer>
    </main>
  );
};
export default ContactUs;
