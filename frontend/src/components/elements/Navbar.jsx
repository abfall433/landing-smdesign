import logo from '../../assets/logos/smdesign-black.webp'
import { Menu,X } from 'lucide-react';
import { useState } from 'react';


const Navbar = ({sections})=> {
    const [burgerMenuOpened,setBurgerMenuOpened] = useState(false)

    const toggleBtn = () => {
        setBurgerMenuOpened(!burgerMenuOpened);
    }

    return (
       <> 
        <nav className="flex flex-row-reverse justify-between px-4 lg:px-16 lg:py-2 bg-primary sticky top-0 z-50">
            
            <ul className="hidden py-2 lg:flex lg:flex-row lg:gap-4  lg:items-center ">
                {sections.map((section,index)=>{
                   return  <li key={index} className=""><a href={section.href} className='lg:hover:text-accent lg:active:text-white lg:active:bg-accent lg:active:rounded-full lg:active:px-6 font-semibold py-2'>{section.name}</a></li>
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
            <div className='flex flex-col items-center px-8 lg:hidden bg-accent  rounded text-primary m-6 sticky top-12 z-50   '>
                <ul className='flex flex-col gap-4 py-4'>
                    {sections.map((section,index)=>{
                    return  <li key={index} className=""><a href={section.href} className=''>{section.name}</a></li>
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