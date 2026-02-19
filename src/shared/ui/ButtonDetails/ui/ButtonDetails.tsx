import { motion } from "framer-motion";
import cls from "./style.module.scss";
import { classNames, springTransition } from "@/shared/lib";
import { useMedia } from "@/shared/hooks/useMedia";
import { memo } from "react";

const btnVariants = { rest: {}, hover: {} };

// «Пустой» левый слот: ширина 0 → 52 (44px круг + ~8px внутренний зазор)
const leftSlotVariants = {
  rest: { width: 0 },
  hover: { width: 52 },
};

// Сам левый кружок внутри слота — лёгкое появление
const leftDotVariants = {
  rest: { x: -35, opacity: 0 },
  hover: { x: 0, opacity: 1 },
};

type Variant = "default" | "white" | "dark";

// Правый слот — схлопывается при ховере
const rightSlotVariants = {
  rest: { width: 52 },
  hover: { width: 0 },
};

// Кружок внутри — просто исчезает по opacity, x не нужен
const rightDotVariants = {
  rest: { x: 0, opacity: 1 },
  hover: { x: 44, opacity: 0 },
};
export const ButtonDetails = memo(
  ({
    className = "",
    Icon,
    onClick,
    text,
    variant = "default",
    leftColor,
    mobileEnd = false,
  }: {
    className?: string;
    Icon: () => JSX.Element;
    onClick?: () => void;
    text: string;
    variant?: Variant;
    leftColor?: string;
    mobileEnd?: boolean;
  }) => {
    const isMobile = useMedia("(max-width: 768px)");

    return (
      <motion.button
        onClick={onClick}
        className={classNames(`${cls.btn} ${className}`, {}, [cls[variant]])}
        initial="rest"
        animate={isMobile.matches && mobileEnd ? "hover" : "rest"}
        whileHover="hover"
        variants={btnVariants}
        transition={springTransition}
        type="button"
      >
        {/* Левый слот (занимает место при ховере) */}
        <motion.div
          className={cls.leftSlot}
          variants={leftSlotVariants}
          transition={springTransition}
          aria-hidden
        >
          <motion.div
            style={leftColor ? { background: leftColor } : undefined}
            className={cls.btnArrow}
            variants={leftDotVariants}
            transition={springTransition}
          >
            <Icon />
          </motion.div>
        </motion.div>

        {/* Текст остаётся левым и сдвигается естественно, когда растёт leftSlot */}
        <span className={cls.btnText}>{text}</span>

        {/* Правый слот */}
        <motion.div
          className={cls.rightSlot}
          variants={rightSlotVariants}
          transition={springTransition}
        >
          <motion.div
            className={cls.btnArrowRight}
            variants={rightDotVariants}
            transition={springTransition}
          >
            <Icon />
          </motion.div>
        </motion.div>
      </motion.button>
    );
  },
);
