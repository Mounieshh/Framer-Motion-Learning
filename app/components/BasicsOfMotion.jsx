'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const BasicsOfMotion = () => {

  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className='grid place-content-center h-96 gap-[0.8rem]'>

      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className='bg-violet-400 rounded p-3 hover:bg-violet-500'
        layout
      >
        Show/Hide
      </motion.button>

      <AnimatePresence mode='popLayout'>
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              x: [0, 150, -150, 150, 0]
            }}
            transition={{
              duration: 1,
              ease: 'backInOut',
              times: [0, 0.25, 0.5, 0.85, 1]
            }}
            style={{
              width: '180px',
              height: '180px',
              background: "black",
            }}
          >
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BasicsOfMotion
