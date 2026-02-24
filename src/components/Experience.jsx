import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
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
			<Cube />
		</Canvas>
	);
}
