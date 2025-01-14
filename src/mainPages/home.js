import { FiChevronRight } from "react-icons/fi";
import AppNav from "./navigations/appNavigation";
import Footer from "../generals/footer";

const HomePage = () => {
  const styles = {
    backgroundImage: `url('imgs/home/back1.png')`,
  };
  const styles1 = {
    backgroundImage: `url('imgs/home/back2.png')`,
  };
  const styles2 = {
    backgroundImage: `url('imgs/home/back3.jpg')`,
  };
  return (
    <main className="home">
      <AppNav />
      <section className="section1">
        <div>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button>Learn More</button>
        </div>
        <img src="imgs/home/hero-img.png" alt="phone structure" />
      </section>
      <section className="section2">
        <div className="big" style={styles}>
          <h1>web design </h1>
          <a href="#">
            view project <FiChevronRight />
          </a>
        </div>
        <div>
          <div className="small" style={styles1}>
            <h1>app design </h1>
            <a href="#">
              view project <FiChevronRight />
            </a>
          </div>
          <div className="small" style={styles2}>
            <h1>graphic design </h1>
            <a href="#">
              view project <FiChevronRight />
            </a>
          </div>
        </div>
      </section>
      <section className="section3">
        <div>
          <img src="imgs/home/passion.png" alt="sticker" />
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
