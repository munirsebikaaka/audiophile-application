import DetailsNav from "../AppDetailsNav";
import Bringing from "../bringing";
import Footer from "../Footer";
import Samples from "../samples";

const SpeakerDetailsTwo = ({ setAddToCart }) => {
  return (
    <div className="pro-details">
      <DetailsNav />
      <section className="sections1">
        <div className="img-container">
          <img
            className="img"
            src="appImgs/speaker-imgs/speaker2.png"
            alt="head bart"
          />
        </div>
        <div className="detail-container">
          <h4>NEW PRODUCTS</h4>
          <h1>ZX7 SPEAKER</h1>
          <p>
            Stream high quality sound wirelessly with minimal to no loss. The
            ZX7 speaker uses high-end audiophile components that represents the
            top of the line powered speakers for home or studio use.
          </p>
          <h3 className="price">$3,500</h3>
          <span>
            <button className="increase">icon 1 icon</button>
            <button onClick={() => setAddToCart(true)} className="increase2">
              ADD TO CART
            </button>
          </span>
        </div>
      </section>
      <section className="sections2">
        <div>
          <h1>FEATURES</h1>
          <p>
            Reap the advantages of a flat diaphragm tweeter cone. This provides
            a fast response rate and excellent high frequencies that lower
            tiered bookshelf speakers cannot provide. The woofers are made from
            aluminum that produces a unique and clear sound. XLR inputs allow
            you to connect to a mixer for more advanced usage.
          </p>
          <p>
            The ZX7 speaker is the perfect blend of stylish design and high
            performance. It houses an encased MDF wooden enclosure which
            minimises acoustic resonance. Dual connectivity allows pairing
            through bluetooth or traditional optical and RCA input. Switch input
            sources and control volume at your finger tips with the included
            wireless remote. This versatile speaker is equipped to deliver an
            authentic listening experience.
          </p>
        </div>
        <div className="bonus">
          <h1>IN THE BOX</h1>

          <ul>
            <li>
              <span>1x</span>Speaker Unit
            </li>
            <li>
              <span>2x</span>Speaker Cloth Panel
            </li>
            <li>
              <span>1x</span>User Manual
            </li>
            <li>
              <span>1x</span>3.5mm 7.5m Audio Cable
            </li>
            <li>
              <span>1x</span>7.5m Optical Cable
            </li>
          </ul>
        </div>
      </section>
      <section className="sections4">
        <div className="small-imgs">
          <img src="appImgs/speaker-imgs/Bitmap.png" alt="speaker" />
          <img src="appImgs/speaker-imgs/Bitmap (1).png" alt="speaker" />
        </div>
        <img
          className="main-img"
          src="appImgs/speaker-imgs/Bitmap (3).png"
          alt="speaker"
        />
      </section>
      <section className="sections5">
        <h1 className="head">YOU MAY ALSO LIKE</h1>
        <div className="main">
          <div>
            <div className="img-container">
              <img src="appImgs/gens/gen3.png" alt="ear pads" />
            </div>

            <h1>ZX9 SPEAKER</h1>
            <button className="see-products">SEE PRODUCTS</button>
          </div>
          <div>
            <div className="img-container">
              <img src="appImgs/gens/gen4.png" alt="ear pads" />
            </div>

            <h1>XX99 MARK 1</h1>
            <button className="see-products">SEE PRODUCTS</button>
          </div>
          <div>
            <div className="img-container">
              <img src="appImgs/gens/gen2.png" alt="ear pads" />
            </div>
            <h1>XX59</h1>
            <button className="see-products">SEE PRODUCTS</button>
          </div>
        </div>
      </section>
      <Samples />
      <Bringing />
      <Footer />
    </div>
  );
};
export default SpeakerDetailsTwo;
