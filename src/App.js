import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Home } from "./components/Pages/Home/Home";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import Wave from "react-wavify";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Navbar />\
      <Home />
      <Footer />
      <Wave
        fill="#0f172a"
        paused={false}
        options={{
          height: 80,
          amplitude: 30,
          speed: 0.2,
          points: 4,
        }}
      />
    </div>
  );
}

export default App;
