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
import { useState } from "react";
import Login from "./login";
import Thanks from "./thanks";
import Overlay from "./overlay";

function App() {
  const [addToCarts, setAddToCart] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  return (
    <div className="App">
      {addToCarts || showThanks ? (
        <Overlay addToCarts={setAddToCart} showThanks={setShowThanks} />
      ) : (
        ""
      )}
      {addToCarts ? <AddToCart /> : ""}
      {showThanks ? <Thanks /> : ""}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ears" element={<EarPhones />} />
          <Route
            path="earsEarsDetails"
            element={<EarPhonesDetails setAddToCart={setAddToCart} />}
          />
          <Route path="headPs" element={<HeadPhones />} />
          <Route
            path="headPsFirstDetails"
            element={<HeadPhonesDetails setAddToCart={setAddToCart} />}
          />
          <Route
            path="headPsSecDetails"
            element={<HeadPhonesDetailsTwo setAddToCart={setAddToCart} />}
          />
          <Route
            path="headPsDetail3"
            element={<HeadPhonesDetailsThree setAddToCart={setAddToCart} />}
          />
          <Route path="speakers" element={<Speaker />} />
          <Route
            path="speakersSpDetails"
            element={<SpeakerDetails setAddToCart={setAddToCart} />}
          />
          <Route
            path="speakersSpDetails2"
            element={<SpeakerDetailsTwo setAddToCart={setAddToCart} />}
          />
          <Route
            path="login"
            element={<Login setShowThanks={setShowThanks} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
