'use client'

import styles from '../styles'
import { motion } from 'framer-motion'
import { TypingText } from '../components'
import { fadeIn, staggerContainer } from '../utils/motion'

const About = () => (
  <section className='xs:p-8 relative z-10 px-6 py-12 sm:p-16'>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='mx-auto flex w-full flex-col items-center justify-center 2xl:max-w-[1280px]'
    >
      <TypingText title='| About Metaversus' textStyles='text-center' />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] text-center text-[20px] font-normal text-secondary-white sm:text-[32px]'
      >
        <span className='font-extrabold text-white'>Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the{' '}
        <span className='font-extrabold text-white'>
          madness of the metaverse
        </span>{' '}
        of today, using only{' '}
        <span className='font-extrabold text-white'>VR</span> devices you can
        easily <span className='font-extrabold text-white'>explore</span> the
        metaverse world you want, turn your dreams into reality. Let's explore
        the madness of the metaverse by scrolling down
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='mt-[28px] h-[28px] w-[18px] object-contain'
      />
    </motion.div>
  </section>
)

export default About
