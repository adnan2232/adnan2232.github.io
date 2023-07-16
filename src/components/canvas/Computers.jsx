import { Suspense, React,useEffect, useState, useContext } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { CanvasLoader} from '../Loader'
import { IsMobile } from '../../customHook'

const Computers = ({isMobile}) => {

  const computer = useGLTF('./laptop/scene.gltf');

  return (
    <mesh>
     
      <hemisphereLight intensity={0.15} groundColor='black'/>
      <pointLight intensity={1}/>
      <spotLight
        position={[-20,50,10]}   
        angle={0.12}   
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
      object={computer.scene}
      position={[0,-3.5,0]}
      scale={isMobile?1.2:1.7}
      rotation={[0.3,-0.1,0]}
      />
    </mesh>
  );
}


const ComputersCanvas = ()=>{

  const isMobile = useContext(IsMobile);

  return (
    
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20,0,25], fov:20}}
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
          autoRotate={true}
        />
        <Computers isMobile={isMobile}/>
        
      </Suspense>

      <Preload all/>
    </Canvas>
  );
}
export default ComputersCanvas