import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Home } from './components/Pages/Home/Home';

function App() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
