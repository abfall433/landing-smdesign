import { AnimatedCard } from "../../shared/AnimatedCard";
import FeatureCard from "./FeatureCard";
import {Camera,Handshake,Map} from 'lucide-react'


const Feature = () => {
    const descriptions = {
        description1:"Je crée des contenus photo et vidéo pensés pour révéler toute l’authenticité et la qualité de vos plats.",
        description2:"Je travaille à vos côtés pour comprendre votre univers et créer des visuels uniques qui valorisent votre marque.",
        description3:"Mon déplacement en restaurant me permet de créer des visuels plus précis, percutants et adaptés à votre identité."
    }

    const titres = {
        titre1:"Des visuels sur mesure pour sublimer votre cuisine",
        titre2:"Un processus collaboratif pour un impact visuel fort",
        titre3:"Sur place, pour mieux valoriser vos plats"
    }

    return <section className="flex flex-col gap-8 xl:gap-16 mb-32" id="expertise">
        <h1 className="text-primary font-bold text-center text-2xl xl:text-4xl">Mon expertise</h1>
             
            <div className="flex px-8 gap-4 lg:px-16 lg:gap-4  flex-wrap lg:flex-nowrap flex-auto ">
                <FeatureCard className="" logo={Camera} titre= {titres.titre1} description={descriptions.description1}/>
                <FeatureCard className="" logo={Handshake} titre= {titres.titre2} description={descriptions.description2}/>
                <FeatureCard className="" logo={Map} titre= {titres.titre3} description={descriptions.description3}/>
            </div>
    
        
    </section>
}

export default Feature;