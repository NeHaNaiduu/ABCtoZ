import React from 'react'
import Banner from '../shared/Banner'

const Home = () => {
  return (
    <div id='home' className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
        <Banner image={"home-pic.png"} heading={"Master new skills with diligence"} subheading={"Unlock your potential with tailored skill-building tools. We offer personalized learning paths to help you achieve mastery and advance your career."} btn1={"Get Started"} btn2={"Discount"}/>
    </div>
  )
}

export default Home