import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(state => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.25;
    meshRef.current.rotation.y += 0.007;
  });
  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[0.9, 0.28, 160, 32]} />
      <MeshDistortMaterial color="#4E93FF" roughness={0.2} metalness={0.8} distort={0.3} speed={2} />
    </mesh>
  );
}

function FloatingCubes() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.0025;
  });
  const cubes = [
    { color: '#4E93FF', radius: 2.2, yOffset: 0.3, size: 0.45 },
    { color: '#6BABFF', radius: 2.2, yOffset: -0.4, size: 0.38 },
    { color: '#3A7FE8', radius: 2.2, yOffset: 0.5, size: 0.45 },
    { color: '#2D6FD4', radius: 2.2, yOffset: -0.2, size: 0.32 },
    { color: '#5A9FFF', radius: 3.2, yOffset: 0.8, size: 0.28 },
    { color: '#3A7FE8', radius: 2.8, yOffset: 1.0, size: 0.25 },
    { color: '#6BABFF', radius: 2.6, yOffset: 0.6, size: 0.30 },
  ];
  return (
    <group ref={groupRef}>
      {cubes.map((cube, i) => {
        const angle = (i / cubes.length) * Math.PI * 2;
        return (
          <Float key={i} speed={1.5 + i * 0.15} rotationIntensity={0.8 + i * 0.1} floatIntensity={1.2 + i * 0.1}
            position={[Math.cos(angle) * cube.radius, cube.yOffset, Math.sin(angle) * cube.radius]}
          >
            <RoundedBox args={[cube.size, cube.size, cube.size]} radius={0.06} smoothness={4}>
              <meshStandardMaterial color={cube.color} roughness={0.3} metalness={0.6} />
            </RoundedBox>
          </Float>
        );
      })}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#4E93FF" />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#6BABFF" />
      <AnimatedTorus />
      <FloatingCubes />
      <Environment preset="city" />
    </>
  );
}

function MiniAnimatedTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(state => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.25;
    meshRef.current.rotation.y += 0.007;
  });
  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[0.4, 0.13, 100, 16]} />
      <MeshDistortMaterial color="#4E93FF" roughness={0.2} metalness={0.8} distort={0.1} speed={2} />
    </mesh>
  );
}

function MiniAnimatedTetrahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(state => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
    meshRef.current.rotation.y += 0.009;
    meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.25) * 0.15;
  });
  return (
    <mesh ref={meshRef}>
      <tetrahedronGeometry args={[0.6, 0]} />
      <meshStandardMaterial color="#4E93FF" roughness={0.3} metalness={0.8} />
    </mesh>
  );
}

function MiniScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.4} color="#4E93FF" />
      <MiniAnimatedTorus />
    </>
  );
}

function MiniSceneRight() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.9} color="#7aabff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#3A7FE8" />
      <MiniAnimatedTetrahedron />
    </>
  );
}

function SpinningCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(state => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.7;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
  });
  return (
    <mesh ref={meshRef}>
      <RoundedBox args={[0.7, 0.7, 0.7]} radius={0.06} smoothness={4}>
        <meshStandardMaterial color="#4E93FF" roughness={0.3} metalness={0.6} />
      </RoundedBox>
    </mesh>
  );
}

export function LogoMiniCube3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div style={{ width: 32, height: 32, flexShrink: 0 }}>
      {mounted && (
        <Canvas
          camera={{ position: [0, 0, 2.0], fov: 38 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
          frameloop="always"
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#4E93FF" />
          <pointLight position={[0, 5, 0]} intensity={0.5} color="#6BABFF" />
          <SpinningCube />
          <Environment preset="city" />
        </Canvas>
      )}
    </div>
  );
}

export function LogoMiniRight3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div style={{ width: 32, height: 32, flexShrink: 0 }}>
      {mounted && (
        <Canvas
          camera={{ position: [0, 0, 2.1], fov: 38 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
          frameloop="always"
          style={{ background: 'transparent' }}
        >
          <MiniSceneRight />
        </Canvas>
      )}
    </div>
  );
}

export function LogoMini3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div style={{ width: 32, height: 32, flexShrink: 0 }}>
      {mounted && (
        <Canvas
          camera={{ position: [0, 0, 2.1], fov: 38 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
          frameloop="always"
          style={{ background: 'transparent' }}
        >
          <MiniScene />
        </Canvas>
      )}
    </div>
  );
}

export function Hero3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="relative w-full" style={{ height: 340 }}>
      {mounted && (
        <Canvas
          camera={{ position: [0, 0, 6.03], fov: 36 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
          frameloop="always"
          style={{ background: 'transparent' }}
        >
          <Scene />
        </Canvas>
      )}
    </div>
  );
}
