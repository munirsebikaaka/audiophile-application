import AppDesign from "./mainPages/designCartegolies/appDesign";
import GraphicDesign from "./mainPages/designCartegolies/graphicDesign";
import WebDesign from "./mainPages/designCartegolies/webDesign";
import HomePage from "./mainPages/home";
import ContactUs from "./mainPages/sections/contactUs";
import Locations from "./mainPages/sections/locations";
import OurCompony from "./mainPages/sections/ourCompony";

const App = () => {
  return (
    <div>
      <HomePage />
      <WebDesign />
      <AppDesign />
      <GraphicDesign />
      <OurCompony />
      <Locations />
      <ContactUs />
    </div>
  );
};
export default App;
