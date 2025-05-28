import logo from '../assets/smdesign-black.webp'
import { Menu,X } from 'lucide-react';
import { useState } from 'react';

const Navbar = ({sections})=> {
    const [burgerMenuOpened,setBurgerMenuOpened] = useState(false)

    const toggleBtn = () => {
        setBurgerMenuOpened(!burgerMenuOpened);
    }

    return (
       <> 
        <nav className="flex flex-row-reverse justify-between px-4 lg:px-16 lg:py-2 ">
            
            <ul className="hidden py-2 lg:flex lg:flex-row lg:gap-4  lg:items-center ">
                {sections.map((section,index)=>{
                   return  <li key={index} className=""><a href="#" className='lg:hover:text-accent lg:active:text-white lg:active:bg-accent lg:active:rounded lg:active:px-6 font-semibold py-2'>{section}</a></li>
                 })
                }
            </ul>

            <button className="lg:hidden" onClick={toggleBtn}>
                {burgerMenuOpened ? <X /> : <Menu />}
            </button>

             
            
            

            <img src={logo} alt="logo SMDesign"  className="lg:w-12 lg:h-12 w-8 h-8"/>
        </nav>
         
         {burgerMenuOpened && 

            (
            <div className='flex flex-col items-center px-4 lg:hidden '>
                <ul>
                    {sections.map((section,index)=>{
                    return  <li key={index} className=""><a href="#" className='hover:text-accent'>{section}</a></li>
                    })
                    }
                </ul> 
            </div>
            )

        }   

        </>
    )
}

export default Navbar;