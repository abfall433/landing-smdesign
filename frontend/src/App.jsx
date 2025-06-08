import Navbar from "./components/elements/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import Feature from "./components/sections/feature/Feature.jsx";
import Pricings from "./components/sections/pricing/Pricings.jsx";
import { Testimonial21 } from "./components/sections/testimonials/Testimonials2.jsx";
import { Footer } from "./components/elements/Footer.jsx";
import { sections } from "./components/shared/constants.jsx";
import { Gallery } from "./components/sections/Gallery.jsx";



function App() {

  
  return (
    <div className="bg-secondary font-poppins m-0 p-0 flex flex-col justify-between ">
      
    
      <Navbar sections={sections}/>
      <Hero/>
      <Gallery/>
      <Feature/>
      <Pricings/>
      <Testimonial21/>
      <Footer/>
    </div>
  )
}

export default App;


        

