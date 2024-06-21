'use client'

import React from 'react'
import { motion } from 'framer-motion'

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

        <motion.button 
        whileHover={{
            scale: 1.2
        }}
        whileTap={{scale: 1, rotate: '3deg'}}
        transition={{
            duration: 0.07,
            ease: 'easeInOut'
        }}
        className='bg-violet-400 rounded p-3 hover:bg-violet-500'>
            Click Here
        </motion.button>
    </div>
    </>
  )
}

export default Gestures