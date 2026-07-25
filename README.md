# Xai Intelligence Workspace

A high-performance, animation-driven product showcase built to demonstrate how raw data transforms into actionable intelligence — through immersive 3D visuals, scroll-driven interactions, and fluid UI choreography.

---

## Project Overview

Xai Intelligence Workspace is a single-page Next.js application composed of four full-screen sections:

- **HeroSection** — 3D particle field with live mouse tracking
- **InsightFlow** — Scroll-driven vertical timeline of the Xai pipeline
- **Dashboard** — Mock product UI with stat cards and model performance chart
- **WowMoment** — Rotating TorusKnot wireframe with scroll-reactive speed

The goal is to communicate a complex AI product through motion and visual density rather than static content.

---

## Tech Stack

| Technology | Version | Role |
|---|---|---|
| Next.js | 14 | App framework, routing, SSR |
| Tailwind CSS | 4 | Utility-first dark theme styling |
| Framer Motion | latest | UI entrance animations and choreography |
| GSAP + ScrollTrigger | latest | Scroll-driven animation engine |
| React Three Fiber | latest | Declarative Three.js in React |
| Three.js | latest | 3D geometry, particles, materials |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Assembles all sections
│   ├── layout.tsx        # Root layout with dark background
│   └── globals.css       # Base styles, background #0a0a0a
├── components/
│   ├── Hero/
│   │   └── HeroSection.tsx     # Particle system + mouse interaction
│   ├── InsightFlow/
│   │   └── InsightFlow.tsx     # Scroll timeline + GSAP line
│   ├── Dashboard/
│   │   └── Dashboard.tsx       # Mock product UI
│   └── WowMoment/
│       └── WowMoment.tsx       # TorusKnot + scroll speed
└── lib/
    └── data.ts           # Centralized mock data
```

---

## Animation Decisions

### Three.js (via React Three Fiber) — for 3D and particles

Three.js gives direct access to the WebGL pipeline, making it the right tool for rendering 800+ particles and complex geometries like TorusKnot at 60fps. React Three Fiber wraps it in a declarative React API — so geometry, materials, and frame loops (`useFrame`) compose naturally alongside regular components without dropping into imperative WebGL code.

### GSAP ScrollTrigger — for scroll-driven animation

GSAP's ScrollTrigger is purpose-built for mapping scroll position to animation progress. It runs outside React's render cycle, which means zero re-renders during scroll. This makes it ideal for the growing vertical line in InsightFlow and the scroll-velocity-to-rotation mapping in WowMoment — both require precise, performant scrubbing that CSS or Framer Motion's scroll utilities can't match at this fidelity.

### Framer Motion — for UI choreography

Framer Motion handles everything that lives in the DOM — text fade-ins, card stagger entrances, viewport-triggered animations. Its `whileInView`, `initial`, and `animate` props keep animation logic co-located with the component, making intent immediately readable. It's optimized for layout animations and gesture states, which is exactly what stat cards and text overlays need — not raw WebGL control.

---

## License

MIT
