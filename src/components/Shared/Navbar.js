import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navbar = () => {
   
      const [nav,setNav]=useState(false)
      const handleNav=()=>{
          setNav(!nav)
      }
    return (
        <div>
           <div className='flex justify-between items-center text-left h-24 w-full bg-slate-900 mx-auto px-4 text-white'>
             <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Logo</h1>
              <ul className='hidden md:flex'>
                <NavLink to='/home'><li className='p-4'>Home</li></NavLink>
                <ul class="menu menu-horizontal p-0"> 
                <li tabindex="0">
                  <a>
                    <span>Dashboard</span>
                  </a>
                  <ul class="p-2 bg-slate-900 z-30">
                    <NavLink to='/student'><li className="border-b border-gray-500 py-2 m-2">Student</li></NavLink>
                    <NavLink to='/teacher'><li className="border-b border-gray-500 py-2 m-2">Teacher</li></NavLink>
              
                  </ul>
                </li>
                </ul>
                  <NavLink to='/about'><li className='p-4'>About</li></NavLink>
                  <NavLink to='/contact'><li className='p-4'>Contact</li></NavLink>
                  <NavLink to='/signup'><li className='p-4'>SingUp</li></NavLink>
                  <NavLink to='/login'><li className='p-4'>Login</li></NavLink>
               
              </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed z-30 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 text-left'>Blogs Project</h1>
          <li className='p-4 border-b border-gray-600 '>Home</li>
          <ul class="menu menu-horizontal p-0">
        <li tabindex="0">
          <a>
            <span>Blogs</span>
          
          </a>
          <ul class="p-2 bg-slate-900">
            <li className="border-b border-gray-500 py-2 m-2">Post Blogs</li>
            <li className="border-b border-gray-500 py-2 m-2">My Blogs</li>
            <li  className="border-b border-gray-600 py-2 m-2">Add Reviews</li>
          </ul>
        </li>
        </ul>
          <li className='p-4 border-b border-gray-600'>My Blogs</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
          
      </ul>
    </div> 
        </div>
    );
};

export default Navbar;