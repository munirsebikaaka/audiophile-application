import DetailsNav from "../AppDetailsNav";
import Bringing from "../bringing";
import Footer from "../Footer";
import Samples from "../samples";

const HeadPhonesDetails = ({ setAddToCart }) => {
  return (
    <div className="pro-details">
      <DetailsNav />
      <section className="sections1">
        <div className="img-container">
          <img
            className="img"
            src="appImgs/headphones-imgs/head2.png"
            alt="head bart"
          />
        </div>
        <div className="detail-container">
          <h4>NEW PRODUCTS</h4>
          <h1>XX99 MARK II HEADPHONES</h1>
          <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <h3 className="price">$ 2,999</h3>
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
        <div className="bonus">
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
      <section className="sections4">
        <div className="small-imgs">
          <img src="appImgs/headphones-imgs/Bitmap (2).jpg" alt="headphone" />
          <img src="appImgs/headphones-imgs/Bitmap (1).jpg" alt="headphone" />
        </div>
        <img
          className="main-img"
          src="appImgs/headphones-imgs/Bitmap.jpg"
          alt="headphone"
        />
      </section>
      <section className="sections5">
        <h1 className="head">YOU MAY ALSO LIKE</h1>
        <div className="main">
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
          <div>
            <div className="img-container">
              <img src="appImgs/gens/gen3.png" alt="ear pads" />
            </div>
            <h1>ZX9 SPEAKER</h1>
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
export default HeadPhonesDetails;
