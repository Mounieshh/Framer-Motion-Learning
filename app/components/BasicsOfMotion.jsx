'use client'

import React from 'react'
import  {motion} from 'framer-motion'

const BasicsOfMotion = () => {
  return (
    <div className='grid place-content-center h-96 gap-[0.8rem]'>

        <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{
          rotate: "180deg"
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