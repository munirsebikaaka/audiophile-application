import DetailsNav from "../AppDetailsNav";
import Bringing from "../bringing";
import Footer from "../Footer";
import Samples from "../samples";

const SpeakerDetails = () => {
  return (
    <div className="pro-details">
      <DetailsNav />
      <section className="sections1">
        <img
          className="img"
          src="appImgs/speaker-imgs/speaker1.png"
          alt="head bart"
        />
        <div>
          <h4>NEW PRODUCTS</h4>
          <h1>ZX9 SPEAKER</h1>
          <p>
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <h3 className="price">$4,500</h3>
          <span>
            <button className="increase">icon 1 icon</button>
            <button className="increase2">ADD TO CART</button>
          </span>
        </div>
      </section>
      <section className="sections2">
        <div>
          <h1>FEATURES</h1>
          <p>
            Connect via Bluetooth or nearly any wired source. This speaker
            features optical, digital coaxial, USB Type-B, stereo RCA, and
            stereo XLR inputs, allowing you to have up to five wired source
            devices connected for easy switching. Improved bluetooth technology
            offers near lossless audio quality at up to 328ft (100m).
          </p>
          <p>
            Discover clear, more natural sounding highs than the competition
            with ZX9’s signature planar diaphragm tweeter. Equally important is
            its powerful room-shaking bass courtesy of a 6.5” aluminum alloy
            bass unit. You’ll be able to enjoy equal sound quality whether in a
            large room or small den. Furthermore, you will experience new
            sensations from old songs since it can respond to even the subtle
            waveforms.
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
              <span>1x</span>33.5mm 10mAudioCable
            </li>
            <li>
              <span>1x</span>10m Optical Cable
            </li>
          </ul>
        </div>
      </section>
      <section className="sections4">
        <div className="small-imgs">
          <img
            src="appImgs/speaker-imgs/Bitmap (6).png"
            alt="face of speaker"
          />
          <img
            src="appImgs/speaker-imgs/Bitmap (7).png"
            alt="face of speaker"
          />
        </div>

        <img
          className="main-img"
          src="appImgs/speaker-imgs/Bitmap (8).png"
          alt="face of speaker"
        />
      </section>
      <section className="sections5">
        <h1 className="head">YOU MAY ALSO LIKE</h1>
        <div className="main">
          <div>
            <img src="appImgs/gens/gen5.png" alt="ear pads" />
            <h1>ZX7 SPEAKER</h1>
            <button className="see-products">SEE PRODUCTS</button>
          </div>
          <div>
            <img src="appImgs/gens/gen4.png" alt="ear pads" />

            <h1>XX99 MARK 1</h1>
            <button className="see-products">SEE PRODUCTS</button>
          </div>
          <div>
            <img src="appImgs/gens/gen2.png" alt="ear pads" />

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
export default SpeakerDetails;
