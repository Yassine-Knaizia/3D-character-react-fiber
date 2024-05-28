import { OrbitControls, Preload } from "@react-three/drei";
import {  Avatar } from "./Avatar"
import { Canvas } from "@react-three/fiber"
import React, { Suspense } from "react"

export const Experience = () => {
  return (
    <>
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [10, 10, 20], fov: 13 }}
      gl={{ preserveDrawingBuffer: true }}
      className='lg:block hidden'
    >
      <Suspense fallback={<group>...loading</group>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Avatar />
      </Suspense>
      <Preload all />
      <ambientLight intensity={1} />
    </Canvas>
    </>
  );
};
