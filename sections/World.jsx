'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../utils/motion'
import { TitleText, TypingText } from '../components'

const World = () => (
  <section className='xs:p-8 relative z-10 px-6 py-12 sm:p-16'>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: 'false', amount: 0.25 }}
      className='mx-auto flex w-full flex-col 2xl:max-w-[1280px]'
    >
      <TypingText title='| People on the World' textStyles='text-center' />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles='text-center'
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex h-[550px] w-full'
      >
        <img
          src='/map.png'
          alt='map'
          className='invisible h-full w-full object-cover lg:visible'
        />
        <div className='invisible absolute bottom-28 right-9 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px] shadow-[0_10px_30px_rgba(0,_0,_0)] lg:visible'>
          <img
            src='/people-01.png'
            alt='people'
            className='relative z-10 h-full w-full'
          />
          <div className='absolute left-6 top-[54px] z-0 h-6 w-6 rotate-45 rounded-br-lg border-[12px] border-[#5d6680]' />
        </div>
        <div className='invisible absolute top-10 left-28 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px] shadow-[0_10px_30px_rgba(0,_0,_0)] lg:visible'>
          <img
            src='/people-02.png'
            alt='people'
            className='relative z-10 h-full w-full'
          />
          <div className='absolute left-6 top-[54px] z-0 h-6 w-6 rotate-45 rounded-br-lg border-[12px] border-[#5d6680]' />
        </div>
        <div className='invisible absolute top-1/2 left-[45%] h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px] shadow-[0_10px_30px_rgba(0,_0,_0)] lg:visible'>
          <img
            src='/people-03.png'
            alt='people'
            className='relative z-10 h-full w-full'
          />
          <div className='absolute left-6 top-[54px] z-0 h-6 w-6 rotate-45 rounded-br-lg border-[12px] border-[#5d6680]' />
        </div>
        <div className='invisible absolute top-44 left-36 h-[167px] w-[217px] rounded-3xl bg-[#5d6680] p-[6px] shadow-[0_10px_30px_rgba(0,_0,_0)] lg:visible'>
          <img
            src='/the_upside_down.png'
            alt='The Upside Down'
            className='relative z-10 h-full w-full rounded-3xl'
          />
          <h2 className='absolute bottom-4 left-0 right-0 z-10 mx-auto text-center text-lg font-bold leading-6 text-white'>
            The Upside Down
          </h2>
        </div>
        <div className='invisible absolute top-10 right-52 h-[167px] w-[217px] rounded-3xl bg-[#5d6680] p-[6px] shadow-[0_10px_30px_rgba(0,_0,_0)] lg:visible'>
          <img
            src='/hawkins_labs.png'
            alt='Hawkins Labs'
            className='relative z-10 h-full w-full rounded-3xl'
          />
          <h2 className='absolute bottom-4 left-0 right-0 z-10 mx-auto text-center text-lg font-bold leading-6 text-white'>
            The Upside Down
          </h2>
        </div>
      </motion.div>
    </motion.div>
  </section>
)

export default World
