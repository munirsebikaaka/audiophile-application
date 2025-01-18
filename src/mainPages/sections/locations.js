import Footer from "../../generals/footer";
import AppNav from "../navigations/appNavigation";

const Locations = () => {
  return (
    <main className="locations">
      <AppNav />
      <section>
        <div>
          <h1>Canada</h1>
          <div className="details">
            <div>
              <h3>Designo Central Office</h3>
              <p>3886 Wellington Street?</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div>
              <h3>Contact;</h3>
              <p>P: 256 742083075</p>
              <p>M: munirsebikaaka@gmail.com</p>
            </div>
          </div>
        </div>
        <img src="imgs/lacations/Group1.png" alt="card" />
      </section>
      <section>
        <img src="imgs/lacations/Group2.png" alt="card" />
        <div>
          <h1>Australia</h1>
          <div className="details">
            <div>
              <h3>Designo AU Office</h3>
              <p>19 Balonne Street</p>
              <p>New South Wales 2443</p>
            </div>
            <div>
              <h3>Contact;</h3>
              <p>P: 256 742083075</p>
              <p>M: munirsebikaaka@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h1>United Kingdom</h1>
          <div className="details">
            <div>
              <h3>Designo UK Office</h3>
              <p>13 Colorado Way</p>
              <p>Rhyd-y-fro SA8 9GA</p>
            </div>
            <div>
              <h3>Contact;</h3>
              <p>P: 256 742083075</p>
              <p>M: munirsebikaaka@gmail.com</p>
            </div>
          </div>
        </div>
        <img src="imgs/lacations/Group3.png" alt="card" />
      </section>
      <Footer />
    </main>
  );
};
export default Locations;
