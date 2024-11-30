import AppNav from "./AppNav";
import Bringing from "./bringing";
import Footer from "./Footer";
import Samples from "./samples";

const Home = () => {
  const styles = {
    backgroundImage: `url('appImgs/home-imgs/Bitmap3.jpg')`,
    backgroundSize: "contain",
  };

  return (
    <main>
      <section className="section1">
        <AppNav />
        <div className="main">
          <div>
            <h4>NEW PRODUCTS</h4>
            <h1>XX99 MARK II HEADPHONES</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="see-products">SEE PRODUCTS</button>
          </div>
          <img src="appImgs/home-imgs/Bitmap.png" alt="example of bart sound" />
        </div>
      </section>

      <Samples />

      <section className="section2">
        <img src="appImgs/home-imgs/speaker.png" alt="speaker" />
        <div>
          <h1>
            ZX9 <br />
            SPEAKER
          </h1>

          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="see-products2">SEE PRODUCTS</button>
        </div>
      </section>

      <section className="section3" style={styles}>
        <div>
          <h1>ZX7 SPEAKER</h1>
          <button>SEE PRODUCTS</button>
        </div>
      </section>

      <section className="section4">
        <div>
          <img src="appImgs/home-imgs/Bitmap (1).jpg" alt="ear peaces" />
        </div>
        <div className="details">
          <h1>ZX7 SPEAKER</h1>
          <button>SEE PRODUCTS</button>
        </div>
      </section>
      <Bringing />
      <Footer />
    </main>
  );
};
export default Home;
