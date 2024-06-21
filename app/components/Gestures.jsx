'use client'

import React from 'react'
import { motion, MotionConfig } from 'framer-motion'

const Gestures = () => {
  return (
    <>
    <div 
    style={{
        display: 'grid',
        placeContent: 'center',
        height: '100vh',
        gap: '0.8 rem'
    }}
    >
        <MotionConfig
         transition={{
            duration: 0.07,
            ease: 'easeInOut'
        }}
        >
        <motion.button 
        whileHover={{
            scale: 1.2
        }}
        whileTap={{scale: 1, rotate: '3deg'}}
        className='bg-red-500 rounded p-3 m-3 hover:bg-red-400'>
            Click Here
        </motion.button>

        <motion.button 
        whileHover={{
            scale: 1.2
        }}
        whileTap={{scale: 1, rotate: '3deg'}}
        className='bg-violet-400 rounded p-3 m-3 hover:bg-violet-500'>
            Click Here
        </motion.button>
        </MotionConfig>
    </div>
    </>
  )
}

export default Gestures