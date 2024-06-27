
'use client'
import React from 'react'
import BasicsOfMotion from './components/BasicsOfMotion'
import Gestures from './components/Gestures'
import AnimControls from './components/AnimControls'
import View from './components/View'
import AnimScroll from './components/AnimScroll'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const page = () => {

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    // ['rgb(87, 1, 245)', 'rgb(15, 233,5)']
    ['#3456y5', '#1234e5']
  )
  return (
    <>

    <motion.div
      style={{
      scaleX,
      background,
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