import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Dawer = ({setopen}) => {
  return (

        <div className='h-screen w-[120%] bg-[#374151] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]' >
         <ul className='flex flex-col gap-10 p-5'>
          <li className=''>
            <NavLink
            activeClassName="active-drawer"
             to='/' className=' text-white hover:text-blue-500'  onClick={()=> setopen(false)}> General</NavLink>
          </li>
          <li>
            <NavLink
            activeClassName="active-drawer"
             to='/sports' className=' text-white hover:text-blue-500' onClick={()=> setopen(false)}> Sports</NavLink>
          </li>
          <li>
            <NavLink
            activeClassName="active-drawer"
             to='/technology'className=' text-white hover:text-blue-500' onClick={()=> setopen(false)}> Technology</NavLink>
          </li>
          <li>
            <NavLink
            activeClassName="active-drawer"
             to='/business'className=' text-white hover:text-blue-500' onClick={()=> setopen(false)}> Business</NavLink>
          </li>
          <li>
            <NavLink
            activeClassName="active-drawer"
             to='/entertainment' className=' text-white hover:text-blue-500' onClick={()=> setopen(false)}> Entertainment </NavLink>
          </li>
          <li>
            <NavLink
            activeClassName="active-drawer"
             to='/health'className=' text-white hover:text-blue-500' onClick={()=> setopen(false)}> Health</NavLink>
          </li>
          <li>
            <NavLink
            activeClassName="active-drawer"
             to='/science'className=' text-white hover:text-blue-500' onClick={()=> setopen(false)}> Science</NavLink>
          </li>
        </ul>
    </div>
  )
}

export default Dawer