import React from 'react'
import { Link } from 'react-router-dom'

const Navitems = () => {
    
  return (
    <div>
         <ul className='flex gap-5 mr-5'>
          <li className=''>
            <Link to='/' className=' bg-blue-600 rounded-md p-2 hover:bg-blue-800 transition duration-200 ease-out hover:ease-in'> General</Link>
          </li>
          <li>
            <Link to='/sports' className='bg-blue-600 rounded-md p-2 hover:bg-blue-800 transition duration-150 ease-out hover:ease-in'> Sports</Link>
          </li>
          <li>
            <Link to='/technology'className='bg-blue-600 rounded-md p-2 hover:bg-blue-800 transition duration-150 ease-out hover:ease-in'> Technology</Link>
          </li>
          <li>
            <Link to='/business'className='bg-blue-600 rounded-md p-2 hover:bg-blue-800 transition duration-150 ease-out hover:ease-in'> Business</Link>
          </li>
          <li>
            <Link to='/entertainment' className='bg-blue-600 rounded-md p-2 hover:bg-blue-800 transition duration-150 ease-out hover:ease-in'> Entertainment</Link>
          </li>
          <li>
            <Link to='/health'className='bg-blue-600 rounded-md p-2 hover:bg-blue-800 transition duration-150 ease-out hover:ease-in'> Health</Link>
          </li>
          <li>
            <Link to='/science'className='bg-blue-600 rounded-md p-2 hover:bg-blue-800 transition duration-150 ease-out hover:ease-in'> Science</Link>
          </li>
        </ul>
    </div>
  )
}

export default Navitems