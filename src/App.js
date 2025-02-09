import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppDesign from "./mainPages/designCartegolies/appDesign";
import GraphicDesign from "./mainPages/designCartegolies/graphicDesign";
import WebDesign from "./mainPages/designCartegolies/webDesign";
import HomePage from "./mainPages/home";
import ContactUs from "./mainPages/sections/contactUs";
import Locations from "./mainPages/sections/locations";
import OurCompony from "./mainPages/sections/ourCompony";
import { useState } from "react";

const App = () => {
  const [showLinks, setShowLinks] = useState(false);
  const styles = {
    backgroundImage: `
    linear-gradient(rgb(0 0 0 /35%),rgb(0 0 0 / 35%))
    ,url('imgs/home/back1.png')`,
  };
  const styles1 = {
    backgroundImage: `   
    linear-gradient(rgb(0 0 0 /35%),rgb(0 0 0 / 35%))
    ,url('imgs/home/back2.png')`,
  };
  const styles2 = {
    backgroundImage: `
    linear-gradient(rgb(0 0 0 / 35%),rgb(0 0 0 / 35%))
    ,
    url('imgs/home/back3.jpg')`,
  };
  return (
    <div>
      {!showLinks ? <div className="overly"></div> : ""}

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                appBackground={styles1}
                webBackground={styles}
                graphicBackground={styles2}
                showLinks={showLinks}
                setShowLinks={setShowLinks}
              />
            }
          />
          <Route
            path="ours"
            element={
              <OurCompony showLinks={showLinks} setShowLinks={setShowLinks} />
            }
          />
          <Route
            path="location"
            element={
              <Locations showLinks={showLinks} setShowLinks={setShowLinks} />
            }
          />
          <Route
            path="contact"
            element={
              <ContactUs showLinks={showLinks} setShowLinks={setShowLinks} />
            }
          />
          <Route
            path="app"
            element={
              <AppDesign
                webBackground={styles}
                graphicBackground={styles2}
                showLinks={showLinks}
                setShowLinks={setShowLinks}
              />
            }
          />
          <Route
            path="web"
            element={
              <WebDesign
                graphicBackground={styles2}
                appBackground={styles1}
                showLinks={showLinks}
                setShowLinks={setShowLinks}
              />
            }
          />

          <Route
            path="graphic"
            element={
              <GraphicDesign
                appBackground={styles1}
                webBackground={styles}
                showLinks={showLinks}
                setShowLinks={setShowLinks}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
