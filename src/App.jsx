import "./App.css";
import Header from "./Components/Header";
import Showcase from "./Components/Showcase";
import Feature from "./Components/Feature";

function App() {
  return (
    <div>
      <Header />
      <Showcase />
      <Feature
        icon="Headset"
        title="Better Customer Service"
        description="lorem ipsum dolor sit amet."
      />
      <img src="/vite.svg" alt="" />
      <Feature
        icon="SSS"
        title="Super Secured Service"
        description="lorem ipsum dolor sit amet."
      />
      Hammaga Salom!
    </div>
  );
}

export default App;
