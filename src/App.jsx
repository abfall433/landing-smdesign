import Navbar from "./components/elements/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import Feature from "./components/sections/feature/Feature.jsx";
import Pricings from "./components/sections/pricing/Pricings.jsx";
import { Testimonials } from "./components/sections/testimonials/Testimonials.jsx";
import { Footer } from "./components/elements/Footer.jsx";

function App() {


  return (
    <div className="bg-secondary font-poppins m-0 p-0 flex flex-col justify-between ">
      
     <div className="xl:h-screen">
      <Navbar sections={["Accueil","Services","A propos","Contact"]}/>
      <Hero/>
     </div>
      
      <Feature/>
      
      
    </div>
  )
}

export default App;
