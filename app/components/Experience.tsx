"use client"
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Sctce"
import { OrbitControls } from "@react-three/drei";
export default function Experience() {
    const [ModelOpen, setModelOpen] = useState(false)
    function modelToggle() {
        setModelOpen(!ModelOpen)
    }
    return (
        <div>
            {ModelOpen &&
                <div className="w-screen py-10 px-5 bg-red-500 absolute bottom-0 z-10">
                    <div>
                        <h1>Auditorium</h1>
                        <p className="flex gap-1 items-center">Located left to the main building <button className="ring-1 aspect-square rounded-full p-1 w-4 h-4 text-xs flex items-center justify-center">i</button></p>
                        <div>
                            <h1>Happening Now</h1>
                            <div className="flex gap-2">
                                <div className=" bg-neutral-400 w-10 aspect-square"></div>
                                <div>
                                    <h1>Inaguration</h1>
                                    <p>Formal Inaguration of the event</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            <Canvas
                dpr={[1, 2]}
                camera={{ position: [10, 10, 10], fov: 26 }}
                style={{
                    height: '100vh',
                    zIndex: 2
                }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={1.4} />
                    <Model modelToggle={modelToggle} />
                    <OrbitControls />
                </Suspense>
            </Canvas>
        </div>
    )
}