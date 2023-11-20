import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

function Car() {
  const gltf = useGLTF("/models/nissan/scene.gltf");

  useEffect(() => {
    gltf.scene.scale.set(0.002, 0.002, 0.002);
    gltf.scene.position.set(0, -0.035, 0);
    gltf.scene.rotation.set(0, -Math.PI, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  useFrame((state, delta) => {
    let t = state.clock.getElapsedTime();

    let group = gltf.scene.children[0].children[0].children[0];
    group.children[0].rotation.x = -t * 3;
    group.children[1].rotation.x = -t * 3;
    group.children[2].rotation.x = -t * 3;
    group.children[3].rotation.x = -t * 3;
  });

  return <primitive object={gltf.scene} />;
}

export default Car;
