import Navbar from "./components/elements/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import Feature from "./components/sections/feature/Feature.jsx";
import Pricings from "./components/sections/pricing/Pricings.jsx";
import { Testimonials } from "./components/sections/testimonials/Testimonials.jsx";

function App() {


  return (
    <div className="bg-gray-50 font-poppins m-0 p-0 ">
      <Navbar sections={["Accueil","Services","A propos","Contact"]}/>

      <Hero />

      <Feature/>

      <Pricings />

      <Testimonials />
      
    </div>
  )
}

export default App;
