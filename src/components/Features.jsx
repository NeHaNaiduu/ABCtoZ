import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from '../shared/anim';

const Features = () => {
  return (
    <div id='features' className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
            <motion.div 
            variants={fadeIn("right",0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
            className='lg:w-1/4'>
                <h3 className='text-3xl text-primary font-bold lg:w-1/2 mb-3'>Why we are better than others</h3>
                <p className='text-base text-tertiary'>We deliver a personalized learning experience with advanced tools designed for your unique skill development needs. Benefit from tailored learning paths and targeted support to accelerate your growth and achieve your career goals more efficiently.</p>
            </motion.div>
            <motion.div 
            variants={fadeIn("up",0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.3}}
            className='w-full lg:w-3/4'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
                    <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl cursor-pointer p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300' >
                        <div>
                            <img src="personalized-pic.png" alt=""className='w-full sm:w-30' />
                            <h5 className='font-semibold text-2xl text-primary px-5 text-center mt-5'>Personalized Learning Paths</h5>
                        </div>
                    </div>
                    <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 cursor-pointer items-center flex justify-center hover:-translate-y-4 transition-all duration-300 md:mt-16' >
                        <div>
                            <img src="advanced-pic.png" alt=""className='w-full sm:w-30' />
                            <h5 className='font-semibold text-2xl text-primary px-5 text-center mt-5'>Advanced Tools and Resources</h5>
                        </div>
                    </div>
                    <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center cursor-pointer hover:-translate-y-4 transition-all duration-300' >
                        <div>
                            <img src="Support-pic.png" alt=""className='w-full sm:w-30' />
                            <h5 className='font-semibold text-2xl text-primary px-5 text-center mt-5'>Targeted Support</h5>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Features