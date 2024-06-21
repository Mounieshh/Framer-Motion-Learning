'use client'

import React from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const AnimControls = () => {

  const controls = useAnimationControls()
  const handleClick = () => {
    controls.start('flip')
  }
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
        onClick={handleClick}
        className='p-3 bg-violet-400 m-3 rounded hover:bg-violet-500'>
            Flip it
        </motion.button>

        <motion.div 
        
        className='h-32 w-32 bg-black '
        variants={{
          initial: {
            rotate: 0,
          },
          flip : {
            rotate: 360,
          }
        }}
        animate={controls}
        initial= 'initial'
        >

        </motion.div>
    </div>
    </>
  )
}

export default AnimControls