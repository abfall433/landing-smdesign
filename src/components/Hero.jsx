import image1 from "../assets/images/P1111883.jpg"
import image2 from "../assets/images/P1122072.jpg"

const Hero = () => {

    return(
        <header className="flex flex-col items-center gap-2 px-4 lg:gap-4 lg:py-8 bg-gray-50">
            <h1 className="text-2xl lg:text-4xl font-bold font-poppins text-center my-3">
                <span className="text-accent">Transfomez</span> l’<span className="text-accent">image</span> de votre restaurant en <span className="text-accent">chiffre d'affaires</span>
            </h1>

            <div className="flex w-full gap-4 lg:gap-8 justify-center">
                <div className="">
                    <img src={image1} alt="" className="w-full h-64 lg:h-102 object-contain lg:rounded-lg" ></img>
                </div>

                <div className="">
                    <img src={image2} alt="" className="w-full h-64  lg:h-102 object-contain lg:rounded-lg"></img>
                </div>
            </div>

            <p className="text-sm">Des photos alléchantes, des vidéos immersives et des menus pensés sur mesure pour attirer plus de clients… et les fidéliser. 
                Donnez à votre établissement l'image qu’il mérite.
            </p>

            <button className="text-white text-sm bg-accent rounded px-8 py-1 font-semibold hover:bg-hover hover:cursor-pointer lg:text-base lg:px-6 lg:py-2">Commencer</button>
        </header>
    
    )

}

export default Hero;