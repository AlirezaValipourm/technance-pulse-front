"use client"
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { FC, useEffect } from "react";
import { IAnimatedCounterProps } from "./AnimatedCounter.type";

export const AnimatedCounter: FC<IAnimatedCounterProps> = ({ from, to, duration = 1.5, className, shouldStart = true }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const formatted = useTransform(rounded, (latest) =>
    new Intl.NumberFormat("en-US").format(latest)
  );

  useEffect(() => {
    if (!shouldStart) return;
    
    const controls = animate(count, to, {
      duration: duration,
      ease: "linear",
    });

    return controls.stop;
  }, [count, to, shouldStart, duration]);

  return <motion.div className={className}>{formatted}</motion.div>;
}; 