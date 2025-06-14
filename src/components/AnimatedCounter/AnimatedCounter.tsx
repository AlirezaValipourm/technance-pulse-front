import { FC, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { IAnimatedCounterProps } from "./AnimatedCounter.type";

export const AnimatedCounter: FC<IAnimatedCounterProps> = ({ from, to, className }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const formatted = useTransform(rounded, (latest) =>
    new Intl.NumberFormat("en-US").format(latest)
  );

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 1.5,
      ease: "linear",
    });

    return controls.stop;
  }, [count, to]);

  return <motion.div className={className}>{formatted}</motion.div>;
}; 