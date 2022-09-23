import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Home } from './components/Pages/Home/Home';
import Navbar from './components/Shared/Navbar';

function App() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div>
      <Navbar/>\
      <Home />
    </div>
  );
}

export default App;
