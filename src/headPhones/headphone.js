import AppNav from "../AppNav";
import Bringing from "../bringing";
import Footer from "../Footer";
import Samples from "../samples";

const HeadPhones = () => {
  return (
    <div>
      <head>
        <AppNav />
        <h1>HEADPHONES</h1>
      </head>
      <section>
        <p>img</p>
        <div>
          <h4>NEW PRODUCTS</h4>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <button>SEE PRODUCTS</button>
        </div>
      </section>

      <section>
        <div>
          <h4>NEW PRODUCTS</h4>
          <h1>XX99 Mark I Headphones</h1>
          <p>
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <button>SEE PRODUCTS</button>
        </div>
        <p>img</p>
      </section>

      <section>
        <p>img</p>
        <div>
          <h1>XX59 HEADPHONES</h1>
          <p>
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <button>SEE PRODUCTS</button>
        </div>
      </section>

      <Samples />
      <Bringing />
      <Footer />
    </div>
  );
};
export default HeadPhones;
