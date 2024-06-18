'use client'

import React, { useState } from 'react'
import  {AnimatePresence, motion} from 'framer-motion'

const BasicsOfMotion = () => {

  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className='grid place-content-center h-96 gap-[0.8rem]'>

      <button 
      onClick={
        () => setIsVisible(!isVisible)
      }
      className='bg-violet-400 rounded p-3 hover:bg-violet-500'>
      Show/Hide
      </button>

      <AnimatePresence mode='poplayout'>
       { isVisible && <motion.div
        initial={{ 
          rotate:"0deg",
          scale: 0
         }}
        animate={{
          rotate:"360deg",
          scale: 1
        }}
        exit={{
          rotate:"0deg",
          scale: 0
        }}
        transition={{
          duration: 1,
          ease: 'backOut'
        }}
        style={{
            width: '180px',
            height:'180px',
            background: "black",
        }}
        >

        </motion.div> }
        </AnimatePresence>
    </div>
  )
}

export default BasicsOfMotion