import { NavLink } from "react-router-dom";
import AppNav from "../AppNav";
import Bringing from "../bringing";
import Footer from "../Footer";
import Samples from "../samples";

const Speaker = () => {
  return (
    <div className="speakers">
      <div className="head">
        <AppNav />
        <h1>SPEAKERS</h1>
      </div>

      <section>
        <div className="img-container">
          <img
            className="speaker-img"
            src="appImgs/speaker-imgs/speaker1.png"
            alt="sound speaker"
          />
        </div>
        <div className="about">
          <h4>NEW PRODUCTS</h4>
          <h1>
            ZX9
            <br />
            <span> SPEAKER</span>
          </h1>
          <p>
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <NavLink to={"/speakersSpDetails"} className="speaker-products">
            SEE PRODUCTS
          </NavLink>
        </div>
      </section>

      <section className="sec-section">
        <div className="about">
          <h1>
            ZX7
            <br /> <span> SPEAKER</span>
          </h1>
          <p>
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use.
          </p>
          <NavLink to={"/speakersSpDetails2"} className="speaker-products">
            SEE PRODUCTS
          </NavLink>
        </div>
        <div className="img-container">
          <img
            className="speaker-img"
            src="appImgs/speaker-imgs/speaker2.png"
            alt="product"
          />
        </div>
      </section>

      <Samples />
      <Bringing />
      <Footer />
    </div>
  );
};
export default Speaker;
