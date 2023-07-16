import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei'
import {CanvasLoader} from '../Loader'

const Ball = ({icon}) => {

const [decal] = useTexture([icon]);

  return (
    <mesh castShadow receiveShadow scale={2.75}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]}/>
      <icosahedronGeometry args={[1,1]}/>
      <meshStandardMaterial
        color='#fff8eb'
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0,0,1]}
        rotation={[2*Math.PI,0,6.25]}
        scale={1}
        flatShading
        map={decal}
      />
    </mesh>

  )
}

const BallCanvas = (props)=>{
  return (
    <Canvas
      frameloop='demand'
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}/>
        <Ball {...props}/>
      </Suspense>
        

      <Preload all/>
    </Canvas>
  );
}

export default BallCanvas;