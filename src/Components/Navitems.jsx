import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../App.css"

const Navitems = () => {
    
  return (
    <div>
         <ul className='flex gap-5 mr-5'>
          <li className=''>
            <NavLink to='/'
              activeClassName="active"
             className=' bg-blue-600 rounded-md p-2 hover:bg-blue-800 transition duration-200 ease-out hover:ease-in'>
              General
              </NavLink>
          </li>
          <li>
            <NavLink to='/sports' 
            activeClassName="active"
            className='bg-blue-600 rounded-md p-2 hover:bg-blue-800 transition duration-150 ease-out hover:ease-in'> Sports</NavLink>
          </li>
          <li>
            <NavLink to='/technology'
            activeClassName="active"
            className='bg-blue-600 rounded-md p-2 hover:bg-blue-800 transition duration-150 ease-out hover:ease-in'> Technology</NavLink>
          </li>
          <li>
            <NavLink to='/business'
            activeClassName="active"
            className='bg-blue-600 rounded-md p-2 hover:bg-blue-800 transition duration-150 ease-out hover:ease-in'> Business</NavLink>
          </li>
          <li>
            <NavLink to='/entertainment' 
            activeClassName="active"
            className='bg-blue-600 rounded-md p-2 hover:bg-blue-800 transition duration-150 ease-out hover:ease-in'> Entertainment</NavLink>
          </li>
          <li>
            <NavLink to='/health'
            activeClassName="active"
            className='bg-blue-600 rounded-md p-2 hover:bg-blue-800 transition duration-150 ease-out hover:ease-in'> Health</NavLink>
          </li>
          <li>
            <NavLink to='/science'
            activeClassName="active"
            className='bg-blue-600 rounded-md p-2 hover:bg-blue-800 transition duration-150 ease-out hover:ease-in'> Science</NavLink>
          </li>
        </ul>
    </div>
  )
}

export default Navitems