/* eslint-disable no-unused-vars */

import { motion } from "motion/react"



export const AnimatedCard = ({children})=> {
    

    return <motion.div 
        initial={{ opacity: 0, y: 100 }}  
        whileInView={{opacity:1,y:0}}
        transition={{duration:2}}
        viewport={{once:true}}
        >
            {children}
    </motion.div>

}