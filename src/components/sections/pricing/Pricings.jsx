import PricingCard from "./PricingCard";
import { starterPack,premiumPack,surMesurePack,classiquePack } from "../../shared/constants";

const Pricings = () => {
    return <section className="bg-white  flex justify-evenly gap-2 lg:px-24  px-4 flex-wrap lg:flex-nowrap ">
        <PricingCard titre={starterPack.titre} description={starterPack.description} prix={starterPack.prix} items={starterPack.items} className="flex-auto" />
        <PricingCard titre={classiquePack.titre} description={classiquePack.description} prix={classiquePack.prix} items={classiquePack.items} className="flex-auto" />
        <PricingCard titre={premiumPack.titre} description={premiumPack.description} prix={premiumPack.prix} items={premiumPack.items} className="flex-auto" />
        <PricingCard titre={surMesurePack.titre} description={surMesurePack.description} prix={surMesurePack.prix} items={surMesurePack.items} className="flex-auto" />
    </section>
}

export default Pricings;