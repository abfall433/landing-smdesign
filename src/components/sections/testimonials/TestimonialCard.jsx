import { Star } from "lucide-react";

export const TestimonialCard = ({logo,nomRestaurant,temoignage,date,serviceUtilise,localisation}) => {
    return <div className="flex flex-col py-4 px-4 justify-between gap-1 bg-primary rounded-2xl xl:min-w-[33%] min-w-[50%] ">

        <div className="" >
            <img src={logo} alt="Logo Restaurant" className="w-24 h-24 rounded-full"></img>
        </div>

        <h2 className="font-bold text-secondary">{nomRestaurant}</h2>

        <p className="text-gray-600">{temoignage}</p>

        <p className="text center text-gray-300">{date}</p>

        <p className="text-gray-400">Service utilise: {serviceUtilise}</p>

        <p className="text-gray-500">{localisation}</p>

        <div className="flex text-center mt-auto text-accent"><Star className="fill-current text-yellow-300"/> <Star className="fill-current text-yellow-300"/> 
        <Star className="fill-current text-yellow-300"/> <Star className="fill-current text-yellow-300"/> <Star className="fill-current text-yellow-300"/></div>

    </div>
};