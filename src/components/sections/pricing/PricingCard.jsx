/* eslint-disable no-unused-vars */

import { CheckCircle2, X } from "lucide-react";
import { motion } from "motion/react";
const PricingCard = ({ titre, prix, description, items }) => {
  return (
    <motion.div 
            initial={{ opacity: 0, y: 100 }}  
            whileInView={{opacity:1,y:0}}
            transition={{duration:2}}
            viewport={{once:true}}
            className="flex flex-col  gap-4 w-full max-w-sm  p-6 bg-boxColor rounded-xl py-2  shadow-[0_4px_20px_rgba(242,175,41,0.35)] lg:gap-6 ">
      <h3 className="text-center font-semibold text-gray-400 text-lg sm:text-xl lg:text-2xl">
        {titre}
      </h3>

      <p className="text-center  font-thin text-sm sm:text-base text-gray-400">
        {description}
      </p>

      <h2 className="text-center font-bold text-3xl sm:text-4xl text-gray-300">
        {titre == "Sur mesure" ? (
          <>{prix}
          </>
          
         ) : (
          <>
          {prix}
        <span className="font-normal text-sm sm:text-base text-gray-400"> €/ mois</span>
         </>)}

      </h2>

      <ul className="flex flex-col gap-2 text-sm sm:text-base">
        {items.map((item, key) => (
          <li key={key} className="flex items-start gap-2 text-secondary">
            {item.include ? (
              <CheckCircle2 className="text-accent w-5 h-5 shrink-0 mt-1" />
            ) : (
              <X className="text-red-500 w-5 h-5 shrink-0 mt-1" />
            )}
            <span className="text-gray-400">{item.description}</span>
          </li>
        ))}
      </ul>

      <button className="text-white bg-accent rounded-full px-6 py-2 font-semibold cursor-pointer hover:bg-hover transition-all duration-300 text-sm sm:text-base mt-auto">
        Choisir
      </button>
    </motion.div>
  );
};

export default PricingCard;
