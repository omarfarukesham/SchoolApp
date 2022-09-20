import { useEffect } from "react";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Sliders from "./components/Slider/Sliders";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="App">
      <h2>This is a School App</h2>
      <p>look mama i can code now</p>
      {/* <Sliders /> */}
      <Contact />
    </div>
  );
}

export default App;
