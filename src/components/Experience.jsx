import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";

function Cube() {
	const meshRef = useRef();
	useFrame((_state, delta) => {
		meshRef.current.rotation.x += delta * 0.6;
		meshRef.current.rotation.y += delta * 0.8;
	});

	return (
		<mesh ref={meshRef}>
			<boxGeometry args={[1.1, 1.2, 1.2]} />
			<meshStandardMaterial color='mediumpurple' />
		</mesh>
	);
}

export default function Experience() {
	return (
		<Canvas
			camera={{
				position: [0, 0, 3],
				fov: 50,
			}}>
			<OrbitControls />
			<ambientLight intensity={0.6} />
			<directionalLight position={[2, 3, 4]} intensity={1.1} />
			{/* <Text3D
				font='/fonts/helvetiker_bold.typeface.json'
				size={0.8}
				height={0.18}
				curveSegments={10}
				bevelEnabled
				bevelThickness={0.03}
				bevelSize={0.02}>
				TokiLoshi.xyz
				<meshStandardMaterial
					color='orange'
					roughness={0.35}
					metalness={0.15}
				/>
			</Text3D> */}
			<Cube />
		</Canvas>
	);
}
