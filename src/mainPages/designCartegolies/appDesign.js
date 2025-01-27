import { FiChevronRight } from "react-icons/fi";
import Footer from "../../generals/footer";
import AppNav from "../navigations/appNavigation";
import { NavLink } from "react-router-dom";
const AppDesign = ({ webBackground, graphicBackground }) => {
  return (
    <main className="design">
      <AppNav />
      <section className="section1">
        <h1>App Design</h1>
        <p>
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips.
        </p>
      </section>
      <section className="section2">
        <div className="main">
          <div>
            <img src="imgs/appD/Airfilter.png" alt="card" />
            <div className="det">
              <h1>AIRFILTER</h1>
              <p>
                Solving the problem of poor indoor air quality by filtering the
                air
              </p>
            </div>
          </div>
          <div>
            <img src="imgs/appD/Eyecam.png" alt="card" />
            <div className="det">
              <h1>EYECAM</h1>
              <p>
                Product that lets you edit your favorite photos and videos at
                any time
              </p>
            </div>
          </div>
          <div>
            <img src="imgs/appD/Faceit.png" alt="card" />
            <div className="det">
              <h1>FACEIT</h1>
              <p>
                Get to meet your favorite internet superstar with the faceit app
              </p>
            </div>
          </div>
        </div>
        <div className="main">
          <div>
            <img src="imgs/appD/Dark.png" alt="card" />
            <div className="det">
              <h1>TODO</h1>
              <p>
                A todo app that features cloud sync with light and dark mode
              </p>
            </div>
          </div>
          <div>
            <img src="imgs/appD/Mobile.png" alt="card" />
            <div className="det">
              <h1>LOOPSTUDIOS</h1>
              <p>A VR experience app made for Loopstudios </p>
            </div>
          </div>
        </div>
      </section>
      <section className="designs-sec">
        <div style={webBackground}>
          <h1>WEB DESIGN</h1>
          <NavLink to={"/web"}>
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
export default AppDesign;
