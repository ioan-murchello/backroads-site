import React, { useEffect } from 'react'
import Title from './Title';
import { services } from '../data/pageLinks';
import {motion} from 'framer-motion'

const Services = () => {
   
  const container = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {staggerChildren: 0.2}}
  }

  const item = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {staggerChildren: 0.7}}
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.1 },
    show: { opacity: 1, scale: 1 }, 
  };

  const titleVariants = {
    hidden: {opacity: 0, y: -20,color: '#fff'},
    show: {opacity: 1, y: 0, color: '#000'},
  }

  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />
      <motion.div
        viewport={{ once: true }}
        variants={container}
        initial='hidden'
        whileInView='show'
        className='section-center services-center'
      >
        {services.map((service) => {
          return (
            <motion.article
              variants={item}
              key={service.id}
              className='service'
            >
              <motion.span variants={iconVariants} transition={{type:'spring'}} className='service-icon'>
                <i className={service.icon}></i>
              </motion.span>
              <div className='service-info'>
                <motion.h4 variants={titleVariants} className='service-title'>{service.title}</motion.h4>
                <p className='service-text'>{service.text}</p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Services