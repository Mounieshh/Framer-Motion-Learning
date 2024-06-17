'use client'

import React from 'react'
import  {motion} from 'framer-motion'

const BasicsOfMotion = () => {
  return (
    <div className='grid place-content-center h-96 gap-[0.8rem]'>

        <motion.div
        initial={{ 
          rotate: "0deg"
         }}
        animate={{
          rotate: "180deg"
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

        </motion.div>
    </div>
  )
}

export default BasicsOfMotion