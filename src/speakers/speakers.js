import AppNav from "../AppNav";
import Bringing from "../bringing";
import Footer from "../Footer";
import Samples from "../samples";

const Speaker = () => {
  return (
    <div>
      <head>
        <AppNav />
        <h1>SPEAKERS</h1>
      </head>

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
          <button>SEE PRODUCTS</button>
        </div>
      </section>

      <section>
        <div>
          <h1>ZX7 SPEAKER</h1>
          <p>
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use.
          </p>
          <button>SEE PRODUCTS</button>
        </div>
        <p>img</p>
      </section>

      <Samples />
      <Bringing />
      <Footer />
    </div>
  );
};
export default Speaker;
