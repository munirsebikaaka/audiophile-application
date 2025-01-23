import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppDesign from "./mainPages/designCartegolies/appDesign";
import GraphicDesign from "./mainPages/designCartegolies/graphicDesign";
import WebDesign from "./mainPages/designCartegolies/webDesign";
import HomePage from "./mainPages/home";
import ContactUs from "./mainPages/sections/contactUs";
import Locations from "./mainPages/sections/locations";
import OurCompony from "./mainPages/sections/ourCompony";
// import AppNav from "./mainPages/navigations/appNavigation";

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
      {/* <HomePage
        appBackground={styles1}
        webBackground={styles}
        graphicBackground={styles2}
      />
      <WebDesign graphicBackground={styles2} appBackground={styles1} />
      <AppDesign webBackground={styles} graphicBackground={styles2} />
      <GraphicDesign appBackground={styles1} webBackground={styles} />
      <OurCompony />
      <Locations />
      <ContactUs /> */}
      {/* <AppNav /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                appBackground={styles1}
                webBackground={styles}
                graphicBackground={styles2}
              />
            }
          />
          <Route path="ours" element={<OurCompony />} />
          <Route path="location" element={<Locations />} />
          <Route path="contact" element={<ContactUs />} />
          <Route
            path="app"
            element={
              <AppDesign webBackground={styles} graphicBackground={styles2} />
            }
          />
          <Route
            path="web"
            element={
              <WebDesign graphicBackground={styles2} appBackground={styles1} />
            }
          />

          <Route
            path="graphic"
            element={
              <GraphicDesign appBackground={styles1} webBackground={styles} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
