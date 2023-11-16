import React, {Suspense, useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import {Canvas, ThreeElements, useFrame, useLoader} from "@react-three/fiber";
import {Model} from './Model/Scene';
import {CircularProgress} from "@mui/material";
import {PerspectiveCamera} from "@react-three/drei";

// function Box(props: ThreeElements['mesh']) {
//     const meshRef = useRef<THREE.Mesh>(null!)
//     const [hovered, setHover] = useState(false)
//     const [active, setActive] = useState(false)
//     useFrame((state, delta) => (meshRef.current.rotation.x += delta))
//     return (
//         <mesh
//             {...props}
//             ref={meshRef}
//             scale={active ? 1.5 : 1}
//             onClick={(event) => setActive(!active)}
//             onPointerOver={(event) => setHover(true)}
//             onPointerOut={(event) => setHover(false)}>
//             <boxGeometry args={[1, 1, 1]} />
//             <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//         </mesh>
//     )
// }

// function Model() {
//
//     const meshRef = useRef<THREE.Mesh>(null);
//
//     const mtl = useLoader(MTLLoader, './src/assets/3d/texture.mtl');
//     const obj = useLoader(OBJLoader, './src/assets/3d/model.obj', (loader) => {
//         loader.setMaterials(mtl);
//     });
//
//     console.log(obj)
//
//     useEffect(() => {
//         meshRef.current && meshRef.current.add(obj);
//     }, [obj, meshRef]);
//
//     return (meshRef.current && obj) && <primitive object={meshRef.current as THREE.Mesh} />;
//
// }
export const Background = () => {
    return (
        <Suspense fallback={<CircularProgress color="inherit" />}>
            <Canvas>

                <ambientLight />
                <directionalLight position={[-1.2, 1, 2.2]} intensity={15} color="#fff" />

                <PerspectiveCamera
                    makeDefault  // Сделать камеру по умолчанию
                    position={[0, 0, 4]}
                    fov={65}
                    near={0.1}
                    far={800}
                />

                <Model/>

            </Canvas>
        </Suspense>
    );
};