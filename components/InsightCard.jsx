'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className='flex flex-col gap-4 md:flex-row'
  >
    <img
      src={imgUrl}
      alt='planet-01'
      className='h-60 w-full rounded-3xl object-cover md:w-64'
    />
    <div className='flex w-full items-center justify-between '>
      <div className='flex max-w-2xl flex-1 flex-col md:ml-16'>
        <h4 className='text-3xl font-normal text-white lg:text-5xl'>{title}</h4>
        <p className='mt-4 text-sm font-normal text-secondary-white lg:text-xl'>
          {subtitle}
        </p>
      </div>
      <div className='hidden h-24 w-24 items-center justify-center rounded-full border-[1px] border-white bg-transparent lg:flex'>
        <img
          src='/arrow.svg'
          alt='arrow'
          className='h-2/5 w-2/5 object-contain'
        />
      </div>
    </div>
  </motion.div>
)

export default InsightCard
