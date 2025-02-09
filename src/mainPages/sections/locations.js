import Footer from "../../generals/footer";
import AppNav from "../navigations/appNavigation";

const Locations = ({ showLinks, setShowLinks }) => {
  return (
    <main className="locations">
      <AppNav showLinks={showLinks} setShowLinks={setShowLinks} />
      <section className="section1">
        <div className="dets-cell">
          <div className="details">
            <div>
              <h1>Canada</h1>
              <h3>Designo Central Office</h3>
              <p>3886 Wellington Street?</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className="contact">
              <h3>Contact;</h3>
              <p>P: 256 742083075</p>
              <p>M: munirgmail.com</p>
            </div>
          </div>
        </div>
        <img className="img" src="imgs/lacations/Group1.png" alt="card" />
        <img
          className="location-res-imgs"
          src="imgs/lacations/Group1.png"
          alt="card"
        />
      </section>
      <section className="section2">
        <img className="img" src="imgs/lacations/Group2.png" alt="card" />
        <div className="dets-cell">
          <div className="details">
            <div>
              <h1>Australia</h1>

              <h3>Designo AU Office</h3>
              <p>19 Balonne Street</p>
              <p>New South Wales 2443</p>
            </div>
            <div className="contact">
              <h3>Contact;</h3>
              <p>P: 256 742083075</p>
              <p>M: munir@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section3">
        <div className="dets-cell">
          <div className="details">
            <div>
              <h1>UK</h1>

              <h3>Designo UK Office</h3>
              <p>13 Colorado Way</p>
              <p>Rhyd-y-fro SA8 9GA</p>
            </div>
            <div className="contact">
              <h3>Contact;</h3>
              <p>P: 256 742083075</p>
              <p>M: munir@gmail.com</p>
            </div>
          </div>
        </div>
        <img className="img" src="imgs/lacations/Group3.png" alt="card" />
      </section>
      <Footer />
    </main>
  );
};
export default Locations;
