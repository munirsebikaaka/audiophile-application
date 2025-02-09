import { FiChevronRight } from "react-icons/fi";
import Footer from "../../generals/footer";
import AppNav from "../navigations/appNavigation";
import { NavLink } from "react-router-dom";
const GraphicDesign = ({
  appBackground,
  webBackground,
  showLinks,
  setShowLinks,
}) => {
  return (
    <main className="design">
      <AppNav showLinks={showLinks} setShowLinks={setShowLinks} />
      <section className="section1 desig">
        <div className="shades5">
          <div className="sha1"></div>
          <div className="sha1"></div>
        </div>
        <div className="shades6">
          <div className="sha1"></div>
          <div className="sha1"></div>
          <div className="sha1"></div>
        </div>

        <h1>Graphic Design</h1>
        <p>
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </section>
      <section className="section2">
        <div className="main">
          <div className="cell">
            <img src="imgs/graphicD/graph2.png" alt="card" />
            <div className="det">
              <h1>TIM BROWN</h1>
              <p>A book cover designed for Tim Brown’s new release, ‘Change’</p>
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
              <p>A poster made in collaboration with the Federal Art Project</p>
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
        <div style={webBackground}>
          <h1>WEB DESIGN</h1>
          <NavLink to={"/web"}>
            view project <FiChevronRight className="icon" />
          </NavLink>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default GraphicDesign;
