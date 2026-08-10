'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const MeshPlane = ({ isMobile }: { isMobile: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const geomRef = useRef<THREE.PlaneGeometry>(null);

  const segments = isMobile ? 32 : 64;

  useFrame((state) => {
    if (!geomRef.current || !meshRef.current) return;

    const time = state.clock.getElapsedTime();
    const positions = geomRef.current.attributes.position;
    
    // Mouse coordinates in world space (approximate)
    const mouseX = (state.pointer.x * state.viewport.width) / 2;
    const mouseY = (state.pointer.y * state.viewport.height) / 2;

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      
      // Distance from mouse
      const dist = Math.sqrt(Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2));
      
      // Base wave
      let z = Math.sin(x * 0.5 + time) * Math.cos(y * 0.5 + time) * 0.5;
      
      // Mouse interaction: push vertices up if close to mouse (only on desktop)
      if (!isMobile && dist < 5) {
        // the closer, the higher
        z += (5 - dist) * 0.5;
      }

      positions.setZ(i, z);
    }
    
    positions.needsUpdate = true;
    
    // Slowly rotate the entire mesh to give it a dynamic feel
    meshRef.current.rotation.x = -Math.PI / 3 + Math.sin(time * 0.1) * 0.1;
    meshRef.current.rotation.z = time * 0.05;
  });

  return (
    <mesh ref={meshRef} position={[0, -2, -5]} rotation={[-Math.PI / 3, 0, 0]}>
      <planeGeometry ref={geomRef} args={[40, 40, segments, segments]} />
      <meshBasicMaterial
        color="#3b82f6"
        wireframe={true}
        transparent={true}
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

export default function GlobalMeshBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-bg-primary overflow-hidden">
      <Canvas 
        camera={{ position: [0, 2, 5], fov: 60 }} 
        gl={{ antialias: false, alpha: true }}
        dpr={isMobile ? 1 : [1, 2]}
      >
        <fog attach="fog" args={['#050505', 5, 20]} />
        <MeshPlane isMobile={isMobile} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/20 via-transparent to-bg-primary pointer-events-none" />
    </div>
  );
}
