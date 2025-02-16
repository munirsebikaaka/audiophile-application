import AppNav from "../navigations/appNavigation";
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Locations = ({ showLinks, setShowLinks }) => {
  return (
    <main className="locations">
      <AppNav showLinks={showLinks} setShowLinks={setShowLinks} />
      <div className="res-pad">
        <section className="section1">
          <div className="dets-cell">
            <div className="details">
              <div className="det">
                <div className="det-shade"></div>
                <h1>Canada</h1>
                <h3>Designo Central Office</h3>
                <p>3886 Wellington Street?</p>
                <p>Toronto, Ontario M9C 3J5</p>
              </div>
              <div className="contact">
                <div className="contact-shade"></div>

                <h3>Contact;</h3>
                <p>P: 256 742083075</p>
                <p>M: munirgmail.com</p>
              </div>
            </div>
          </div>
          <img className="img" src="imgs/lacations/Group1.png" alt="card" />
          <img
            className="location-res-imgs"
            src="imgs/lacations/tab1.png"
            alt="card"
          />
        </section>
      </div>
      <div className="res-pad">
        <section className="section2">
          <img className="img" src="imgs/lacations/Group2.png" alt="card" />
          <img
            className="location-res-imgs"
            src="imgs/lacations/tab2.png"
            alt="card"
          />
          <div className="dets-cell">
            <div className="details">
              <div className="det">
                <div className="det-shade"></div>
                <h1>Australia</h1>
                <h3>Designo AU Office</h3>
                <p>19 Balonne Street</p>
                <p>New South Wales 2443</p>
              </div>
              <div className="contact">
                <div className="contact-shade"></div>
                <h3>Contact;</h3>
                <p>P: 256 742083075</p>
                <p>M: munir@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="res-pad">
        <section className="section3">
          <div className="dets-cell">
            <div className="details">
              <div className="det">
                <div className="det-shade"></div>
                <h1>UK</h1>
                <h3>Designo UK Office</h3>
                <p>13 Colorado Way</p>
                <p>Rhyd-y-fro SA8 9GA</p>
              </div>
              <div className="contact">
                <div className="contact-shade"></div>
                <h3>Contact;</h3>
                <p>P: 256 742083075</p>
                <p>M: munir@gmail.com</p>
              </div>
            </div>
          </div>
          <img className="img" src="imgs/lacations/Group3.png" alt="card" />
          <img
            className="location-res-imgs"
            src="imgs/lacations/tab3.png"
            alt="card"
          />
        </section>
      </div>
      <footer>
        <div className="main">
          <div className="padd">
            <div className="section4">
              <div className="shades7">
                <div className="sha1 sha-f"></div>
                <div className="sha1"></div>
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
            <nav className="our-nav">
              <img src="imgs/home/app-logo.png" alt="logo" />
              <ul>
                <li>OUR COMPONY</li>
                <li>LOCATIONS</li>
                <li>CONTACT</li>
              </ul>
            </nav>
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
    </main>
  );
};
export default Locations;
