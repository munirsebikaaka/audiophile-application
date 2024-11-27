import AppNav from "../AppNav";
import Bringing from "../bringing";
import Footer from "../Footer";
import Samples from "../samples";

const SpeakerDetails = () => {
  return (
    <div>
      <AppNav />
      <section>
        <p>img</p>
        <div>
          <h4>NEW PRODUCTS</h4>
          <h1>ZX9 SPEAKER</h1>
          <p>
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <span>$4,500</span>
          <button>
            <span>icon 1 icon</span>
            <span>add to cart</span>
          </button>
        </div>
      </section>
      <section>
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
        <div>
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
      <section>
        <div>
          <p>img</p>
          <p>img</p>
        </div>
        <p>img</p>
      </section>
      <section>
        <h1>YOU MAY ALSO LIKE</h1>
        <div>
          <div>
            <p>img</p>
            <h1>ZX7 SPEAKER</h1>
            <button>SEE PRODUCTS</button>
          </div>
          <div>
            <p>img</p>
            <h1>XX99 MARK 1</h1>
            <button>SEE PRODUCTS</button>
          </div>
          <div>
            <p>img</p>
            <h1>XX59</h1>
            <button>SEE PRODUCTS</button>
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
