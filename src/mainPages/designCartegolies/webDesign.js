import { FiChevronRight } from "react-icons/fi";
import Footer from "../../generals/footer";
import AppNav from "../navigations/appNavigation";
import { NavLink } from "react-router-dom";
const WebDesign = ({ graphicBackground, appBackground }) => {
  return (
    <main className="design">
      <AppNav />
      <section className="section1">
        <h1>Web Design</h1>
        <p>
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
      </section>
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
      <section className="designs-sec">
        <div style={appBackground}>
          <h1>APP DESIGN</h1>
          <NavLink to={"/app"}>
            view project <FiChevronRight className="icon" />
          </NavLink>
        </div>
        <div style={graphicBackground}>
          <h1>GRAPHIC DESIGN</h1>
          <NavLink to={"/graphic"}>
            view project <FiChevronRight className="icon" />
          </NavLink>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default WebDesign;
