import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"

// Custom hook for screen size
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const About = () => {
  const isMobile = useIsMobile();

  return (
    <motion.div
    initial={{opacity: 0, x:-200}}
        transition={{duration: 1.2}}
        whileInView={{opacity:1, x:0}}
        viewport={{once: true}}
      className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden scroll-mt-20'
      id='About'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
        About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span>
      </h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>
        Passionate About Properties, Dedicated to your vision
      </p>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img 
          src={assets.brand_img} 
          alt='Brand overview' 
          className='w-full sm:w-1/2 max-w-lg' 
        />
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <p className='text-4xl font-medium text-gray-800'>10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>25+</p>
              <p>Ongoing Project</p>
            </div>
          </div>
          <p className='my-10 max-w-lg'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto fugiat quo aspernatur. 
            Enim a impedit esse temporibus, mollitia eos et voluptatem autem praesentium eaque harum 
            molestiae sapiente illum blanditiis provident.
          </p>
          <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>
        </div>
      </div>
    </motion.div>
  )
}

export default About
