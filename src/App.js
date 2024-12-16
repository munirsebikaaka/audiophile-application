import Home from "./home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EarPhones from "./earPhones/earphones";
import EarPhonesDetails from "./earPhones/earPhonesDetails";
import HeadPhones from "./headPhones/headphone";
import HeadPhonesDetails from "./headPhones/headphoneDetails";
import HeadPhonesDetailsThree from "./headPhones/headphoneDetailsThree";
import HeadPhonesDetailsTwo from "./headPhones/headphoneDetailsTwo";
import SpeakerDetails from "./speakers/speakerDetails";
import SpeakerDetailsTwo from "./speakers/speakerDetailsTwo";
import Speaker from "./speakers/speakers";
import AddToCart from "./addToCart";

function App() {
  return (
    <div className="App">
      {/* <AddToCart /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ears" element={<EarPhones />} />
          <Route path="earsEarsDetails" element={<EarPhonesDetails />} />
          <Route path="headPs" element={<HeadPhones />} />
          <Route path="headPsFirstDetails" element={<HeadPhonesDetails />} />
          <Route path="headPsSecDetails" element={<HeadPhonesDetailsTwo />} />
          <Route path="headPsDetail3" element={<HeadPhonesDetailsThree />} />
          <Route path="speakers" element={<Speaker />} />
          <Route path="speakersSpDetails" element={<SpeakerDetails />} />
          <Route path="speakersSpDetails2" element={<SpeakerDetailsTwo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
