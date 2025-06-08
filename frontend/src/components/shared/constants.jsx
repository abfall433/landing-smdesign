import logo1 from "../../assets/logos/ozfood.webp"
import logo2 from "../../assets/logos/smashed.webp"
import logo3 from "../../assets/logos/ozgrill.webp";
import logo4 from "../../assets/logos/homresto.webp";
import logo5 from "../../assets/logos/goldbeef.webp";

export const starterPack = {
    titre: "Starter",
    prix: "590",
    description: "Idéal pour poser les bases et captiver vos clients avec des visuels soignés.",
    items: [
        { include: true, description: "5 photos culinaires professionnelles" },
        { include: true, description: "1 Vidéo courte (15-30 sec)" },
        { include: true, description: "4 posts réseaux sociaux" },
        { include: true, description: "Retouches incluses" },
        { include: true, description: "Formats optimisés pour les réseaux sociaux" },
        { include: true, description: "Conseils basiques pour la mise en avant sur pour les réseaux sociaux" },
        { include: false, description: "2 stories réseaux sociaux par semaine" },
        { include: false, description: "Rapport et analyse de performances" },
        { include: false, description: "Réponses aux commentaires et messages privés" },
    ]

}

export const classiquePack = {
    titre: "Classique",
    prix: "1190",
    description: "Un pack complet pour attirer plus de clients et valoriser votre restaurant.",
    items: [
        { include: true, description: "10 photos culinaires professionnelles" },
        { include: true, description: "2 Vidéos courtes (15-30 sec)" },
        { include: true, description: "4 posts réseaux sociaux" },
        { include: true, description: "Retouches incluses" },
        { include: true, description: "Formats optimisés pour les réseaux sociaux" },
        { include: true, description: "2 stories réseaux sociaux par semaine" },
        { include: true, description: "Conseils avancés pour la mise en avant sur pour les réseaux sociaux" },
        { include: true, description: "Réponses aux commentaires et messages privés" },
        { include: false, description: "Rapport et analyse de performances" },
    ]
};

export const premiumPack = {
    titre: "Premium",
    prix: "2390",
    description: "La solution parfaite pour booster et améliorer votre image et fidéliser vos clients.",
    items: [
        { include: true, description: "20 photos culinaires professionnelles" },
        { include: true, description: "2 Vidéos courtes (~ 15-30 sec)" },
        { include: true, description: "1 Vidéo longue (~ 60 sec)" },
        { include: true, description: "8 posts réseaux sociaux" },
        { include: true, description: "3 stories réseaux sociaux par semaine" },
        { include: true, description: "Retouches incluses" },
        { include: true, description: "Formats optimisés pour les réseaux sociaux" },
        { include: true, description: "Plan stratégique personnalisé et publications professionnelles" },
        { include: true, description: "Réponses aux commentaires et messages privés" },
        { include: true, description: "Mise en avant des abonnés" },
        { include: true, description: "Rapport et analyse de performance" },
    ]
};

export const surMesurePack = {
  titre: "Sur mesure",
  prix: "Tarif perso",
  description: "Des solutions créatives et adaptées pour répondre à vos besoins spécifiques.",
  items: [
    { include: true, description: "Photographie et vidéo personnalisées." },
    { include: true, description: "Conception de campagnes uniques." },
    { include: true, description: "Création de contenus sur demande." },
  ]
};


export const testimonial1 = {
    logo:logo2,
    nomRestaurant:"Smashed",
    temoignage:"“Un rendu incroyable ! Les photos et vidéos subliment nos plats et donnent vraiment envie. Super réactif, à l’écoute et toujours prêt à ajuster pour un résultat parfait. Une collaboration au top, à refaire sans hésiter !”",
    date:"11/2024",
    serviceUtilise:"Sur mesure",
    localisation:"Rouen, France",
    nombreEtoiles:"5"
}

export const testimonial2 = {
    logo:logo1,
    nomRestaurant:"Oz Food",
    temoignage:"“Rien à redire, c’est du haut niveau ! De la prise de brief à la livraison du contenu, tout est fluide et efficace. Nos clients adorent les visuels, et nos réseaux ont gagné en engagement. Une vraie valeur ajoutée !”",
    date:"03/2025",
    serviceUtilise:"Classique",
    localisation:"Rouen, France",
    nombreEtoiles:"5"
}

export const testimonial3 = {
  logo: logo3,
  nomRestaurant: "Oz Grill",
  temoignage: "“Service impeccable ! On sent l’expérience et la passion dans chaque prise de vue. Les retouches sont soignées, et le rendu final dépasse nos attentes. Merci encore, on retravaillera ensemble sans hésiter !”",
  date: "02/2025",
  serviceUtilise: "Classique",
  localisation: "Rouen, France",
  nombreEtoiles: "5"
};


export const testimonial4 = {
  logo: logo4,
  nomRestaurant: "Hom Resto",
  temoignage: "“Un rendu incroyable ! Les photos et vidéos subliment nos plats et donnent vraiment envie. Super réactif, à l’écoute et toujours prêt à ajuster pour un résultat parfait. Une collaboration au top, à refaire sans hésiter !”",
  date: "11/2024",
  serviceUtilise: "Sur mesure",
  localisation: "Rouen, France",
  nombreEtoiles: "5"
};


export const testimonial5 = {
  logo: logo5,
  nomRestaurant: "Gold Beef",
  temoignage: "“Un travail exceptionnel ! Les photos et vidéos mettent parfaitement en valeur nos plats, et le contenu pour les réseaux sociaux a boosté notre visibilité. Toujours à l’écoute et ultra pro, on recommande à 100% !”",
  date: "01/2025",
  serviceUtilise: "Sur mesure",
  localisation: "Rouen, France",
  nombreEtoiles: "5"
};

export const sections = [
  {
    name:"Accueil",
    href:"#accueil"
  },
  {
    name:"Expertise",
    href:"#expertise"
  },
  {
    name:"Tarifs",
    href:"#tarifs"
  },
  {
    name:"Temoignage",
    href:"#temoignage"
  },
  {
    name:"Contact",
    href:"#contact"
  },

]