import { FaInstagram,FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white mt-auto px-6 py-10 ">
      <div className=" mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="px-8">
         
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <label htmlFor="nom" className="block mb-1">
                Nom :
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                className="w-full p-2 rounded bg-white text-gray-600"
              />

              <label htmlFor="email" className="">
                Email:
              </label>
              <input 
                type="text"
                id="email"
                name="email"
                className="bg-white w-full rounded p-2 text-gray-600"
              />

              <label htmlFor="services">
                Service souhaité:
              </label>
              <select id="services" name="services" className="p-2 rounded bg-white text-gray-600">
                <option value="starter">Starter</option>
                <option value="classique">Classique</option>
                <option value="premium">Premium</option>
                <option value="surmesure">Sur Mesure</option>
              </select>

              <label htmlFor="message">
                Message:
              </label>
              <textarea name="message" className="w-full h-32 rounded bg-white text-gray-600">

              </textarea>
            </div>
          
            <button
              type="submit"
              className="bg-accent text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
            >
              Envoyer
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-between">
          <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4 text-center">Discutons</h2>
              <p className="text-center text-xl text-gray-500">Que vous ayez une idée de projet, une demande de devis ou une question, je vous réponds rapidement.</p>
          </div>

          <div className="flex justify-center gap-2" >
            <FaInstagram className="text-center w-8 h-8 hover:text-accent cursor-pointer"/>
            <FaWhatsapp className="text-center w-8 h-8 hover:text-accent cursor-pointer"/>
          </div>
          <div>
            <p className="text-sm text-gray-400 text-center mt-auto">© 2025 SMDesign. Tous droits réservés.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};
