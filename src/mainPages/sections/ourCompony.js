import Countries from "../../generals/countries";
import AppNav from "../navigations/appNavigation";

import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const OurCompony = ({ showLinks, setShowLinks }) => {
  return (
    <main className="ours">
      <AppNav showLinks={showLinks} setShowLinks={setShowLinks} />
      <div className="res-pad">
        <section className="section1 ">
          <div className="cont">
            <div className="det">
              <div className="our-sec1-cont-shade"></div>
              <h1>About Us</h1>
              <p>
                Founded in 2010, we are a creative agency that produces lasting
                results for our clients. We’ve partnered with many startups,
                corporations, and nonprofits alike to craft designs that make
                real impact. We’re always looking forward to creating brands,
                products, and digital experiences that connect with our clients’
                audiences.
              </p>
            </div>
          </div>
          <img className="main-img" src="imgs/about/Group1.jpg" alt="card" />
          <img
            className="location-res-imgs"
            src="imgs/about/tab1.png"
            alt="card"
          />
          <img
            className="location-res-imgs2"
            src="imgs/about/ph1.png"
            alt="card"
          />
        </section>
      </div>
      <div className="res-pad">
        <section className="section2">
          <img className="main-img" src="imgs/about/Group2.jpg" alt="card" />
          <img
            className="location-res-imgs"
            src="imgs/about/tab2.png"
            alt="card"
          />
          <img
            className="location-res-imgs2"
            src="imgs/about/ph2.png"
            alt="card"
          />
          <div>
            <div className="ours-sec2-shade1"></div>
            <div className="ours-sec2-shade"></div>
            <div className="ours-sec2-shade2"></div>
            <h1>World-class talent</h1>
            <p className="first">
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <p>
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </section>
      </div>
      <Countries />
      <div className="res-pad">
        <section className="section3">
          <div className="det">
            <div className="ours-sec3-shade1"></div>
            <div className="ours-sec3-shade"></div>
            <div className="ours-sec3-shade2"></div>
            <div className="cont">
              <h1>The real deal</h1>
              <p>
                As strategic partners in our clients’ businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and we strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give you tools to measure
                success.
              </p>
              <p>
                We are visual storytellers in appealing and captivating ways. By
                combining business and marketing strategies, we inspire
                audiences to take action and drive real results.
              </p>
            </div>
          </div>
          <img className="main-img" src="imgs/about/Group3.png" alt="card" />
          <img
            className="location-res-imgs"
            src="imgs/about/tab3.png"
            alt="card"
          />
          <img
            className="location-res-imgs2"
            src="imgs/about/ph3.png"
            alt="card"
          />
        </section>
      </div>
      <footer>
        <div className="main">
          <div className="padd">
            <div className="section4">
              <div className="shades7">
                <div className="sha1 sha2 "></div>
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
export default OurCompony;
