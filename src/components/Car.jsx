import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

function Car() {
  const gltf = useGLTF("/models/bmw_m4/scene.gltf");

  useEffect(() => {
    gltf.scene.scale.set(2, 2, 2);
    gltf.scene.position.set(0, 0.2, 0);
    gltf.scene.rotation.set(0, -Math.PI / 2, 0);
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
    group.children[2].rotation.z = t * 2;
    group.children[3].rotation.z = t * 2;
    group.children[4].rotation.z = t * 2;
    group.children[7].rotation.z = t * 2;
  });

  return <primitive object={gltf.scene} />;
}

export default Car;
