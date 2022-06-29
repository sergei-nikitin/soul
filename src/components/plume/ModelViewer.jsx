import React, {Suspense, useRef} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera, useAnimations, useGLTF} from "@react-three/drei";
import GltfModel from "./GltfModel";
import cloth from './gltf/clothblend_botl.glb';
import Model from "./gltf/Clothtest2";

const ModelViewer = ({modelPath, scale = 40, position = [0, 0, 0]}) => {
  return (
    <Canvas
      camera={{ position: [1,0,1] }}
    >
      <ambientLight/>
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
      <pointLight intensity={2} position={[-10, -10, -10]}/>
      <pointLight intensity={2} position={[1, 1, 3]}/>
      <Suspense fallback={null}>
        <Model/>
        {/*<GltfModel modelPath={modelPath} scale={scale} position={position} />*/}
        <OrbitControls/>
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;