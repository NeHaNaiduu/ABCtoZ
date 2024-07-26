import React, { useState } from 'react'
import { AiFillCaretRight } from "react-icons/ai";
import {motion} from 'framer-motion';
import {fadeIn} from '../shared/anim'

const Pricing = () => {

    const[yearly,setYearly]=useState(false)
    const packages=[
        {name:"Start",monthlyPrice:"19", yearlyPrice:"299", description:"lorem ctetur adipisicing elit. Officiis, provident saepe. Deserunt odit commodi officiis delenit"
        },
        {name:"Advance",monthlyPrice:"39", yearlyPrice:"399", description:"lorem ctetur adipisicing elit. Officiis, provident saepe. Deserunt odit commodi officiis delenit"
        },
        {name:"Pro",monthlyPrice:"59", yearlyPrice:"599", description:"lorem ctetur adipisicing elit. Officiis, provident saepe. Deserunt odit commodi officiis delenit"
        }
    ]

  return (
    <div id='pricing' className='md:px-14 p-4 max-w-s mx-auto py-10'>
        <div className='text-center'>
            <h2 className='md:text-5xl text-3xl font-extrabold text-primary mb-2'>Plans for you :</h2>
            <p className='text-tertiary md:w-1/2 mx-auto px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, provident saepe. Deserunt odit commodi officiis delenit</p>
            <div className='mt-16'>
                <label htmlFor="toggle" className='inline-flex items-center cursor-pointer'>
                    <span className='mr-8 text-2xl font-semibold'>Monthly</span>
                    <div className='w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out'>
                        <div className={`w-6 h-6 rounded-full ${yearly ? "bg-primary ml-8" : "bg-gray-500"}`}>

                        </div>
                    </div>
                    <span className='ml-8 text-2xl font-semibold'>Yearly</span>
                </label>
                <input type="checkbox" name="" id="toggle" className='hidden' checked={yearly} onChange={()=>setYearly(!yearly)}/>
            </div>
        </div>

        <motion.div 
        variants={fadeIn("up",0)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.2}}
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto'>
            {packages.map((pkg,index)=>(
                <div key={index} className='border py-10 md:px-6 px-4 rounded-lg shadow-3xl'>
                    <h3 className='text-3xl font-bold text-center text-primary'>
                        {pkg.name}
                    </h3>
                    <p className='text-tertiary text-center my-5'>
                        {pkg.description}
                    </p>
                    <p className='mt-5 text-center text-secondary text-4xl font-bold'>
                        {yearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}<span className='text-base text-tertiary font-medium'>/{yearly ? 'year' : 'month'}</span>
                    </p>
                    <ul className='mt-4 space-y-2 px-4'> 
                        <li className='flex items-center gap-3'>
                        <AiFillCaretRight className='text-blue-600'/>Video Lessons
                        </li>
                        <li className='flex items-center gap-3'>
                        <AiFillCaretRight className='text-blue-600'/>Certificate
                        </li>
                        <li className='flex items-center gap-3'>
                        <AiFillCaretRight className='text-orange-600'/>Course Completion updates
                        </li>
                        <li className='flex items-center gap-3'>
                        <AiFillCaretRight className='text-orange-600'/>Learn with mates
                        </li>
                        <li className='flex items-center gap-3'>
                        <AiFillCaretRight className='text-orange-600'/>Perosnalized Teacher
                        </li>
                    </ul>
                   <div className='w-full mx-auto mt-8 flex items-center justify-center'>
                    <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>
                            Get Started
                        </button>
                   </div>
                </div>
            ))}
        </motion.div>
    </div>
  )
}

export default Pricing