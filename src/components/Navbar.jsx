import React, { useState } from 'react'
import { GrLanguage } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from 'react-scroll';


const Navbar = () => {

    const[bars,setBars]=useState(false);
    const toggleNavbar=()=>{
        setBars(!bars);
    }

    const navItems=[
        {link:"Overview", path:"home"},
        {link:"Features", path:"features"},
        {link:"About", path:"about"},
        {link:"Pricing", path:"pricing"}
    ]

  return (
    <>
        <nav className='fixed top-0 right-0 left-0 bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary'>
            <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                <div className='flex space-x-14 items-center'>
                    <a href="#" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                        <img src="logo.png" alt="logo" className='w-10 inlone-block items-center' />
                        <span>ABC-Z</span>
                    </a>
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({link,path})=>(
                            <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-gray-300 cursor-pointer
                        '>{link}</Link>
                        ))}
                    </ul>
                </div>
                <div className='space-x-12 hidden md:flex items-center'>
                    <a href="/" className='hidden lg:flex items-center hover:text-secondary'><GrLanguage className='mr-2'/>Language</a>
                    <button className='bg-gradient-to-r from-blue-500 to-orange-400 py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Sign up</button>
                </div>
                <div className='md:hidden'>
                        <button onClick={toggleNavbar} className=' text-white focus-outline-none focus-text-gray-300'>
                            {bars ? <IoCloseSharp className='w-6 h-6 text-primary'/> : <FaBars className='w-6 h-6 text-primary'/> }
                        </button>
                </div>
            </div>
        </nav>
        <div className={`space-y-4 text-lg px-4 pt-24 pb-5 bg-secondary ${bars ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
            {navItems.map(({link,path})=>(
                <Link activeClass='active' spy={true} smooth={true} offset={-80} key={link} to={path} className='block text-white  hover:text-gray-300' onClick={toggleNavbar}>{link}</Link>
            ))}
        </div>
    </>
  )
}

export default Navbar