import DetailsNav from "./AppDetailsNav";
import Footer from "./Footer";

const Login = () => {
  return (
    <div>
      <DetailsNav />
      <h1>CHECKOUT</h1>
      <div className="login-cell">
        <div>
          <div className="dets">
            <h1>BILLING DETAILS</h1>
            <div className="inner-dets">
              <div>
                <label>Name</label> <br />
                <input
                  className="login-input"
                  type="text"
                  placeholder="codesmann"
                />
              </div>
              <div>
                <label>Email</label>
                <br />
                <input
                  className="login-input"
                  type="text"
                  placeholder="munirsebikaaka@gmail.com"
                />
              </div>
            </div>
            <label>Phonenumber</label>
            <br />
            <input
              className="login-input"
              type="text"
              placeholder="0742083075"
            />
          </div>
          <div>
            <label>Address</label>
            <br />
            <input
              className="login-input"
              type="text"
              placeholder="1113 Williams Avenue"
            />
            <div>
              <label>ZIP Code</label>
              <br />
              <input className="login-input" type="text" placeholder="10001" />
              <label>City</label>
              <br />
              <input
                className="login-input"
                type="text"
                placeholder="New york"
              />
            </div>
            <label>Country</label>
            <br />
            <input
              className="login-input"
              type="text"
              placeholder="United States"
            />
          </div>
          <div>
            <h1>PAYMENT DETAILS</h1>
            <div>
              <p>Payment details</p>
              <div>
                <label>e-Money Number</label>
                <br />
                <input
                  className="login-input"
                  type="text"
                  placeholder="238521993"
                />
              </div>
            </div>

            <div>
              <div>
                <input type="checkbox" />
                <p>e-Money</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>Cash on Derivery</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>e-MoneyPIN</p>
              </div>
            </div>
          </div>
        </div>
        <div className="summery">
          <div className="cart">
            <h1>SUMMERY</h1>
          </div>

          <div className="sum">
            <div className="inner-cart">
              <img src="appImgs/Group 22.png" alt="pads" />
              <div>
                <h1 className="name">XX99 MK II</h1>
                <p className="price">$2,999</p>
              </div>
            </div>
            <p className="btn">x1 </p>
          </div>
          <div className="sum">
            <div className="inner-cart">
              <img src="appImgs/Group 22 (2).png" alt="pads" />
              <div>
                <h1 className="name">XX59</h1>
                <p className="price">$899</p>
              </div>
            </div>
            <p className="btn"> x2</p>
          </div>
          <div className="sum">
            <div className="inner-cart">
              <img src="appImgs/Group 22 (1).png" alt="pads" />
              <div>
                <h1 className="name">YX1</h1>
                <p className="price">$599</p>
              </div>
            </div>
            <p className="btn">x1</p>
          </div>

          <div className="cart2">
            <h1>TOTAL</h1>
            <p>$5,395</p>
          </div>
          <div className="cart2">
            <h1>SHIPING</h1>
            <p>$50</p>
          </div>
          <div className="cart2">
            <h1>VAT(INCLUDDED)</h1>
            <p>$1,079</p>
          </div>
          <div className="cart2">
            <h1>GRAND TOTAL</h1>
            <p className="grand">$5,446</p>
          </div>
          <button className="see-products">CHECKOUT</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
