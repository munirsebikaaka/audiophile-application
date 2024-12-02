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
        <img
          className="speaker-img"
          src="appImgs/speaker-imgs/speaker1.png"
          alt="sound speaker"
        />
        <div>
          <h4>NEW PRODUCTS</h4>
          <h1>
            ZX9
            <br /> SPEAKER
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

      <section>
        <div>
          <h1>
            ZX7
            <br /> SPEAKER
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
        <img
          className="speaker-img"
          src="appImgs/speaker-imgs/speaker2.png"
          alt="product"
        />
      </section>

      <Samples />
      <Bringing />
      <Footer />
    </div>
  );
};
export default Speaker;
