import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import {GroupProps, useFrame} from "@react-three/fiber";
import {useRef} from "react";

export function Model(props: GroupProps) {

  const groupRef = useRef<THREE.Group>(null);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const { nodes, materials } = useGLTF('/gltf/scene.gltf')

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.005;
      groupRef.current.rotation.y += 0.010;
      groupRef.current.rotation.z += 0.003;
    }
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group scale={0.074}>
        <group position={[-24.5, -24.49, -24.5]}>
          <mesh geometry={nodes.Object_2.geometry} material={materials.Material1} />
          <mesh geometry={nodes.Object_3.geometry} material={materials.Material2} />
          <mesh geometry={nodes.Object_4.geometry} material={materials.Material3} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.Material3} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.Material3} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.Material3} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.Material3} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.Material3} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.Material3} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.Material3} />
          <mesh geometry={nodes.Object_12.geometry} material={materials.Material3} />
          <mesh geometry={nodes.Object_13.geometry} material={materials.Material3} />
          <mesh geometry={nodes.Object_14.geometry} material={materials.Material3} />
          <mesh geometry={nodes.Object_15.geometry} material={materials.Material3} />
          <mesh geometry={nodes.Object_16.geometry} material={materials.Material3} />
          <mesh geometry={nodes.Object_17.geometry} material={materials.Material3} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/gltf/scene.gltf')
