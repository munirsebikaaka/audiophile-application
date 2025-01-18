import { FiChevronRight } from "react-icons/fi";
import AppNav from "./navigations/appNavigation";
import Footer from "../generals/footer";

const HomePage = ({ appBackground, webBackground, graphicBackground }) => {
  return (
    <main className="home">
      <AppNav />
      <section className="section1">
        <div className="content">
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button>Learn More</button>
        </div>
        <div className=" img-cell">
          <img src="imgs/home/hero-img.png" alt="phone structure" />
        </div>
      </section>
      <section className="section2">
        <div className="big" style={webBackground}>
          <h1>web design </h1>
          <a href="#">
            view project <FiChevronRight className="icon" />
          </a>
        </div>
        <div className="smalls">
          <div className="small" style={appBackground}>
            <h1>app design </h1>
            <a href="#">
              view project <FiChevronRight className="icon" />
            </a>
          </div>
          <div className="small" style={graphicBackground}>
            <h1>graphic design </h1>
            <a href="#">
              view project <FiChevronRight className="icon" />
            </a>
          </div>
        </div>
      </section>
      <section className="section3">
        <div>
          <div className="container">
            <img src="imgs/home/passion.png" alt="sticker" />
          </div>
          <h1>PASSIONATE</h1>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
        <div>
          <img src="imgs/home/resource.png" alt="sticker" />
          <h1>RESOURCEFUL</h1>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
        <div>
          <img src="imgs/home/freindly.png" alt="sticker" />

          <h1>FRIENDLY</h1>
          <p>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default HomePage;
