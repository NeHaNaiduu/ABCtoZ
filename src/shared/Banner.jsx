import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from './anim'

const Banner = ({image,heading,subheading,btn1,btn2}) => {
  return (
    <div className='bg-gradient-to-r from-[#6e45e2] to-[#88d3ce] rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
                <motion.div
                variants={fadeIn("down",0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}
                >
                    <img src={image} alt="" className='lg:h-[386px] w-96'/>
                </motion.div>
                <motion.div
                variants={fadeIn("up",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.3}} 
                className='md:w-3/5'>
                    <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>
                        {heading}
                    </h2>
                    <p className='text-[#EBEBEB] text-2xl mb-8'>
                        {subheading}
                    </p>
                    <div className='space-x-5 space-y-4'>
                        <button className='py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>
                            {btn1}
                        </button>
                        {btn2 === "" ? <button className='display-none'></button> :
                        <button className='py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>
                        {btn2}
                    </button>}
                    </div>
                </motion.div>
            </div>
        </div>
  )
}

export default Banner