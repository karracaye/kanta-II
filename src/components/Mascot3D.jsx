import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Procedural Kanta Robot Mascot 3D Mesh
function RobotModel({ mousePosition, isHovered }) {
  const groupRef = useRef();
  const headRef = useRef();
  const rightArmRef = useRef();
  const leftArmRef = useRef();

  useFrame((state, delta) => {
    // Smooth mouse head tracking
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        mousePosition.current.x * 0.45,
        0.08
      );
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        -mousePosition.current.y * 0.35,
        0.08
      );
    }

    // Waving right arm animation
    if (rightArmRef.current) {
      const waveSpeed = isHovered ? 8 : 3;
      const waveAngle = Math.sin(state.clock.elapsedTime * waveSpeed) * 0.25 + 0.6;
      rightArmRef.current.rotation.z = THREE.MathUtils.lerp(
        rightArmRef.current.rotation.z,
        waveAngle,
        0.1
      );
      rightArmRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }

    // Subtle idle floating body movement
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
    }
  });

  // Metallic white material
  const bodyMaterial = new THREE.MeshPhysicalMaterial({
    color: '#F8FAFC',
    roughness: 0.15,
    metalness: 0.1,
    clearcoat: 0.8,
    clearcoatRoughness: 0.1,
  });

  // Warm accent material
  const orangeMaterial = new THREE.MeshStandardMaterial({
    color: '#ED683C',
    roughness: 0.3,
    metalness: 0.2,
  });

  // Red accent material
  const redMaterial = new THREE.MeshStandardMaterial({
    color: '#B92025',
    roughness: 0.3,
    metalness: 0.2,
  });

  // Black display glass material
  const displayMaterial = new THREE.MeshPhysicalMaterial({
    color: '#0F172A',
    roughness: 0.05,
    metalness: 0.9,
    clearcoat: 1.0,
  });

  // Glowing yellow eyes material
  const eyeMaterial = new THREE.MeshStandardMaterial({
    color: '#FBBF24',
    emissive: '#F59E0B',
    emissiveIntensity: isHovered ? 1.5 : 0.9,
    roughness: 0.1,
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]} scale={[1.35, 1.35, 1.35]}>
      {/* --- HEAD GROUP --- */}
      <group ref={headRef} position={[0, 1.1, 0]}>
        {/* Main Head Base */}
        <mesh material={bodyMaterial} position={[0, 0, 0]}>
          <sphereGeometry args={[0.75, 48, 48]} />
        </mesh>

        {/* Face Display Screen */}
        <mesh material={displayMaterial} position={[0, 0.02, 0.42]} rotation={[-0.05, 0, 0]}>
          <sphereGeometry args={[0.52, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
        </mesh>

        {/* Left Glowing Eye */}
        <group position={[-0.22, 0.08, 0.85]}>
          <mesh material={eyeMaterial}>
            <sphereGeometry args={[0.12, 24, 24]} />
          </mesh>
          {/* Eye Pupil / Reflection Accent */}
          <mesh position={[0.03, 0.03, 0.09]}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
        </group>

        {/* Right Glowing Eye */}
        <group position={[0.22, 0.08, 0.85]}>
          <mesh material={eyeMaterial}>
            <sphereGeometry args={[0.12, 24, 24]} />
          </mesh>
          {/* Eye Pupil / Reflection Accent */}
          <mesh position={[-0.03, 0.03, 0.09]}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
        </group>

        {/* Smiling Mouth Line */}
        <mesh position={[0, -0.15, 0.88]} rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.1, 0.02, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.8} />
        </mesh>

        {/* Left Orange Ear Ring */}
        <group position={[-0.75, 0.02, 0]}>
          <mesh material={orangeMaterial} rotation={[0, Math.PI / 2, 0]}>
            <cylinderGeometry args={[0.24, 0.24, 0.12, 32]} />
          </mesh>
          <mesh material={redMaterial} position={[-0.07, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <cylinderGeometry args={[0.18, 0.18, 0.06, 32]} />
          </mesh>
        </group>

        {/* Right Orange Ear Ring */}
        <group position={[0.75, 0.02, 0]}>
          <mesh material={orangeMaterial} rotation={[0, Math.PI / 2, 0]}>
            <cylinderGeometry args={[0.24, 0.24, 0.12, 32]} />
          </mesh>
          <mesh material={redMaterial} position={[0.07, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <cylinderGeometry args={[0.18, 0.18, 0.06, 32]} />
          </mesh>
        </group>

        {/* Top Antenna Stem & Knob */}
        <group position={[0.25, 0.68, -0.1]} rotation={[0, 0, -0.3]}>
          {/* Antenna Stem Base */}
          <mesh material={redMaterial} position={[0, 0.1, 0]}>
            <cylinderGeometry args={[0.04, 0.06, 0.2, 16]} />
          </mesh>
          {/* Antenna Extension */}
          <mesh material={orangeMaterial} position={[0, 0.32, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 0.28, 16]} />
          </mesh>
          {/* Antenna Top Spherical Knob */}
          <mesh material={orangeMaterial} position={[0, 0.5, 0]}>
            <sphereGeometry args={[0.15, 24, 24]} />
          </mesh>
        </group>

        {/* Forehead Kanta Starburst Badge */}
        <group position={[0, 0.55, 0.52]} rotation={[-0.3, 0, 0]} scale={[0.12, 0.12, 0.12]}>
          <mesh material={redMaterial} position={[-0.4, 0.4, 0]}>
            <boxGeometry args={[0.7, 0.7, 0.1]} />
          </mesh>
          <mesh material={orangeMaterial} position={[0.4, 0.4, 0]}>
            <boxGeometry args={[0.7, 0.7, 0.1]} />
          </mesh>
          <mesh material={redMaterial} position={[-0.4, -0.4, 0]}>
            <boxGeometry args={[0.7, 0.7, 0.1]} />
          </mesh>
          <mesh material={orangeMaterial} position={[0.4, -0.4, 0]}>
            <boxGeometry args={[0.7, 0.7, 0.1]} />
          </mesh>
        </group>
      </group>

      {/* --- BODY GROUP --- */}
      <group position={[0, -0.05, 0]}>
        {/* Main Torso */}
        <mesh material={bodyMaterial} position={[0, 0, 0]}>
          <sphereGeometry args={[0.65, 32, 32]} />
        </mesh>

        {/* Chest Kanta Logo Emblem */}
        <group position={[0, 0.18, 0.58]} scale={[0.14, 0.14, 0.14]}>
          <mesh material={redMaterial} position={[-0.4, 0.4, 0]}>
            <boxGeometry args={[0.7, 0.7, 0.1]} />
          </mesh>
          <mesh material={orangeMaterial} position={[0.4, 0.4, 0]}>
            <boxGeometry args={[0.7, 0.7, 0.1]} />
          </mesh>
          <mesh material={redMaterial} position={[-0.4, -0.4, 0]}>
            <boxGeometry args={[0.7, 0.7, 0.1]} />
          </mesh>
          <mesh material={orangeMaterial} position={[0.4, -0.4, 0]}>
            <boxGeometry args={[0.7, 0.7, 0.1]} />
          </mesh>
        </group>

        {/* Lower Body Rim */}
        <mesh material={orangeMaterial} position={[0, -0.45, 0]}>
          <cylinderGeometry args={[0.48, 0.42, 0.1, 32]} />
        </mesh>
      </group>

      {/* --- ARMS --- */}
      {/* Right Arm (Waving 👋) */}
      <group ref={rightArmRef} position={[-0.68, 0.1, 0]}>
        <mesh material={bodyMaterial} position={[-0.15, -0.05, 0]}>
          <sphereGeometry args={[0.18, 24, 24]} />
        </mesh>
        <mesh material={bodyMaterial} position={[-0.32, -0.15, 0.05]} rotation={[0, 0, 0.5]}>
          <capsuleGeometry args={[0.1, 0.35, 16, 16]} />
        </mesh>
        {/* Hand */}
        <mesh material={bodyMaterial} position={[-0.48, -0.28, 0.15]}>
          <sphereGeometry args={[0.15, 20, 20]} />
        </mesh>
      </group>

      {/* Left Arm */}
      <group ref={leftArmRef} position={[0.68, 0.1, 0]}>
        <mesh material={bodyMaterial} position={[0.15, -0.05, 0]}>
          <sphereGeometry args={[0.18, 24, 24]} />
        </mesh>
        <mesh material={bodyMaterial} position={[0.3, -0.25, 0]} rotation={[0, 0, -0.3]}>
          <capsuleGeometry args={[0.1, 0.35, 16, 16]} />
        </mesh>
        {/* Hand */}
        <mesh material={bodyMaterial} position={[0.42, -0.45, 0]}>
          <sphereGeometry args={[0.14, 20, 20]} />
        </mesh>
      </group>

      {/* --- LEGS & FEET --- */}
      <group position={[0, -0.65, 0]}>
        {/* Left Foot */}
        <mesh material={bodyMaterial} position={[-0.26, -0.12, 0.05]}>
          <boxGeometry args={[0.26, 0.18, 0.42]} />
        </mesh>
        <mesh material={orangeMaterial} position={[-0.26, -0.18, 0.05]}>
          <boxGeometry args={[0.28, 0.04, 0.44]} />
        </mesh>

        {/* Right Foot */}
        <mesh material={bodyMaterial} position={[0.26, -0.12, 0.05]}>
          <boxGeometry args={[0.26, 0.18, 0.42]} />
        </mesh>
        <mesh material={orangeMaterial} position={[0.26, -0.18, 0.05]}>
          <boxGeometry args={[0.28, 0.04, 0.44]} />
        </mesh>
      </group>
    </group>
  );
}

export default function Mascot3D() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mousePosition.current = {
      x: (clientX / innerWidth) * 2 - 1,
      y: -(clientY / innerHeight) * 2 + 1,
    };
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="relative w-full h-[460px] md:h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Soft Radial Glow */}
      <div className="absolute inset-0 bg-radial from-red-500/15 via-red-950/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10 transform scale-90"></div>

      <Canvas
        camera={{ position: [0, 0.4, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 8, 5]} intensity={1.4} color="#FFFFFF" castShadow />
        <directionalLight position={[-5, 3, -2]} intensity={0.6} color="#FF9800" />
        <pointLight position={[0, -2, 2]} intensity={0.5} color="#B92025" />

        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
          <RobotModel mousePosition={mousePosition} isHovered={isHovered} />
        </Float>

        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
