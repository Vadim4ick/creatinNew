import { motion } from "framer-motion";
import { BtnArrowThird } from "@/shared/icons/BtnArrowThird";
import cls from "./style.module.scss";
import { springTransition } from "@/shared/lib";
import { useRouter } from "next/navigation";

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

// Правый кружок — уезжает и растворяется
const rightDotVariants = {
  rest: { x: 0, opacity: 1 },
  hover: { x: 35, opacity: 0 },
};

export function MoreBtn() {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.push("/services/1")}
      className={cls.btn}
      initial="rest"
      animate="rest"
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
          className={cls.btnArrow}
          variants={leftDotVariants}
          transition={springTransition}
        >
          <BtnArrowThird />
        </motion.div>
      </motion.div>

      {/* Текст остаётся левым и сдвигается естественно, когда растёт leftSlot */}
      <span className={cls.btnText}>Подробнее</span>

      {/* Правый кружок */}
      <motion.div
        className={cls.btnArrowRight}
        variants={rightDotVariants}
        transition={springTransition}
        aria-hidden
      >
        <BtnArrowThird />
      </motion.div>
    </motion.button>
  );
}
