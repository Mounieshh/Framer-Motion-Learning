

import React from 'react'

const AnimControls = () => {
  return (
    <>
    <div 
    style={{
        display: 'grid',
        placeContent: 'center',
        height: '100vh',
        gap: '0.8 rem'
    }}
    >
        <button className='p-3 bg-violet-400 m-3 rounded hover:bg-violet-500'>
            Flip it
        </button>

        <div className='h-32 w-32 bg-black '>

        </div>
    </div>
    </>
  )
}

export default AnimControls