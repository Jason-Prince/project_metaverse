'use client'

import { motion } from 'framer-motion'
import { socials } from '../constants'
import { footerVariants } from '../utils/motion'

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView='show'
    className='xs:p-8 relative py-8 px-6 sm:p-16'
  >
    <div className='footer-gradient' />
    <div className='mx-auto flex w-full flex-col gap-8 2xl:max-w-[1280px]'>
      <div className='flex flex-wrap items-center justify-between gap-5'>
        <h4 className='text-5xl font-bold text-white md:text-6xl'>
          Enter the Metaverse
        </h4>
        <button
          type='button'
          className='flex h-fit items-center gap-3 rounded-3xl bg-[#25618b] py-4 px-6'
        >
          <img
            src='/headset.svg'
            alt='headset'
            className='h-6 w-6 object-contain'
          />
          <span className='text-base font-normal uppercase text-white'>
            enter metaverse
          </span>
        </button>
      </div>
      <div>
        <div className='mb-12 h-1 bg-white opacity-10' />
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <h4 className='text-2xl font-extrabold uppercase text-white'>
            metaversus
          </h4>
          <p className='text-sm font-normal text-white opacity-50'>
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>
          <div className='flex gap-4'>
            {socials.map(social => (
              <img
                src={social.url}
                alt={social.name}
                key={social.name}
                className='h-6 w-6 cursor-pointer object-contain'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
)

export default Footer
