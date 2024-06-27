
'use client'
import React from 'react'
import BasicsOfMotion from './components/BasicsOfMotion'
import Gestures from './components/Gestures'
import AnimControls from './components/AnimControls'
import View from './components/View'
import AnimScroll from './components/AnimScroll'

import { motion, useScroll, useSpring } from 'framer-motion'

const page = () => {

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)
  return (
    <>

    <motion.div
      style={{
      scaleX,
      background: 'red',
      transformOrigin: 'left',
      position: 'sticky',
      top: '0',
      width: '100%',
      height: '20px'
     }}
      />
    <h3>
      Basics
    </h3>
    <BasicsOfMotion/>
    <Gestures/>
    <AnimControls/>
    <View/>
   <AnimScroll/>
    </>
  )
}

export default page