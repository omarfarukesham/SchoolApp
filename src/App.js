import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Home } from "./components/Pages/Home/Home";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import Wave from "react-wavify";
import { Routes, Route, Link } from "react-router-dom"
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home/>}/>
      </Routes>
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
