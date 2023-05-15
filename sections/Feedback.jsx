'use client'

import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion'

const Feedback = () => (
  <section className='xs:p-8 relative z-10 px-6 py-12 sm:p-16'>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: 'false', amount: 0.25 }}
      className='mx-auto flex w-full flex-col gap-6 lg:flex-row 2xl:max-w-[1280px]'
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='gradient-05 relative flex flex-[0.5] flex-col justify-end rounded-3xl border-2 border-[#6a6a6a] p-4 sm:p-8 lg:max-w-sm'
      >
        <div className='feedback-gradient' />
        <div>
          <h4 className='text-2xl font-bold leading-9 text-white sm:text-3xl sm:leading-10'>
            Samantha
          </h4>
          <p className='mt-2 text-xs font-normal leading-4 text-white sm:text-lg sm:leading-5'>
            Founder | Metaversus
          </p>
        </div>
        <p className='mt-6 text-lg font-normal leading-9 text-white sm:text-2xl sm:leading-10'>
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='relative flex flex-1 items-center justify-center'
      >
        <img
          src='/planet-09.png'
          alt='planet-09'
          className='h-auto min-h-[210px] w-full rounded-[40px] object-cover lg:h-[610px]'
        />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className='absolute -left-[10%] top-[3%] hidden lg:block'
        >
          <img
            src='/stamp.png'
            alt='stamp'
            className='h-40 w-40 object-contain'
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
)

export default Feedback
