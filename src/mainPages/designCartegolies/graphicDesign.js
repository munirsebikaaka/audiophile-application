import { FiChevronRight } from "react-icons/fi";
import Footer from "../../generals/footer";
import AppNav from "../navigations/appNavigation";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const GraphicDesign = ({
  appBackground,
  webBackground,
  showLinks,
  setShowLinks,
  hoveredStyles1,
  hoveredStyles,
}) => {
  const [styleH1, setStyleH1] = useState(false);
  const [styleH, setStyleH] = useState(false);
  return (
    <main className="design">
      <AppNav showLinks={showLinks} setShowLinks={setShowLinks} />
      <div className="res-pad">
        <section className="section1 desig">
          <div className="shades5">
            <div className="sha1 sha1-f"></div>
            <div className="sha1 sha2"></div>
          </div>
          <div className="shades6">
            <div className="sha1 sha"></div>
            <div className="sha1 sha2"></div>
            <div className="sha1 sha3"></div>
          </div>

          <h1>Graphic Design</h1>
          <p>
            We deliver eye-catching branding materials that are tailored to meet
            your business objectives.
          </p>
        </section>
      </div>
      <div className="padd">
        <section className="section2">
          <div className="main">
            <div className="cell">
              <img src="imgs/graphicD/graph2.png" alt="card" />
              <div className="det">
                <h1>TIM BROWN</h1>
                <p>
                  A book cover designed for Tim Brown’s new release, ‘Change’
                </p>
              </div>
            </div>
            <div className="cell">
              <img src="imgs/graphicD/graph3.jpg" alt="card" />
              <div className="det">
                <h1>BOXED WATER</h1>
                <p>A simple packaging concept made for Boxed Water</p>
              </div>
            </div>
            <div className="cell">
              <img src="imgs/graphicD/graph1.png" alt="card" />
              <div className="det">
                <h1>SCIENCE!</h1>
                <p>
                  A poster made in collaboration with the Federal Art Project
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
            onMouseEnter={() => setStyleH(true)}
            onMouseLeave={() => setStyleH(false)}
            style={!styleH ? webBackground : hoveredStyles}
          >
            <h1>WEB DESIGN</h1>
            <NavLink to={"/web"}>
              view project <FiChevronRight className="icon" />
            </NavLink>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};
export default GraphicDesign;
