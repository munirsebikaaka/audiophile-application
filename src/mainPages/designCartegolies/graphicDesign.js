import { FiChevronRight } from "react-icons/fi";
import Footer from "../../generals/footer";
const GraphicDesign = () => {
  return (
    <main>
      <section>
        <h1>Graphic Design</h1>
        <p>
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </section>
      <section>
        <div>
          <div>
            <div>
              <h1>TIM BROWN</h1>
              <p>A book cover designed for Tim Brown’s new release, ‘Change’</p>
            </div>
          </div>
          <div>
            <div>
              <h1>BOXED WATER</h1>
              <p>A simple packaging concept made for Boxed Water</p>
            </div>
          </div>
          <div>
            <div>
              <h1>SCIENCE!</h1>
              <p>A poster made in collaboration with the Federal Art Project</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1>APP DESIGN</h1>
          <button>
            view project <FiChevronRight />
          </button>
        </div>
        <div>
          <h1>WEB DESIGN</h1>
          <button>
            view project <FiChevronRight />
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default GraphicDesign;
