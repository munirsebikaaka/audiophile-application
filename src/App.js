import AppDesign from "./mainPages/designCartegolies/appDesign";
import GraphicDesign from "./mainPages/designCartegolies/graphicDesign";
import WebDesign from "./mainPages/designCartegolies/webDesign";
import HomePage from "./mainPages/home";
import ContactUs from "./mainPages/sections/contactUs";
import Locations from "./mainPages/sections/locations";
import OurCompony from "./mainPages/sections/ourCompony";

const App = () => {
  const styles = {
    backgroundImage: `url('imgs/home/back1.png')`,
    // backgroundImage: ` linearGradient(#000000)`,
  };
  const styles1 = {
    backgroundImage: `url('imgs/home/back2.png')`,
  };
  const styles2 = {
    backgroundImage: `url('imgs/home/back3.jpg')`,
  };
  return (
    <div>
      <HomePage
        appBackground={styles1}
        webBackground={styles}
        graphicBackground={styles2}
      />
      <WebDesign graphicBackground={styles2} appBackground={styles1} />
      <AppDesign webBackground={styles} graphicBackground={styles2} />
      <GraphicDesign appBackground={styles1} webBackground={styles} />
      <OurCompony />
      <Locations />
      <ContactUs />
    </div>
  );
};
export default App;
