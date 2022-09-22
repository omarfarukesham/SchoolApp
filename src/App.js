import { useEffect } from "react";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Sliders from "./components/Slider/Sliders";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Wave from 'react-wavify';
import Footer from "./components/Shared/Footer";

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="App">

      <h2>This is a School App</h2>
      <p>look mama i can code now</p>
      <Sliders />
      <Contact />
      <Wave fill='#0f172a'
        paused={false}
        options={{
          height: 80,
          amplitude: 30,
          speed: 0.20,
          points: 4
        }}
      />
      <Footer>

      </Footer>
    </div>
  );
}

export default App;
