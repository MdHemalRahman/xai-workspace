"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TorusKnot({ speed }: { speed: React.MutableRefObject<number> }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.003 + speed.current * 0.05;
    mesh.current.rotation.y += 0.005 + speed.current * 0.05;
  });

  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[1.2, 0.4, 128, 16]} />
      <meshBasicMaterial color="#ffffff" wireframe />
    </mesh>
  );
}

export default function WowMoment() {
  const sectionRef = useRef<HTMLElement>(null);
  const speed = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          speed.current = self.getVelocity() / 1000;
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-[#0a0a0a]">
      <Canvas camera={{ position: [0, 0, 5] }} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <TorusKnot speed={speed} />
      </Canvas>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.h2
          className="text-5xl font-bold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Intelligence in Motion
        </motion.h2>
      </div>
    </section>
  );
}
