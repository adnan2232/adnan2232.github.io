import React from 'react'
import {Html,useProgress} from '@react-three/drei'


const CanvasLoader = () => {
  const {progress}= useProgress();
  return (
    <Html>
      <span className='canvas-load'></span>
      <p  
        className='
        text-[#f1f1f1] text-[14px] font-[800]
          mt-[40px]
        '
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}
export {CanvasLoader};