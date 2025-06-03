import image1 from "../../assets/images/P1111883.jpg"


const Hero = () => {

    return(
        <header className="flex flex-col gap-4 bg-secondary  h-screen  lg:flex-row-reverse py-8">
           <div className="flex justify-center items-center py-4 lg:w-1/2 max-h-full">
                <img src={image1} alt="hero section image" className="h-auto w-11/12 max-h-full lg:h-3/4 lg:rounded-3xl object-cover"/>
           </div>
       

        
           <div className="px-4 flex flex-col gap-8 lg:w-1/2  lg:text-left lg:px-16 max-h-full pt-[7.5%] pb-[7.5%] lg:gap-12 ">
              <div className="">
                <h1 className="text-3xl font-bold  text-primary text-center lg:text-left lg:text-7xl leading-[1.3]">
                    <span className="text-accent">Transformez</span> l'<span className="text-accent">image</span> de votre restaurant en <span className="text-accent">chiffres d'affaires
                    </span> 
                </h1>
              </div>

              <div className=" text-gray-300 text-base text-center lg:text-left lg:text-xl">
                <p>Des photos alléchantes, des vidéos immersives et des menus pensés sur mesure pour attirer plus de clients… et les fidéliser. 
                Donnez à votre établissement l'image qu’il mérite.</p>
              </div>

              <div className="lg:text-left text-center pt-16 text-primary ">
                <a href="#" className="bg-accent rounded px-8 py-2 hover:bg-hover font-semibold lg:text-xl">Commencer</a>
              </div>

          
        </div>    
        </header>
    
    )

}

export default Hero;