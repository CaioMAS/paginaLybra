"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale";
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05, // trigger when 5% of the element is visible
        rootMargin: "0px 0px -40px 0px", // trigger slightly offset from viewport bottom
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-left":
        return "reveal-left";
      case "fade-right":
        return "reveal-right";
      case "scale":
        return "reveal-scale";
      case "fade-up":
      default:
        return "reveal";
    }
  };

  const getDelayClass = () => {
    if (delay === 100) return "delay-1";
    if (delay === 200) return "delay-2";
    if (delay === 300) return "delay-3";
    if (delay === 400) return "delay-4";
    if (delay === 500) return "delay-5";
    return "";
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${isRevealed ? "reveal-active" : ""} ${getDelayClass()} ${className}`}
      style={{ width: "100%" }}
    >
      {children}
    </div>
  );
}
