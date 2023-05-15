'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'flex-[10] lg:flex-[3]' : 'flex-[2] lg:flex-[1]'
    } h-[700px] max-w-full cursor-pointer transition-[flex] duration-[0.7] ease-in-out`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className='absolute h-full w-full rounded-3xl object-cover'
    />
    {active !== id ? (
      <h3 className='absolute right-[51px] top-0 z-10 whitespace-nowrap rounded-br-3xl rounded-tl-3xl bg-[rgba(0,0,0,0.6)] px-7 py-2 text-lg font-semibold text-white sm:text-3xl lg:origin-top-right lg:-rotate-90 '>
        {title}
      </h3>
    ) : (
      <div className='absolute bottom-0 w-full flex-col justify-start rounded-b-3xl bg-[rgba(0,0,0,0.5)] p-8'>
        <div className='glassmorphism mb-4 flex h-14 w-14 items-center justify-center rounded-3xl'>
          <img
            src='/headset.svg'
            alt='headset'
            className='h-1/2 w-1/2 object-contain'
          />
        </div>
        <p className='text-base font-normal uppercase leading-5 text-white'>
          Enter the Metaverse
        </p>
        <h2 className='text-6 mt-6 font-semibold text-white sm:text-4xl'>
          {title}
        </h2>
      </div>
    )}
  </motion.div>
)

export default ExploreCard
