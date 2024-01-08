import React from 'react'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.2}} className='hero-banner'>
        <h1>continue exploring</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <a href='#tours' className='btn hero-btn'>
          explore tours
        </a>
      </motion.div>
    </section>
  );
}

export default Hero