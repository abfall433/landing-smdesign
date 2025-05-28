import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import image1 from "../assets/images/P1111883.jpg"
import image2 from "../assets/images/P1122072.jpg"
function App() {


  return (
    <div className="bg-gray-50">
      <Navbar sections={["Accueil","Services","A propos","Contact"]}/>

      <Hero />
    </div>
  )
}

export default App;
