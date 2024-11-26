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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ears" element={<EarPhones />} />
          <Route path="ears/earsDetails" element={<EarPhonesDetails />} />
          <Route path="headPs" element={<HeadPhones />} />
          <Route path="headPs/firstDetails" element={<HeadPhonesDetails />} />
          <Route path="headPs/secDetails" element={<HeadPhonesDetailsTwo />} />
          <Route path="headPs/Detail3" element={<HeadPhonesDetailsThree />} />
          <Route path="speakers" element={<Speaker />} />
          <Route path="speakers/spDetails" element={<SpeakerDetails />} />
          <Route path="speakers/spDetails2" element={<SpeakerDetailsTwo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
