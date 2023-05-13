'use client'

import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion'
import { ExploreCard, TitleText, TypingText } from '../components'
import { exploreWorlds } from '../constants'
import { useState } from 'react'

const Explore = () => {
  const [active, setActive] = useState('world-2')

  return (
    <section className='xs:p-8 px-6 py-12 sm:p-16' id='explore'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='mx-auto flex w-full flex-col 2xl:max-w-[1280px]'
      >
        <TypingText title='| The World' textStyles='text-center' />
        <TitleText
          title='Choose the world you want to explore'
          textStyles='text-center'
        />
        <div className='mt-[50px] flex min-h-[70vh] flex-col gap-5 lg:flex-row'>
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Explore
