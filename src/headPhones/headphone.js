import AppNav from "../AppNav";
import Bringing from "../bringing";
import Footer from "../Footer";
import Samples from "../samples";
import { NavLink } from "react-router-dom";

const HeadPhones = () => {
  return (
    <div className="headphones">
      <div className="head">
        <AppNav />
        <h1>HEADPHONES</h1>
      </div>
      <section>
        <img
          className="img"
          src="appImgs/headphones-imgs/head2.png"
          alt="headphone barts"
        />
        <div>
          <h4>NEW PRODUCTS</h4>
          <h1>
            XX99 MARK II
            <br /> HEADPHONES
          </h1>
          <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <NavLink to={"/headPsFirstDetails"} className="head-products">
            SEE PRODUCTS
          </NavLink>
        </div>
      </section>

      <section>
        <div>
          <h1>
            XX99 MARK I<br /> HEADPHONES
          </h1>
          <p>
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <NavLink to={"/headPsSecDetails"} className="head-products">
            SEE PRODUCTS
          </NavLink>
        </div>
        <img
          className="img"
          src="appImgs/headphones-imgs/head1.png"
          alt="headphone barts"
        />
      </section>

      <section>
        <img
          className="img"
          src="appImgs/headphones-imgs/head3.png"
          alt="headphone barts"
        />
        <div>
          <h1>
            XX59
            <br /> HEADPHONES
          </h1>
          <p>
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <NavLink to={"/headPsDetail3"} className="head-products">
            SEE PRODUCTS
          </NavLink>
        </div>
      </section>

      <Samples />
      <Bringing />
      <Footer />
    </div>
  );
};
export default HeadPhones;
