import { FiChevronRight } from "react-icons/fi";
import AppNav from "./navigations/appNavigation";
import Footer from "../generals/footer";

const HomePage = () => {
  return (
    <main>
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
        <div>
          <h1>web design </h1>
          <button>
            view project <FiChevronRight />
          </button>
        </div>
        <div>
          <div>
            <h1>app design </h1>
            <button>
              view project <FiChevronRight />
            </button>
          </div>
          <div>
            <h1>graphic design </h1>
            <button>
              view project <FiChevronRight />
            </button>
          </div>
        </div>
      </section>
      <section className="section3">
        <div>
          <h1>PASSIONATE</h1>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
        <div>
          <h1>RESOURCEFUL</h1>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
        <div>
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
