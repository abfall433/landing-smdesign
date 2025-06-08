import { TestimonialCard } from "./TestimonialCard";
import { testimonial1,testimonial2,testimonial3,testimonial4,testimonial5 } from "../../shared/constants";


export const Testimonials = () => {
    return <section className=" m-2 lg:m-32 p-4 bg-white  ">
        <h2 className="text-center font-bold my-4 text-2xl">Ils m'ont fait confiance</h2>
       
            <div className="flex gap-2 overflow-x-auto w-full">
                <TestimonialCard logo={testimonial1.logo} nomRestaurant={testimonial1.nomRestaurant} temoignage={testimonial1.temoignage} date={testimonial1.date} serviceUtilise={testimonial1.serviceUtilise} localisation={testimonial1.localisation} />
                <TestimonialCard  logo={testimonial2.logo} nomRestaurant={testimonial2.nomRestaurant} temoignage={testimonial2.temoignage} date={testimonial2.date} serviceUtilise={testimonial2.serviceUtilise} localisation={testimonial2.localisation}/>
                <TestimonialCard  logo={testimonial3.logo} nomRestaurant={testimonial3.nomRestaurant} temoignage={testimonial3.temoignage} date={testimonial3.date} serviceUtilise={testimonial3.serviceUtilise} localisation={testimonial3.localisation}/>
                <TestimonialCard  logo={testimonial4.logo} nomRestaurant={testimonial4.nomRestaurant} temoignage={testimonial4.temoignage} date={testimonial4.date} serviceUtilise={testimonial4.serviceUtilise} localisation={testimonial4.localisation}/>
                <TestimonialCard  logo={testimonial5.logo} nomRestaurant={testimonial5.nomRestaurant} temoignage={testimonial5.temoignage} date={testimonial5.date} serviceUtilise={testimonial5.serviceUtilise} localisation={testimonial5.localisation}/>
            </div> 
            
        
        
    </section>
};