import { FC, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
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
  }, [count, to, shouldStart]);

  return <motion.div className={className}>{formatted}</motion.div>;
}; 