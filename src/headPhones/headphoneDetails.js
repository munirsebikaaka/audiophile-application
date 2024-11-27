import AppNav from "../AppNav";
import Bringing from "../bringing";
import Footer from "../Footer";
import Samples from "../samples";

const HeadPhonesDetails = () => {
  return (
    <div>
      <AppNav />
      <section>
        <p>img</p>
        <div>
          <h4>NEW PRODUCTS</h4>
          <h1>XX99 MARK II HEADPHONES</h1>
          <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <span>$2,999</span>
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
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
          </p>
          <p>
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
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
            <li>
              <span>1x</span>Travel Bag
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
            <h1>XX99 MARK I</h1>
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
export default HeadPhonesDetails;
