"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";

function Particles({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const mesh = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(800 * 3);
    for (let i = 0; i < 800 * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.y += 0.001;
    mesh.current.position.x += (mouse.current.x * 2 - mesh.current.position.x) * 0.02;
    mesh.current.position.y += (mouse.current.y * 2 - mesh.current.position.y) * 0.02;
  });

  return (
    <points ref={mesh} geometry={geo}>
      <pointsMaterial color="#ffffff" size={0.05} />
    </points>
  );
}

export default function HeroSection() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5);
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section style={{ position: "relative", width: "100%", height: "100vh", backgroundColor: "#0a0a0a" }}>
      <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
        <Canvas
          camera={{ position: [0, 0, 5] }}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        >
          <Particles mouse={mouse} />
        </Canvas>
      </div>

      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
        pointerEvents: "none",
      }}>
        <motion.h1
          style={{ fontSize: "48px", fontWeight: "bold", color: "white", maxWidth: "640px", lineHeight: 1.2 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          From Raw Data to Intelligence
        </motion.h1>

        <motion.p
          style={{ marginTop: "16px", fontSize: "18px", color: "#a1a1aa", maxWidth: "448px" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Xai turns noise into insight, automatically.
        </motion.p>
      </div>
    </section>
  );
}
