import AppNav from "./AppNav";
import Bringing from "./bringing";
import Footer from "./Footer";
import Samples from "./samples";

const Home = () => {
  return (
    <main>
      <head>
        <AppNav />
        <div>
          <div>
            <h4>NEW PRODUCTS</h4>
            <h1>XX99 Mark II Headphones</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button>SEE PRODUCTS</button>
          </div>
          <div>img</div>
        </div>
      </head>

      <Samples />

      <section>
        <p>img</p>
        <div>
          <h1>
            ZX9 <br />
            SPEAKER
          </h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button>SEE PRODUCTS</button>
        </div>
      </section>

      <section>
        <h1>ZX7 SPEAKER</h1>
        <button>SEE PRODUCTS</button>
        <p>img</p>
      </section>

      <section>
        <div>
          <p>img</p>
        </div>
        <div>
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
