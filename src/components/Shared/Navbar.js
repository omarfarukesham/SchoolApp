import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "../../asset/Logo/LogoMakr-7ahiU1.png"
const Navbar = () => {
      const Navbar=
      <>
                <NavLink to='/home'><li className='p-4'>Home</li></NavLink>
                <ul class="menu menu-horizontal p-0"> 
                <li tabindex="0">
                  
                    <span>Dashboard</span>
                  
                  <ul class="p-4 md:ml-6 ml-20 bg-slate-900 z-30">
                    <NavLink to='/student'><li className=" py-2 m-2">Student</li></NavLink>
                    <NavLink to='/teacher'><li className=" py-2 m-2">Teacher</li></NavLink>
                  </ul>
                </li>
                </ul>
                  <NavLink to='/about'><li className='p-4'>About</li></NavLink>
                  <NavLink to='/contact'><li className='p-4'>Contact</li></NavLink>
                  <NavLink to='/signup'><li className='p-4'>SingUp</li></NavLink>
                  <NavLink to='/login'><li className='p-4'>Login</li></NavLink>
            </>
      const [nav,setNav]=useState(false)
      const handleNav=()=>{
          setNav(!nav)
      }
    return (
        <div>
           <div className='flex justify-between items-center text-left h-24 w-full bg-slate-900 mx-auto px-4 text-white font-poppins'>
            
             <img src={Logo} className="w-24 h-16" alt="" />
              <ul className='hidden md:flex'>
               {Navbar}
               
              </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed z-30 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
     
        {Navbar}
          
      </ul>
    </div> 
        </div>
    );
};

export default Navbar;