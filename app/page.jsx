import React from 'react'
import BasicsOfMotion from './components/BasicsOfMotion'
import Gestures from './components/Gestures'
import AnimControls from './components/AnimControls'
import View from './components/View'

const page = () => {
  return (
    <>
    <h3>
      Basics
    </h3>
    <BasicsOfMotion/>
    <Gestures/>
    <AnimControls/>
    <View/>
    </>
  )
}

export default page