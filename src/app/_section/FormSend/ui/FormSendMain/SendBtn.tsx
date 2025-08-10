import { motion } from "framer-motion";
import cls from "./FormSend.module.scss";
import { springTransition } from "@/shared/lib";

// 2pt в px (96dpi): 2 * (96/72) ≈ 2.666
const PT_TO_PX = 96 / 72;
const FONT_PX = 15; // у тебя в .btn

const scaleOut = (FONT_PX - 2 * PT_TO_PX) / FONT_PX; // ≈ 0.822

export function SendBtn({ isValid }: { isValid: boolean }) {
  const btnVariants = {
    rest: {
      background: isValid ? "#204FF5" : "#303032",
      color: isValid ? "#fff" : "#bec0c6",
    },
    hover: isValid ? { background: "#0A3AE1", color: "#fff" } : {},
  };

  const textVariants = {
    rest: isValid ? { opacity: 1, scale: 1, y: 0 } : {},
    hover: isValid ? { opacity: 0, scale: scaleOut, y: -2 } : {}, // «отдаляем» и гасим
  };

  return (
    <motion.button
      disabled={!isValid}
      type="submit"
      className={cls.btn}
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={btnVariants}
      transition={springTransition}
    >
      <motion.span
        variants={textVariants}
        style={{ display: "inline-block", transformOrigin: "50% 50%" }}
        transition={springTransition}
      >
        Отправить
      </motion.span>
    </motion.button>
  );
}
