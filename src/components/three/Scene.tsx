'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Line } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Network Node ─── */
function NetworkNode({ position, delay = 0 }: { position: [number, number, number]; delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime + delay;
    const intensity = 0.5 + Math.sin(t * 1.5) * 0.5;
    meshRef.current.scale.setScalar(0.8 + Math.sin(t * 2) * 0.2);
    const mat = meshRef.current.material as THREE.MeshStandardMaterial;
    if (mat) {
      mat.emissiveIntensity = intensity * 0.8;
      mat.opacity = 0.7 + intensity * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.06, 12, 12]} />
      <meshStandardMaterial
        color="#8b5cf6"
        emissive="#8b5cf6"
        emissiveIntensity={0.6}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

/* ─── Connection Line ─── */
function Connection({ start, end }: { start: [number, number, number]; end: [number, number, number] }) {
  return (
    <Line
      points={[start, end]}
      color="#ffffff"
      lineWidth={0.5}
      transparent
      opacity={0.15}
    />
  );
}

/* ─── Core Wireframe ─── */
function CoreWireframe() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.05}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
}

/* ─── Floating Particles ─── */
function FloatingParticles({ count = 60 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  });

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        color="#8b5cf6"
        size={0.03}
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── Mouse Camera Response ─── */
function CameraRig() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    state.camera.position.x += (mouse.current.x * 0.5 - state.camera.position.x) * 0.02;
    state.camera.position.y += (-mouse.current.y * 0.3 - state.camera.position.y) * 0.02;
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ─── Full Scene ─── */
function IntelligenceCore({ isMobile }: { isMobile: boolean }) {
  // Generate random nodes across a wide background area
  const numNodes = isMobile ? 20 : 40;
  const [nodes] = useState(() => {
    const arr: [number, number, number][] = [];
    for (let i = 0; i < numNodes; i++) {
      // Spread nodes wide across X and Y, with varying Z depth
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 10 - 5; // pushed slightly back
      arr.push([x, y, z]);
    }
    return arr;
  });

  // Connections between close nodes
  const connections = useMemo(() => {
    const conns: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.sqrt(
          (nodes[i][0] - nodes[j][0]) ** 2 +
          (nodes[i][1] - nodes[j][1]) ** 2 +
          (nodes[i][2] - nodes[j][2]) ** 2
        );
        // Connect if within a certain distance
        if (dist < 4.5) conns.push([i, j]);
      }
    }
    return conns;
  }, [nodes]);

  // Group reference for slow ambient rotation
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.05;
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[-5, -3, 3]} intensity={0.3} color="#ffffff" />

      <group ref={groupRef} position={[-2, 0, -2]}>
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <CoreWireframe />
        </Float>
        
        {/* Network Nodes */}
        {nodes.map((pos, i) => (
          <NetworkNode key={i} position={pos} delay={i * 0.3} />
        ))}

        {/* Connections */}
        {connections.map(([a, b], i) => (
          <Connection key={i} start={nodes[a]} end={nodes[b]} />
        ))}
      </group>

      <FloatingParticles count={isMobile ? 50 : 150} />
      <Stars radius={25} depth={40} count={isMobile ? 150 : 300} factor={2} saturation={0} fade speed={0.5} />
      {!isMobile && <CameraRig />}
    </>
  );
}

/* ─── CSS Fallback ─── */
function CSSFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Orbiting rings */}
        <div className="absolute inset-0 border border-accent/10 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute inset-4 border border-accent/15 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        <div className="absolute inset-8 border border-accent/20 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
        {/* Center glow */}
        <div className="absolute inset-16 rounded-full bg-accent/5 blur-xl" />
        <div className="absolute inset-20 rounded-full bg-accent/10 blur-lg" />
        {/* Dots */}
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <div
            key={deg}
            className="absolute w-2 h-2 rounded-full bg-accent/60"
            style={{
              top: `${50 + 45 * Math.sin((deg * Math.PI) / 180)}%`,
              left: `${50 + 45 * Math.cos((deg * Math.PI) / 180)}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Exported Scene Component ─── */
export default function Scene() {
  const [webglSupported, setWebglSupported] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebglSupported(false);

      // Check for reduced motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setWebglSupported(false);
      }

      // Check for low-powered device
      if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        setWebglSupported(false);
      }

      setIsMobile(window.innerWidth < 768);
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (!mounted) return <CSSFallback />;
  if (!webglSupported) return <CSSFallback />;

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <IntelligenceCore isMobile={isMobile} />
    </Canvas>
  );
}
