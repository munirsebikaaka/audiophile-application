import { FiChevronRight } from "react-icons/fi";
import AppNav from "./navigations/appNavigation";
import Footer from "../generals/footer";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const HomePage = ({
  appBackground,
  webBackground,
  graphicBackground,
  showLinks,
  setShowLinks,
  hoveredStyles,
  hoveredStyles2,
  hoveredStyles1,
}) => {
  const [stylesH, setStylesH] = useState(false);
  const [stylesH1, setStylesH1] = useState(false);
  const [stylesH2, setStylesH2] = useState(false);

  return (
    <main className="home">
      <AppNav showLinks={showLinks} setShowLinks={setShowLinks} />
      <div className="res-pad">
        <section className="section1">
          <div className="content">
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p>
              With over 10 years in the industry, we are experienced in <br />
              creating fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <button>Learn More</button>
          </div>
          <div className=" img-cell"></div>

          <img src="imgs/home/hero-img.png" alt="phone structure" />
        </section>
      </div>
      <div className="padd">
        <section className="section2">
          <div
            onMouseEnter={() => setStylesH(true)}
            onMouseLeave={() => setStylesH(false)}
            className="big"
            style={!stylesH ? webBackground : hoveredStyles}
          >
            <h1>web design </h1>
            <NavLink to={"/web"}>
              view project <FiChevronRight className="icon" />
            </NavLink>
          </div>
          <div className="smalls">
            <div
              className="small"
              onMouseEnter={() => setStylesH1(true)}
              onMouseLeave={() => setStylesH1(false)}
              style={!stylesH1 ? appBackground : hoveredStyles1}
            >
              <h1>app design </h1>
              <NavLink to={"/app"}>
                view project <FiChevronRight className="icon" />
              </NavLink>
            </div>
            <div
              className="small"
              onMouseEnter={() => setStylesH2(true)}
              onMouseLeave={() => setStylesH2(false)}
              style={!stylesH2 ? graphicBackground : hoveredStyles2}
            >
              <h1>graphic design </h1>
              <NavLink to={"/graphic"}>
                view project <FiChevronRight className="icon" />
              </NavLink>
            </div>
          </div>
        </section>
      </div>
      <div className="padd">
        <section className="section3">
          <div className="main">
            <div className="container">
              <img src="imgs/home/passion.png" alt="sticker" />
            </div>
            <div className="det">
              <h1>PASSIONATE</h1>
              <p>
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
          </div>
          <div className="main">
            <div className="container1">
              <img src="imgs/home/resource.png" alt="sticker" />
            </div>
            <div className="det">
              <h1>RESOURCEFUL</h1>
              <p>
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our
                clients’ needs.
              </p>
            </div>
          </div>
          <div className="main">
            <div className="container2">
              <img src="imgs/home/freindly.png" alt="sticker" />
            </div>
            <div className="det">
              <h1>FRIENDLY</h1>
              <p>
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};
export default HomePage;
