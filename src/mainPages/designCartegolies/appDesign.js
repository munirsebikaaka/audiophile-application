import { FiChevronRight } from "react-icons/fi";
import Footer from "../../generals/footer";
const AppDesign = () => {
  return (
    <main>
      <section>
        <h1>App Design</h1>
        <p>
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips.
        </p>
      </section>
      <section>
        <div>
          <div>
            <img src="imgs/appD/Airfilter.png" alt="card" />

            <div>
              <h1>AIRFILTER</h1>
              <p>
                Solving the problem of poor indoor air quality by filtering the
                air
              </p>
            </div>
          </div>
          <div>
            <img src="imgs/appD/Eyecam.png" alt="card" />

            <div>
              <h1>EYECAM</h1>
              <p>
                Product that lets you edit your favorite photos and videos at
                any time
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src="imgs/appD/Faceit.png" alt="card" />

              <h1>FACEIT</h1>
              <p>
                Get to meet your favorite internet superstar with the faceit app
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h1>TODO</h1>
              <p>
                A todo app that features cloud sync with light and dark mode
              </p>
            </div>
          </div>
          <div>
            <div>
              <h1>LOOPSTUDIOS</h1>
              <p>A VR experience app made for Loopstudios </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1>WEB DESIGN</h1>
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
export default AppDesign;
