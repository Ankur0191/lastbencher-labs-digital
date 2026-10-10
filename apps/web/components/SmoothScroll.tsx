"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.085, wheelMultiplier: 0.9, smoothWheel: true, syncTouch: false }}
    >
      {children}
    </ReactLenis>
  );
}
