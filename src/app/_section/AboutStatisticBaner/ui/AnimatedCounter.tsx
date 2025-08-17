"use client";

import { animate, motion, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  from?: number;
  to: number;
  duration?: number;
};

export const AnimatedCounter = ({
  from = 0,
  to,
  duration = 1,
}: CounterProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(from);

  const count = useMotionValue(from);

  // подписка на обновления
  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut", // плавное завершение
        onUpdate: (latest) => {
          setDisplay(Math.round(latest));
        },
      });

      return () => controls.stop();
    }
  }, [count, duration, inView, to]);

  return <motion.span ref={ref}>{display}</motion.span>;
};
