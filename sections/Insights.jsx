'use client'

import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion'
import { InsightCard, TitleText, TypingText } from '../components'
import { insights } from '../constants'

const Insights = () => (
  <section className='xs:p-8 relative z-10 px-6 py-12 sm:p-16'>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: 'false', amount: 0.25 }}
      className='mx-auto flex w-full flex-col 2xl:max-w-[1280px]'
    >
      <TypingText title='| Insight' textStyles='text-center' />
      <TitleText title='Insight about metaverse' textStyles='text-center' />
      <div className='mt-12 flex flex-col gap-8'>
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
)

export default Insights
