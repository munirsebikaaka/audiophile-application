import Home from "./home";
import AllAboutPhones from "./earPhones/AllAboutEarPhones";
import AllAboutHeadPhones from "./headPhones/allAboutHeadPhones";
import AllAboutSpeaker from "./speakers/allAboutSpeaker";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="earphones" element={<AllAboutPhones />} />
          <Route path="headphones" element={<AllAboutHeadPhones />} />
          <Route path="speakers" element={<AllAboutSpeaker />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
