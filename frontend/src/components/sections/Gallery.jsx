/* eslint-disable no-unused-vars */
import image1 from "../../assets/images/image1.webp"
import image2 from "../../assets/images/image2.webp"
import image3 from "../../assets/images/image3.webp"
import image4 from "../../assets/images/image4.webp"
import image5 from "../../assets/images/image5.webp"
import Marquee from "react-fast-marquee";



export const Gallery = ()=> {
    const images = [image1,image2,image3,image4,image5]


    return <div className="flex flex-col gap-8 xl:gap-16 mb-32 overflow-x-hidden">
         <h2 className="text-primary font-bold text-center text-2xl xl:text-4xl">Mes dernières réalisations</h2>
         <Marquee
         speed={64}
         pauseOnHover={true}
         className="flex gap-2 " >
            {[...images,...images].map((image,index)=>{
                return <img src={image} key={index} alt="image" className="md:w-[356px] md:h-[256px] w-[164px] h-[164px] rounded object-cover mx-2"></img>
            })}
        </Marquee> 
    </div>
    
   

}