export { classNames } from "./classNames/classNames";

// один раз задаём пружину
export const springTransition = {
  type: "spring",
  mass: 1,
  stiffness: 142.2,
  damping: 26.67,
} as const; // duration для spring не нужен, игнорируется

export const hexToRgba = (hex: string, alpha = 1) => {
  const cleanHex = hex.replace("#", "");
  const bigint = parseInt(cleanHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
