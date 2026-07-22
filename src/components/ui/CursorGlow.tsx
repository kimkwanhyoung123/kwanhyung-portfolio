"use client";

import { useEffect, useRef } from "react";

const SIZE = 620; // px — diameter of the light
const EASE = 0.14; // 0..1, how quickly the light catches up to the pointer

/**
 * A soft accent-coloured light that trails the pointer.
 *
 * Purely decorative, and deliberately unobtrusive:
 * - never captures pointer events, and sits behind all content
 * - does nothing on touch / coarse-pointer devices (no cursor to follow)
 * - stays off when the visitor prefers reduced motion
 * - position is written straight to the node, so moving the mouse never
 *   triggers a React re-render
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (!canHover.matches || prefersReducedMotion.matches) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let started = false;

    const draw = () => {
      frame = 0;
      currentX += (targetX - currentX) * EASE;
      currentY += (targetY - currentY) * EASE;
      el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      if (
        Math.abs(targetX - currentX) > 0.5 ||
        Math.abs(targetY - currentY) > 0.5
      ) {
        frame = requestAnimationFrame(draw);
      }
    };

    const handleMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!started) {
        // Appear where the pointer already is, rather than sliding in from 0,0.
        started = true;
        currentX = targetX;
        currentY = targetY;
        el.style.opacity = "1";
      }
      if (!frame) frame = requestAnimationFrame(draw);
    };

    const handleLeave = () => {
      el.style.opacity = "0";
    };
    const handleEnter = () => {
      if (started) el.style.opacity = "1";
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("pointerleave", handleLeave);
    document.addEventListener("pointerenter", handleEnter);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerleave", handleLeave);
      document.removeEventListener("pointerenter", handleEnter);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    // The clipping wrapper matters: the light is wider than the viewport near
    // the edges, and without it the overhang can produce a scrollbar.
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        ref={ref}
        className="absolute left-0 top-0 opacity-0 transition-opacity duration-700 will-change-transform"
        style={{
          width: SIZE,
          height: SIZE,
          marginLeft: -SIZE / 2,
          marginTop: -SIZE / 2,
          background:
            "radial-gradient(circle closest-side, rgba(72, 214, 196, 0.13), rgba(72, 214, 196, 0.05) 45%, transparent 72%)",
        }}
      />
    </div>
  );
}
