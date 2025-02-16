import { FiChevronRight } from "react-icons/fi";
import Footer from "../../generals/footer";
import AppNav from "../navigations/appNavigation";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const WebDesign = ({
  graphicBackground,
  appBackground,
  showLinks,
  setShowLinks,
  hoveredStyles1,
  hoveredStyles2,
}) => {
  const [styleH1, setStyleH1] = useState(false);
  const [styleH2, setStyleH2] = useState(false);
  return (
    <main className="design">
      <AppNav showLinks={showLinks} setShowLinks={setShowLinks} />
      <div className="res-pad">
        <section className="section1 web">
          <div className="shades">
            <div className="sha1 sha1-f"></div>
            <div className="sha1 sha2"></div>
            <div className="sha1 sha3"></div>
          </div>
          <div className="shades2">
            <div className="sha1 sha"></div>
            <div className="sha1 sha2"></div>
          </div>
          <h1>Web Design</h1>
          <p>
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
        </section>
      </div>
      <div className="padd">
        <section className="section2">
          <div className="main">
            <div className="cell">
              <img src="imgs/webD/expr.png" alt="card" />
              <div className="det">
                <h1>EXPRESS</h1>
                <p>A multi-carrier shipping website for ecommerce businesses</p>
              </div>
            </div>
            <div className="cell">
              <img src="imgs/webD/trans.png" alt="card" />

              <div className="det">
                <h1>TRANSFER</h1>
                <p>
                  Site for low-cost money transfers and sending money within
                  seconds
                </p>
              </div>
            </div>
            <div className="cell">
              <img src="imgs/webD/phot.png" alt="card" />
              <div className="det">
                <h1>PHOTON</h1>
                <p>
                  A state-of-the-art music player with high-resolution audio and
                  DSP effects
                </p>
              </div>
            </div>
          </div>
          <div className="main">
            <div className="cell">
              <img src="imgs/webD/build.jpg" alt="card" />
              <div className="det">
                <h1>BUILDER</h1>
                <p>
                  Connects users with local contractors based on their location
                </p>
              </div>
            </div>
            <div className="cell">
              <img src="imgs/webD/blog.png" alt="card" />

              <div className="det">
                <h1>BLOGR</h1>
                <p>
                  Blogr is a platform for creating an online blog or publication
                </p>
              </div>
            </div>
            <div className="cell">
              <img src="imgs/webD/cam.png" alt="card" />

              <div className="det">
                <h1>CAMP</h1>
                <p>
                  Get expert training in coding, data, design, and digital
                  marketing
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="padd">
        <section className="designs-sec">
          <div
            onMouseEnter={() => setStyleH1(true)}
            onMouseLeave={() => setStyleH1(false)}
            style={!styleH1 ? appBackground : hoveredStyles1}
          >
            <h1>APP DESIGN</h1>
            <NavLink to={"/app"}>
              view project <FiChevronRight className="icon" />
            </NavLink>
          </div>
          <div
            onMouseEnter={() => setStyleH2(true)}
            onMouseLeave={() => setStyleH2(false)}
            style={!styleH2 ? graphicBackground : hoveredStyles2}
          >
            <h1>GRAPHIC DESIGN</h1>
            <NavLink to={"/graphic"}>
              view project <FiChevronRight className="icon" />
            </NavLink>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};
export default WebDesign;
