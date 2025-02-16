import { FiChevronRight } from "react-icons/fi";
import Footer from "../../generals/footer";
import AppNav from "../navigations/appNavigation";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const AppDesign = ({
  webBackground,
  graphicBackground,
  showLinks,
  setShowLinks,
  hoveredStyles,
  hoveredStyles2,
}) => {
  const [styleW, setStylesW] = useState(false);
  const [styleH2, setStylesH2] = useState(false);
  return (
    <main className="design">
      <AppNav showLinks={showLinks} setShowLinks={setShowLinks} />
      <div className="res-pad">
        <section className="section1 app">
          <div className="shades3">
            <div className="sha1 sha1-f"></div>
            <div className="sha1 sha2"></div>
          </div>

          <div className="shades4">
            <div className="sha1 sha"></div>
            <div className="sha1 sha2"></div>
            <div className="sha1 sha3"></div>
          </div>

          <h1>App Design</h1>
          <p>
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </section>
      </div>
      <div className="padd">
        <section className="section2">
          <div className="main">
            <div className="cell">
              <img src="imgs/appD/Airfilter.png" alt="card" />
              <div className="det">
                <h1>AIRFILTER</h1>
                <p>
                  Solving the problem of poor indoor air quality by filtering
                  the air
                </p>
              </div>
            </div>
            <div className="cell">
              <img src="imgs/appD/Eyecam.png" alt="card" />
              <div className="det">
                <h1>EYECAM</h1>
                <p>
                  Product that lets you edit your favorite photos and videos at
                  any time
                </p>
              </div>
            </div>
            <div className="cell">
              <img src="imgs/appD/Faceit.png" alt="card" />
              <div className="det">
                <h1>FACEIT</h1>
                <p>
                  Get to meet your favorite internet superstar with the faceit
                  app
                </p>
              </div>
            </div>
          </div>
          <div className="main">
            <div className="cell">
              <img src="imgs/appD/Dark.png" alt="card" />
              <div className="det">
                <h1>TODO</h1>
                <p>
                  A todo app that features cloud sync with light and dark mode
                </p>
              </div>
            </div>
            <div className="cell">
              <img src="imgs/appD/Mobile.png" alt="card" />
              <div className="det">
                <h1>LOOPSTUDIOS</h1>
                <p>A VR experience app made for Loopstudios </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="padd">
        <section className="designs-sec">
          <div
            onMouseEnter={() => setStylesW(true)}
            onMouseLeave={() => setStylesW(false)}
            style={!styleW ? webBackground : hoveredStyles}
          >
            <h1>WEB DESIGN</h1>
            <NavLink to={"/web"}>
              view project <FiChevronRight className="icon" />
            </NavLink>
          </div>
          <div
            onMouseEnter={() => setStylesH2(true)}
            onMouseLeave={() => setStylesH2(false)}
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
export default AppDesign;
