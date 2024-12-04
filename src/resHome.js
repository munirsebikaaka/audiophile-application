import AppNav from "./AppNav";

const ResHello = () => {
  const styles = {
    backgroundImage: `url('appImgs/home-imgs/back2.png')`,
  };
  return (
    <section className=" responsive">
      <AppNav />
      <div style={styles} className="main">
        <div>
          <h4>NEW PRODUCTS</h4>
          <h1>
            XX99 MARK II
            <br /> HEADPHONES
          </h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="see-products">SEE PRODUCTS</button>
        </div>
      </div>
    </section>
  );
};
export default ResHello;
