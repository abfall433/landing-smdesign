import { CheckCircle2, X } from "lucide-react";

const PricingCard = ({ titre, prix, description, items }) => {
  return (
    <div className="flex flex-col  gap-4 w-full max-w-sm mx-auto p-6 bg-primary rounded-xl py-2  shadow-lg lg:gap-6">
      <h3 className="text-center font-semibold text-secondary text-lg sm:text-xl lg:text-2xl">
        {titre}
      </h3>

      <p className="text-center  font-thin text-sm sm:text-base text-gray-600">
        {description}
      </p>

      <h2 className="text-center font-bold text-3xl sm:text-4xl text-secondary">
        {titre == "Sur mesure" ? (
          <>{prix}
          </>
          
         ) : (
          <>
          {prix}
        <span className="font-normal text-sm sm:text-base text-gray-600"> €/ mois</span>
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
            <span className="text-gray-800">{item.description}</span>
          </li>
        ))}
      </ul>

      <button className="text-white bg-accent rounded-full px-6 py-2 font-semibold cursor-pointer hover:bg-hover transition-all duration-300 text-sm sm:text-base mt-auto">
        Choisir
      </button>
    </div>
  );
};

export default PricingCard;
