import React from 'react'
import { Link } from 'react-router-dom'

const Dawer = () => {
  return (

        <div className='h-screen w-[120%] bg-black ' >
         <ul className='flex flex-col gap-10 p-5'>
          <li className=''>
            <Link to='/' className=' text-white hover:text-blue-500'> General</Link>
          </li>
          <li>
            <Link to='/sports' className=' text-white hover:text-blue-500'> Sports</Link>
          </li>
          <li>
            <Link to='/technology'className=' text-white hover:text-blue-500'> Technology</Link>
          </li>
          <li>
            <Link to='/business'className=' text-white hover:text-blue-500'> Business</Link>
          </li>
          <li>
            <Link to='/entertainment' className=' text-white hover:text-blue-500'> Entertainment</Link>
          </li>
          <li>
            <Link to='/health'className=' text-white hover:text-blue-500'> Health</Link>
          </li>
          <li>
            <Link to='/science'className=' text-white hover:text-blue-500'> Science</Link>
          </li>
        </ul>
    </div>
  )
}

export default Dawer