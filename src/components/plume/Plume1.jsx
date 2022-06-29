import React, {Suspense, useRef} from "react";
import {shaderMaterial, useTexture} from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro"
import {Canvas, extend, useFrame} from "react-three-fiber";
import * as THREE from "three";
// import plumPng from '../../images/ukraine-ukraina-flag.jpeg'
import plumPng from '../../images/pngwing.png'

const WaveShaderMaterial = shaderMaterial(
  // Uniforms
  {
    transparent: true,
    uColor: new THREE.Color(255.0, 255.0, 255.0,),
    uTime: 0,
    uTexture: new THREE.Texture(),
    alpha: true,
  },
  // Vertex Shader
  glsl`
    precision mediump float;
        
    varying vec2 vUv;
    varying float vWave;
    
    uniform float uTime;
    
    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);
  
    void main() {
      vUv = uv;
      
      vec3 pos = position;
      float noiseFreq = 1.5;
      float noiseAmp = 0.45;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime/7.0, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;
          
      gl_Position = projectionMatrix * modelViewMatrix * vec4
      (pos, 1.0);
    }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;
    
    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;
    
    varying vec2 vUv;
    varying float vWave;
    
    void main() {
      gl_FragColor = texture2D(uTexture, vUv);
    }
  `,
)

// float wave = vWave * 10.9;
// vec3 texture = texture2D(uTexture, vUv + wave).rgb;
// gl_FragColor = vec4(texture, vUv);

const Wave = () => {
  const ref = useRef();
  useFrame(({clock}) => ref.current.uTime = clock.getElapsedTime())

  const [image] = useTexture([plumPng])

  return (
    <mesh>
      <planeBufferGeometry args={[0.6, 0.4, 16, 16]}/>
      <waveShaderMaterial uColor={'white'} ref={ref} uTexture={image}/>
    </mesh>
  )
}

extend({WaveShaderMaterial})

function Scene() {
  return (
    <Canvas
      gl={{antialias: true, toneMapping: THREE.NoToneMapping}}
      linear
      camera={{fov: 12, position: [-0.2, 0, 1.5]}}
    >
      <Suspense fallback={null}>
        <Wave/>
      </Suspense>
    </Canvas>
  )
}

const Plume1 = () => {
  return (
    <Scene/>
  );
}
export default Plume1

// npm i three @react-three/fiber @react-three/drei glslify babel-plugin-glsl glsl-noise
