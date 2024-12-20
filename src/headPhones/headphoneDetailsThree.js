import DetailsNav from "../AppDetailsNav";
import Bringing from "../bringing";
import Footer from "../Footer";
import Samples from "../samples";

const HeadPhonesDetailsThree = ({ setAddToCart }) => {
  return (
    <div className="pro-details">
      <DetailsNav />
      <section className="sections1">
        <div className="img-container">
          <img
            className="img"
            src="appImgs/headphones-imgs/head3.png"
            alt="head bart"
          />
        </div>
        <div className="detail-container">
          <h4>NEW PRODUCTS</h4>
          <h1>
            XX59
            <br />
            <span> HEADPHONES</span>
          </h1>
          <p>
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <h3 className="price">$$ 899</h3>
          <span>
            <button className="increase">icon 1 icon</button>
            <button onClick={() => setAddToCart(true)} className="increase2">
              {" "}
              ADD TO CART
            </button>
          </span>
        </div>
      </section>
      <section className="sections2">
        <div>
          <h1>FEATURES</h1>
          <p>
            These headphones have been created from durable, high-quality
            materials tough enough to take anywhere. Its compact folding design
            fuses comfort and minimalist style making it perfect for travel.
            Flawless transmission is assured by the latest wireless technology
            engineered for audio synchronization with videos.
          </p>
          <p>
            More than a simple pair of headphones, this headset features a pair
            of built-in microphones for clear, hands-free calling when paired
            with a compatible smartphone. Controlling music and calls is also
            intuitive thanks to easy-access touch buttons on the earcups.
            Regardless of how you use the XX59 headphones, you can do so all day
            thanks to an impressive 30-hour battery life that can be rapidly
            recharged via USB-C.
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
          </ul>
        </div>
      </section>
      <section className="sections4">
        <div className="small-imgs">
          <img
            src="appImgs/headphones-imgs/Bitmap (5).png"
            alt="white ear pads"
          />
          <img
            src="appImgs/headphones-imgs/Bitmap (4).png"
            alt="white ear pads"
          />
        </div>
        <img
          className="main-img"
          src="appImgs/headphones-imgs/Bitmap (3).png"
          alt="white ear pads"
        />
      </section>
      <section className="sections5">
        <h1 className="head">YOU MAY ALSO LIKE</h1>
        <div className="main">
          <div>
            <div className="img-container">
              <img src="appImgs/gens/gen5.png" alt="ear pads" />
            </div>
            <h1>XX99 MARK II</h1>
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
export default HeadPhonesDetailsThree;
