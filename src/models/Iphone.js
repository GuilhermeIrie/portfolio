import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/iphone.glb");

  for (var material in materials) {
    if (materials.hasOwnProperty(material)) {
        materials[material].wireframe = props.wireframe;
    }
  }

  if (props.color.r !==  0 && props.color.g !==  0 && props.color.b !==  0) {
    materials["base iphone"].color.r = props.color.r
    materials["base iphone"].color.g = props.color.g
    materials["base iphone"].color.b = props.color.b
    materials["side material"].color.r = props.color.r
    materials["side material"].color.g = props.color.g
    materials["side material"].color.b = props.color.b
    materials["edge material"].color.r = props.color.r
    materials["edge material"].color.g = props.color.g
    materials["edge material"].color.b = props.color.b
  }


  return (
    <group {...props} dispose={null}>
      <group
        position={[0.03, -0.01, 1.86]}
        rotation={[0, -0.57, 0]}
        scale={[-0.03, -0.01, -0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials.lente}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_1.geometry}
          material={materials.black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_2.geometry}
          material={materials["REDOR DA LENTE"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo.geometry}
        material={materials.logos}
        position={[1.42, -0.05, -1.51]}
        rotation={[-Math.PI, 0.57, -Math.PI]}
        scale={[0.17, 0.19, 0.2]}
      />
      <group
        position={[0.03, -0.04, 1.86]}
        rotation={[3.14, 0.57, -3.14]}
        scale={0.19}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials["base iphone"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials.black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials.vidro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_3.geometry}
          material={materials.parafuso}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_4.geometry}
          material={materials.flash}
        />
      </group>
      <group
        position={[-0.57, -0.24, 1.71]}
        rotation={[Math.PI, 0.57, 0]}
        scale={[0.02, 0.01, 0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006.geometry}
          material={materials.lente}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006_1.geometry}
          material={materials.black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006_2.geometry}
          material={materials.flash}
        />
      </group>
      <group
        position={[0.48, -0.15, -0.46]}
        rotation={[-Math.PI, 0.57, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["base iphone"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_1.geometry}
          material={materials["edge material"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_2.geometry}
          material={materials["side material"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_3.geometry}
          material={materials.black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_4.geometry}
          material={materials.parafuso}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_5.geometry}
          material={materials.vidro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_6.geometry}
          material={materials.Screen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_7.geometry}
          material={materials.logos}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/iphone.glb");
