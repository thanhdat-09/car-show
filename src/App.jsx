import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  CubeCamera,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import Car from "./components/Car";
import Ground from "./components/Ground";

import "./index.css";

const App = () => {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />

        <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

        <color args={[0, 0, 0]} attach="background" />

        <CubeCamera resolution={256} frames={Infinity}>
          {() => <Car />}
        </CubeCamera>

        <spotLight
          color={0xffffff}
          intensity={1.5}
          angle={0.6}
          penumbra={0.5}
          position={[5, 5, 0]}
          castShadow
          shadow-bias={-0.0001}
        />

        <spotLight
          color={0xffffff}
          intensity={2}
          angle={0.6}
          penumbra={0.5}
          position={[-5, 5, 0]}
          castShadow
          shadow-bias={-0.0001}
        />

        <Ground />
      </Canvas>
    </Suspense>
  );
};

export default App;
