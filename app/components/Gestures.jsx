import React from 'react'

const Gestures = () => {
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

        <button className='bg-violet-400 rounded p-3 hover:bg-violet-500'>
            Click Here
        </button>
    </div>
    </>
  )
}

export default Gestures