import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navitems from './Navitems';
import {GiHamburgerMenu} from "react-icons/gi";
import Dawer from './Newscard/Dawer';
import ".././App.css"

const Navbar = () => {
 
  
  const [open,setopen]=useState(false);
  
   const toggle = () =>{
    setopen( (prev)=> !prev)

  }


  return (
    <div className=''>

    <div className={open ? "display absolute top-[80px]":"nodisplay"}>
            <Dawer setopen={setopen}/>
        </div>

     

    <div className='bg-gray-800 p-2 text-white mb-5  '>
      
      <div className='flex justify-between mt-5 mb-3 '>

        <Link to='/' className=' text-5xl ml-5 text-blue-500 logo'>News App</Link>
      
        
          <div className='nav'>
          <Navitems />

          </div>
        <GiHamburgerMenu onClick={toggle} className='hamburger'/>

        
      </div>


    </div>
    </div>
    
  )
}

export default Navbar;