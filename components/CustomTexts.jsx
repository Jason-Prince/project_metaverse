'use client'

import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from '../utils/motion'

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`text-sm font-normal text-secondary-white md:text-2xl ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
)

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial='hidden'
    whileInView='show'
    className={`mt-2 text-5xl font-bold text-white md:text-6xl ${textStyles}`}
  >
    {title}
  </motion.h2>
)
