import Home from "./home";
import AllAboutPhones from "./earPhones/AllAboutEarPhones";
import AllAboutHeadPhones from "./headPhones/allAboutHeadPhones";
import AllAboutSpeaker from "./speakers/allAboutSpeaker";

function App() {
  return (
    <div className="App">
      <Home />
      <AllAboutPhones />
      <AllAboutHeadPhones />
      <AllAboutSpeaker />
    </div>
  );
}

export default App;
