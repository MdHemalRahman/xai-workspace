"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  { icon: "⬡", title: "Ingest Data", description: "Connect any data source instantly" },
  { icon: "◈", title: "Analyze with AI", description: "Xai processes patterns in real time" },
  { icon: "◎", title: "Generate Insight", description: "Actionable intelligence, delivered" },
];

export default function InsightFlow() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center py-24 px-6"
    >
      <div className="relative flex flex-col gap-20 max-w-lg w-full">
        {/* GSAP scroll line */}
        <div className="absolute left-[19px] top-0 w-[2px] h-full bg-zinc-800">
          <div ref={lineRef} className="w-full bg-white" style={{ height: "0%" }} />
        </div>

        {stages.map(({ icon, title, description }, i) => (
          <div
            key={title}
            className="flex items-start gap-6 pl-12 relative"
          >
            {/* dot on the line */}
            <div className="absolute left-[11px] top-1 w-[18px] h-[18px] rounded-full bg-white border-4 border-[#0a0a0a] z-10" />

            <div
              className="w-full rounded-xl p-5"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              <div className="text-2xl mb-2">{icon}</div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-1 text-zinc-400 text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
