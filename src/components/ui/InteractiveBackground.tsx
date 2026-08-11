'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleNetwork = ({ isMobile }: { isMobile: boolean }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = isMobile ? 300 : 800;

  const [positions, setPositions] = useState<Float32Array | null>(null);
  const [colors, setColors] = useState<Float32Array | null>(null);

  useEffect(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const color = new THREE.Color();
    
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
      
      const isAccent = Math.random() > 0.6;
      color.setHex(isAccent ? 0x3b82f6 : 0x1a2c5b);
      
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    setPositions(pos);
    setColors(col);
  }, [particleCount]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    // Slow, constant rotation
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;

    // Subtle parallax effect tracking mouse pointer (skip on mobile)
    if (!isMobile) {
      const targetX = state.pointer.x * 0.3;
      const targetY = state.pointer.y * 0.3;
      
      pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.05;
      pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.05;
    }
  });

  if (!positions || !colors) return null;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default function InteractiveBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setIsMounted(true);
      setIsMobile(window.innerWidth < 768);
    }
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => {
      mounted = false;
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none bg-bg-primary overflow-hidden rounded-none mix-blend-screen">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }} 
        gl={{ antialias: false, alpha: true }}
        dpr={isMobile ? 1 : [1, 2]} // Cap at 1 for mobile to save performance
      >
        <fog attach="fog" args={['#050505', 2, 8]} />
        <ParticleNetwork isMobile={isMobile} />
      </Canvas>
      {/* Overlay to ensure bottom fades out properly */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] pointer-events-none" />
    </div>
  );
}
