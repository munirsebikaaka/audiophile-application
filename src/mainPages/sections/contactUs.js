import Countries from "../../generals/countries";
// import Footer from "../../generals/footer";
import AppNav from "../navigations/appNavigation";

// import FooterNav from "../mainPages/navigations/footerNav";
import FooterNav from "../navigations/footerNav";
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <main className="contact">
      <AppNav />
      <section className="section1">
        <div>
          <div className="det">
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
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email Address" />
          <input type="number" placeholder="Number" />
          <input type="text" placeholder="Your Message" />
        </div>
      </section>
      <div className="count">
        <Countries />
      </div>
      {/* <Footer /> */}
      <footer>
        <div className="main">
          {/* <div className="section4">
          <div>
            <h1>Let’s talk about your project</h1>
            <p>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <button>Get in touch</button>
        </div> */}
          <FooterNav />
          <div className="footer-main">
            {/* <div> */}
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
            {/* </div> */}
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
