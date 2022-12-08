import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/caminhao.glb");
  for (var material in materials) {
    if (materials.hasOwnProperty(material)) {
        materials[material].wireframe = props.wireframe;
    }
  }
  if (props.color.r !==  0 && props.color.g !==  0 && props.color.b !==  0) {
    materials.Amarelo.color.r = props.color.r
    materials.Amarelo.color.g = props.color.g
    materials.Amarelo.color.b = props.color.b
  }



  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials.BOrracha}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004_1.geometry}
        material={materials.Amarelo}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004_2.geometry}
        material={materials.Pneu}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004_3.geometry}
        material={materials["Material.018"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004_4.geometry}
        material={materials.Glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004_5.geometry}
        material={materials["Material.016"]}
      />
    </group>
  );
}

useGLTF.preload("/caminhao.glb");
