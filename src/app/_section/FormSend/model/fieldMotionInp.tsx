import { hexToRgba, springTransition } from "@/shared/lib";

type Colors = {
  hover?: string;
  focus?: string;
  error?: string;
  idle?: string;
};

/** Возвращает props для motion.* элементов с плавной анимацией "бордера" через boxShadow */
export const fieldMotionInp = (hasError?: boolean, colors: Colors = {}) => {
  const {
    hover = "#7f7f7f",
    focus = "#204ff5",
    error = "#ea3939",
    idle = "rgba(0,0,0,0.1)",
  } = colors;

  const shadow = (color: string) =>
    `0 0 0 1px ${color.startsWith("#") ? hexToRgba(color) : color}`;

  return {
    initial: { boxShadow: shadow(idle) },
    whileHover: { boxShadow: shadow(hover) },
    whileFocus: { boxShadow: shadow(focus) },
    transition: springTransition,
    animate: hasError
      ? { boxShadow: shadow(error) }
      : { boxShadow: shadow(idle) },
  };
};
