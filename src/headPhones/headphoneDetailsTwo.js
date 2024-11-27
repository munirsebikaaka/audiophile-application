import AppNav from "../AppNav";
import Samples from "../samples";
import Bringing from "../bringing";
import Footer from "../Footer";

const HeadPhonesDetailsTwo = () => {
  return (
    <div>
      <AppNav />
      <section>
        <p>img</p>
        <div>
          <h4>NEW PRODUCTS</h4>
          <h1>XX99 MARK I HEADPHONES</h1>
          <p>
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <span>$$ 1,750</span>
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
            As the headphones all others are measured against, the XX99 Mark I
            demonstrates over five decades of audio expertise, redefining the
            critical listening experience. This pair of closed-back headphones
            are made of industrial, aerospace-grade materials to emphasize
            durability at a relatively light weight of 11 oz.
          </p>
          <p>
            From the handcrafted microfiber ear cushions to the robust metal
            headband with inner damping element, the components work together to
            deliver comfort and uncompromising sound. Its closed-back design
            delivers up to 27 dB of passive noise cancellation, reducing
            resonance by reflecting sound to a dedicated absorber. For
            connectivity, a specially tuned cable is included with a balanced
            gold connector.
          </p>
        </div>
        <div>
          <h1>IN THE BOX</h1>
          <ul>
            <li>
              <span>1x</span>Headphones Unit
            </li>
            <li>
              <span>2x</span>Replacement Earcups
            </li>
            <li>
              <span>1x</span>User Manual
            </li>
            <li>
              <span>1x</span>33.5mm 5mAudioCable
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
            <h1>XX99 MARK II</h1>
            <button>SEE PRODUCTS</button>
          </div>
          <div>
            <p>img</p>
            <h1>XX59</h1>
            <button>SEE PRODUCTS</button>
          </div>
          <div>
            <p>img</p>
            <h1>ZX9 SPEAKER</h1>
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
export default HeadPhonesDetailsTwo;
