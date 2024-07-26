import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from '../shared/anim';

const About = () => {
  return (
    <div id='about' className='md:px-14 p-4 max-w-s mx-auto space-y-10'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <motion.div 
            variants={fadeIn("right",0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
            className='md:w-1/2'>
                <img src="improve.png" alt="" />
            </motion.div>
            <motion.div
            variants={fadeIn("left",0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
            className='md:w-2/5'>
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We have been improving our product <span className='text-secondary'>for many years</span></h2>
                <p className='text-tertiary text-lg mb-7'>With years of dedicated experience, we've continually refined and improved our products to ensure they meet the highest standards of quality and innovation, consistently exceeding expectations.</p>
                <button className='py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>Get Started</button>
            </motion.div>
        </div>
        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
            <motion.div 
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
            className='md:w-1/2'>
                <img src="time.png" alt="" />
            </motion.div>
            <motion.div 
            variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
            className='md:w-1/2'>
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>You can Practice at any <span className='text-secondary'>time convenient for you.</span></h2>
                <p className='text-tertiary text-lg mb-7'>Experience the convenience of flexible learning, allowing you to practice and develop skills anytime and anywhere. Fit your training seamlessly into your schedule and progress at your own pace.</p>
                <button className='py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>Get Started</button>
            </motion.div>
        </div>
    </div>
  )
}

export default About