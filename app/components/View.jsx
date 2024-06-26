'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const View = () => {

     //Adding useRef Hook

     const ref = useRef(null)
     const isInView = useInView(ref, {once : true})

     useEffect(() => {
        console.log("Is In View -> ",isInView);

     },[isInView])
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
    />
    


    <div
    ref={ref}
    style={{
        height: '100vh',
        background: isInView ? 'blue' : 'red',
        transition: '1s background'
    }}
    />
     </>
  )
}

export default View