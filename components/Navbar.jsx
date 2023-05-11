'use client'

import { navVariants } from '../utils/motion'
import { motion } from 'framer-motion'

const Navbar = () => (
  <motion.nav
    className='relative px-6 py-8 sm:px-16'
    variants={navVariants}
    initial='hidden'
    whileInView='show'
  >
    <div className='gradient-01 absolute inset-0 w-1/2' />
    <div className='mx-auto flex w-full justify-between gap-8 2xl:max-w-[1280px]'>
      <img src='/search.svg' alt='search' className='h-6 w-6 object-contain' />
      <h2 className='text-2xl font-extrabold uppercase leading-[30px] text-white'>
        metaversus
      </h2>
      <img src='/menu.svg' alt='menu' className='h-6 w-6 object-contain' />
    </div>
  </motion.nav>
)

export default Navbar
