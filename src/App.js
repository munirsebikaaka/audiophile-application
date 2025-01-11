import AppDesign from "./mainPages/designCartegolies/appDesign";
import GraphicDesign from "./mainPages/designCartegolies/graphicDesign";
import WebDesign from "./mainPages/designCartegolies/webDesign";
import HomePage from "./mainPages/home";
import OurCompony from "./mainPages/sections/ourCompony";

const App = () => {
  return (
    <div>
      <HomePage />
      <WebDesign />
      <AppDesign />
      <GraphicDesign />
      <OurCompony />
    </div>
  );
};
export default App;
