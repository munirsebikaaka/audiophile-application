import { FiChevronRight } from "react-icons/fi";
import Footer from "../../generals/footer";
const WebDesign = () => {
  return (
    <main>
      <section>
        <h1>Web Design</h1>
        <p>
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
      </section>
      <section>
        <div>
          <div>
            <img src="imgs/webD/expr.png" alt="card" />
            <div>
              <h1>EXPRESS</h1>
              <p>A multi-carrier shipping website for ecommerce businesses</p>
            </div>
          </div>
          <div>
            <div>
              <h1>TRANSFER</h1>
              <img src="imgs/webD/trans.png" alt="card" />
              <p>
                Site for low-cost money transfers and sending money within
                seconds
              </p>
            </div>
          </div>
          <div>
            <img src="imgs/webD/phot.png" alt="card" />

            <div>
              <h1>PHOTON</h1>
              <p>
                A state-of-the-art music player with high-resolution audio and
                DSP effects
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src="imgs/webD/build.jpg" alt="card" />

            <div>
              <h1>BUILDER</h1>
              <p>
                Connects users with local contractors based on their location
              </p>
            </div>
          </div>
          <div>
            <img src="imgs/webD/blog.png" alt="card" />

            <div>
              <h1>BLOGR</h1>
              <p>
                Blogr is a platform for creating an online blog or publication
              </p>
            </div>
          </div>
          <div>
            <img src="imgs/webD/cam.png" alt="card" />

            <div>
              <h1>CAMP</h1>
              <p>
                Get expert training in coding, data, design, and digital
                marketing
              </p>
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
          <h1>GRAPHIC DESIGN</h1>
          <button>
            view project <FiChevronRight />
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default WebDesign;
