/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
import { AnimatedCard } from "../../shared/AnimatedCard";

const FeatureCard = ({logo:Logo,titre,description}) => {
    return (
       
        <motion.div
            initial={{ opacity: 0, y: 100 }}  
            whileInView={{opacity:1,y:0}}
            transition={{duration:2}}
            viewport={{once:true}}
            className="flex flex-col justify-evenly gap-2 rounded w-full h-auto bg-boxColor  px-1 lg:px-4  lg:py-2  ">
             <Logo className="w-8 h-8 bg-boxColor text-accent  rounded" />
            <h2 className="font-semibold text-xl font-poppins text-primary lg:text-xl">{titre}</h2>
            <p className="font-poppins text-base lg:text-xl text-gray-200" >{description}</p>
        </motion.div>
        
        
    )
}

export default FeatureCard;