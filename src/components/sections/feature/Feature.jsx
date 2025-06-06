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

    return <section className="py-16 flex flex-col gap-8 mx-auto bg-white lg:px-8 ">
        <h1 className="text-secondary text-2xl lg:text-4xl font-bold text-center">Mon expertise</h1>
        <div className="flex flex-wrap gap-2 lg:flex lg:flex-nowrap lg:gap-2 mb-4">
            <FeatureCard className="flex-auto " logo={Camera} titre= {titres.titre1} description={descriptions.description1}/>
            <FeatureCard className="flex-auto" logo={Handshake} titre= {titres.titre2} description={descriptions.description2}/>
            <FeatureCard className="flex-auto" logo={Map} titre= {titres.titre3} description={descriptions.description3}/>
        </div>
        
        
    </section>
}

export default Feature;