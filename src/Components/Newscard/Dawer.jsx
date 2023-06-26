import React from 'react'
import { Link } from 'react-router-dom'

const Dawer = ({setopen}) => {
  return (

        <div className='h-screen w-[120%] bg-[#374151] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]' >
         <ul className='flex flex-col gap-10 p-5'>
          <li className=''>
            <Link to='/' className=' text-white hover:text-blue-500'  onClick={()=> setopen(false)}> General</Link>
          </li>
          <li>
            <Link to='/sports' className=' text-white hover:text-blue-500' onClick={()=> setopen(false)}> Sports</Link>
          </li>
          <li>
            <Link to='/technology'className=' text-white hover:text-blue-500' onClick={()=> setopen(false)}> Technology</Link>
          </li>
          <li>
            <Link to='/business'className=' text-white hover:text-blue-500' onClick={()=> setopen(false)}> Business</Link>
          </li>
          <li>
            <Link to='/entertainment' className=' text-white hover:text-blue-500' onClick={()=> setopen(false)}> Entertainment</Link>
          </li>
          <li>
            <Link to='/health'className=' text-white hover:text-blue-500' onClick={()=> setopen(false)}> Health</Link>
          </li>
          <li>
            <Link to='/science'className=' text-white hover:text-blue-500' onClick={()=> setopen(false)}> Science</Link>
          </li>
        </ul>
    </div>
  )
}

export default Dawer