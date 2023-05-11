'use client'

import { slideIn, staggerContainer, textVariant } from '../utils/motion'
import { motion } from 'framer-motion'

const Hero = () => (
  <section className='xs:py-8 py-12 pl-6 sm:py-16 sm:pl-16'>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='mx-auto flex w-full flex-col 2xl:max-w-[1280px]'
    >
      <div className='relative z-10 flex flex-col items-center justify-center'>
        <motion.h1
          variants={textVariant(1.1)}
          className='text-[44px] font-bold uppercase leading-[64.4px] text-white sm:text-[60px] sm:leading-[74.4px] md:text-[100px] md:leading-[114.4px] lg:text-[144px] lg:leading-[158.4px]'
        >
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className=' ml-1 flex flex-row items-center justify-center sm:ml-1 md:ml-1.5 lg:ml-1.5'
        >
          <h1 className='text-[44px] font-bold uppercase leading-[64.4px] text-white sm:text-[60px] sm:leading-[74.4px] md:text-[100px] md:leading-[114.4px] lg:text-[144px] lg:leading-[158.4px]'>
            Ma
          </h1>
          <div className='mx-[6px] mt-0.5 h-[33px] w-[66px] rounded-r-[50px] border-[6px] border-white sm:ml-1 sm:h-[44px] sm:w-[96px] sm:border-[8px] md:mt-[6px] md:h-[75px] md:w-[161px] md:border-[15px] lg:mt-2 lg:h-[107px] lg:w-[230px] lg:border-[19px]' />
          <h1 className='-ml-1 text-[44px] font-bold uppercase leading-[64.4px] text-white sm:-ml-1.5 sm:text-[60px] sm:leading-[74.4px] md:text-[100px] md:leading-[114.4px] lg:text-[144px] lg:leading-[158.4px]'>
            Ness
          </h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='relative -mt-[12px] w-full md:-mt-[20px]'
      >
        <div className='hero-gradient absolute -top-[30px] z-[0] h-[300px] w-full rounded-tl-[140px]' />
        <img
          src='/cover.png'
          alt='cover'
          className='relative z-10 h-[350px] w-full rounded-tl-[140px] object-cover sm:h-[500px]'
        />
        <a href='#explore'>
          <div className='relative z-10 -mt-[50px] flex w-full justify-end pr-[40px] sm:-mt-[70px]'>
            <img
              src='/stamp.png'
              alt='stamp'
              className='h-[100px] w-[100px] object-contain sm:h-[155px] sm:w-[155px]'
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
)

export default Hero
