import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
        <div className='my-12 flex flex-col md:flex-row gap-10'>
            <div className='md:w-1/2 space-y-8'>
                <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                    <img src="logo.png" alt="" className='w-10 inlinie-block items-center'/>
                    <span className='text-white '>ABC-Z</span>
                </a>
                <p className='md:w-1/2'>
                    A simple paragraph compriss of three major components. The first sentence, which is often a declarative sentence, is called the topic sentence
                </p>
                <div>
                    <input type="email" name="email" id="email" placeholder='Enter your email' className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none'/>
                    <input type="submit" value="Subscribe" className='px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all'/>
                </div>
            </div>
            <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>
                        Platform
                    </h4>
                    <ul className='space-y-3'>
                        <a href="/" className='block hover:text-gray-300'>Overview</a>
                        <a href="/" className='block hover:text-gray-300'>Features</a>
                        <a href="/" className='block hover:text-gray-300'>About</a>
                        <a href="/" className='block hover:text-gray-300'>Pricing</a>
                    </ul>
                </div>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>
                        Help
                    </h4>
                    <ul className='space-y-3'>
                        <a href="/" className='block hover:text-gray-300'>How does it work?</a>
                        <a href="/" className='block hover:text-gray-300'>Where to ask questions</a>
                        <a href="/" className='block hover:text-gray-300'>How to pay?</a>
                        <a href="/" className='block hover:text-gray-300'>Requirements</a>
                    </ul>
                </div>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>
                        Contacts
                    </h4>
                    <ul className='space-y-3'>
                        <p className='hover:text-gray-300'>0987665436717</p>
                        <p className='hover:text-gray-300'>123, mnopqrst</p>
                        <p className='hover:text-gray-300'>XYZ colony, GHI city</p>
                        <p className='hover:text-gray-300'>962631</p>
                    </ul>
                </div>
            </div>
        </div>
        <hr />
        <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
            <p>@NehaNaidu 2024 | All Rights Reserved.</p>
            <div className='flex items-center space-x-5'>
                <FaFacebookF className='text-lg cursor-pointer hover:scale-150 transition-all duration-200'/>
                <FaInstagram className='text-lg cursor-pointer hover:scale-150 transition-all duration-200'/>
                <FaLinkedinIn className='text-lg cursor-pointer hover:scale-150 transition-all duration-200'/>
                <FaXTwitter className='text-lg cursor-pointer hover:scale-150 transition-all duration-200'/>
            </div>
        </div>
    </div>
  )
}

export default Footer