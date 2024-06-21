import React from 'react'
import BasicsOfMotion from './components/BasicsOfMotion'
import Gestures from './components/Gestures'
import AnimControls from './components/AnimControls'

const page = () => {
  return (
    <>
    <h3>
      Basics
    </h3>
    <BasicsOfMotion/>
    <Gestures/>
    <AnimControls/>
    </>
  )
}

export default page