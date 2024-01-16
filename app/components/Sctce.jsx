
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { degToRad } from 'three/src/math/MathUtils.js'
import { Html } from '@react-three/drei'
export function Model(props) {
  const { nodes, materials } = useGLTF('/models/sctce.glb')
  return (
    <group scale={50} >
      <group {...props} dispose={null}>
        <mesh geometry={nodes.ground.geometry} material={materials.ground} position={[0, 0.004, 0]} rotation={[Math.PI, -0.609, Math.PI]}>
          {/* Auditorium */}
          <group position={[-0.051, 0.001, -0.031]}>
            <mesh geometry={nodes.Plane007.geometry} material={materials.buildings} />
            <Html position={[0, 0.006, 0]}>
              <div onClick={() => {
                props.modelToggle()
              }}>
                <p className={`bg-neutral-800 ring-2 ring-neutral-600
                                w-5 h-5 cursor-pointer 
                                flex items-center justify-center 
                                rounded-full aspect-square 
                              text-neutral-50 font-bold text-xs
                              hover:bg-neutral-700 hover:ring-neutral-500`
                }>1</p>
              </div>
            </Html>
            <mesh geometry={nodes.Plane007_1.geometry} material={materials.roofs} />
            <mesh geometry={nodes.Plane007_2.geometry} material={materials['window glass']} />
          </group>
          {/* Main Building */}
          <group position={[-0.027, 0.019, -0.008]}>
            <Html position={[-0.012, 0.003, 0.013]}>
              <div>
                <p className={`bg-neutral-800 ring-2 ring-neutral-600
                                w-5 h-5 cursor-pointer 
                                flex items-center justify-center 
                                rounded-full aspect-square 
                              text-neutral-50 font-bold text-xs
                              hover:bg-neutral-700 hover:ring-neutral-500`
                }>1</p>
              </div>
            </Html>
            <Html position={[-0.003, 0.003, -0.002]}>
              <div>
                <p className={`bg-neutral-800 ring-2 ring-neutral-600
                                w-5 h-5 cursor-pointer 
                                flex items-center justify-center 
                                rounded-full aspect-square 
                              text-neutral-50 font-bold text-xs
                              hover:bg-neutral-700 hover:ring-neutral-500`
                }>1</p>
              </div>
            </Html>
            <Html position={[0.0065, -0.016, -0.004]}>
              <div>
                <p className={`bg-neutral-800 ring-2 ring-neutral-600
                                w-5 h-5 cursor-pointer 
                                flex items-center justify-center 
                                rounded-full aspect-square 
                              text-neutral-50 font-bold text-xs
                              hover:bg-neutral-700 hover:ring-neutral-500`
                }>1</p>
              </div>
            </Html>
            <mesh geometry={nodes.Plane006.geometry} material={materials.buildings} />
            <mesh geometry={nodes.Plane006_1.geometry} material={materials.roofs} />
          </group>
          <group position={[0.032, 0.02, 0.04]}>
            <mesh geometry={nodes.Plane013.geometry} material={materials.buildings} />
            <mesh geometry={nodes.Plane013_1.geometry} material={materials.roofs} />
          </group>
          <group position={[0.013, 0.011, -0.054]}>
            <mesh geometry={nodes.Plane003.geometry} material={materials.buildings} />
            <mesh geometry={nodes.Plane003_1.geometry} material={materials.roofs} />
            <group position={[0.009, -0.001, 0.001]}>
              <mesh geometry={nodes.Plane004_1.geometry} material={materials['window frame']} />
              <mesh geometry={nodes.Plane004_2.geometry} material={materials['window glass']} />
            </group>
            <group position={[-0.001, -0.001, -0.003]} rotation={[0, 1.571, 0]}>
              <mesh geometry={nodes.Plane005_1.geometry} material={materials['window frame']} />
              <mesh geometry={nodes.Plane005_2.geometry} material={materials['window glass']} />
            </group>
          </group>
          <mesh geometry={nodes.cultsteps.geometry} material={materials.buildings} position={[-0.004, 0.004, -0.033]} />
          {/* Embedded Systems */}
          <group position={[0.047, 0.015, -0.013]}>
            <mesh geometry={nodes.Plane012.geometry} material={materials.buildings} />
            <mesh geometry={nodes.Plane012_1.geometry} material={materials.roofs} />
            <Html position={[0, -0.005, -0.005]}>
              <div>
                <p
                  className={`bg-neutral-800 ring-2 ring-neutral-600
                                w-5 h-5 cursor-pointer 
                                flex items-center justify-center 
                                rounded-full aspect-square 
                              text-neutral-50 font-bold text-xs
                              hover:bg-neutral-700 hover:ring-neutral-500`
                  }
                >
                  2
                </p>
              </div>
            </Html>
          </group>
          <group position={[0.019, 0.015, -0.004]}>
            <mesh geometry={nodes.Plane010.geometry} material={materials.buildings} />
            <mesh geometry={nodes.Plane010_1.geometry} material={materials.roofs} />
          </group>
          <group position={[-0.033, 0.004, -0.056]}>
            <mesh geometry={nodes.Plane.geometry} material={materials.buildings} />
            <mesh geometry={nodes.Plane_1.geometry} material={materials.roofs} />
            <group position={[0.003, -0.001, 0]}>
              <mesh geometry={nodes.Plane002_1.geometry} material={materials['window frame']} />
              <mesh geometry={nodes.Plane002_2.geometry} material={materials['window glass']} />
            </group>
          </group>
        </mesh >
      </group >
    </group >
  )
}

useGLTF.preload('/sctce.glb')
