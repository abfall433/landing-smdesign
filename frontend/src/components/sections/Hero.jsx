/* eslint-disable no-unused-vars */
import image1 from "../../assets/images/P1111883.webp"
import { motion } from "motion/react"

const Hero = () => {
    const duration = 2.3
    return(
        <header className="flex flex-col  lg:flex-row xl:h-screen" id="accueil">
              <div className=" flex flex-col flex-1 gap-4 px-4 lg:gap-9 lg:px-16 lg:min-h-[650px] py-8 lg:py-32 text-center lg:text-left justify-center">
                   <motion.h1 
                      initial={{ opacity: 0, x: -100 }}      
                      animate={{ opacity: 1, x: 0 }}        
                      transition={{ duration: 1.8 }} 
                   className="text-3xl lg:text-5xl xl:text-6xl font-bold font-poppins  text-primary lg:leading-[1.3]">
                      <span className="text-accent">Transfomez</span> l’<span className="text-accent">image</span> de votre restaurant en <span className="text-accent">chiffre d'affaires</span>
                    </motion.h1>

           

                    <motion.p 
                      initial={{ opacity: 0, x: -100 }}      
                      animate={{ opacity: 1, x: 0 }}        
                      transition={{ duration: 1.8 }} 
                    className="text-base lg:text-xl xl:text-2xl font-poppins text-gray-300">Des photos alléchantes, des vidéos immersives et des menus pensés sur mesure pour attirer plus de clients… et les fidéliser. 
                     Donnez à votre établissement l'image qu’il mérite.
                    </motion.p>

                    <div className="lg:mt-8 xl:mt-16">
                        <motion.button 
                          initial={{ opacity: 0, x: -100 }}      
                          animate={{ opacity: 1, x: 0 }}        
                          transition={{ duration: 1.8 }} 
                          className="text-white text-sm  bg-accent rounded-full px-8 py-1 font-semibold hover:bg-hover hover:cursor-pointer lg:text-xl lg:px-6 lg:py-2 ">Commencer</motion.button>
                    </div>
                    
       
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 100 }}      
                animate={{ opacity: 1, x: 0 }}        
                transition={{ duration: 1.8 }} 
              className="flex justify-center items-center py-4 flex-1 ">
                <img src={image1} alt="hero section image" className="w-3/4 h-2/3 object-cover rounded-4xl"/>
              </motion.div>
        </header>
    
    )

}

export default Hero;