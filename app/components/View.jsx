'use client'

import React from 'react'
import { motion } from 'framer-motion'

const View = () => {
  return (
    <>
    <div style={{height: '150vh'}}/>
    <motion.div
    style={{
        height: '100vh',
        background:'black'
    }}
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.4}}
    >

    </motion.div>
     </>
  )
}

export default View