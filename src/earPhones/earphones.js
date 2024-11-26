import AppNav from "../AppNav";
import Bringing from "../bringing";
import Footer from "../Footer";
import Samples from "../samples";

const EarPhones = () => {
  return (
    <div className="earphones">
      <div>
        <AppNav />
        <h1>EARPHONES</h1>
      </div>

      <section>
        <img src="appImgs/earphones-imgs/ear.jpg" alt="image of a pond" />
        <div>
          <h4>NEW PRODUCTS</h4>
          <h1>YX1 WIRELESS EARPHONES</h1>
          <p>
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <button className="see-products">SEE PRODUCTS</button>
        </div>
      </section>

      <Samples />
      <Bringing />
      <Footer />
    </div>
  );
};
export default EarPhones;
