/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";
import { layerTransition } from "@/shared/const/animations";

// Контейнер двигаешь как хочешь (у тебя было x:55 -> 0)
const containerVariants = {
  rest: { x: 40, y: 80 },
  hover: { x: 15, y: 50 },
};

// ВАЖНО: hover = собранный пирог (все в центре)
const slice1 = {
  rest: { x: -1, y: 0, rotate: 0, scale: 1 },
  hover: { x: 0, y: 0, rotate: 0, scale: 1 },
};

const slice2 = {
  rest: { x: 100, y: -55, rotate: 7, scale: 1 },
  hover: { x: 74, y: -17, rotate: 0, scale: 1 },
};

const slice3 = {
  rest: { x: 50, y: -50, rotate: -15, scale: 1 },
  hover: { x: 70, y: 11, rotate: 0, scale: 1 },
};

export const BrendAnalitics = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={layerTransition}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/brendAnalitics/1.png"
        srcSet="/serviceCards/brendAnalitics/1-2x.png 2x"
        variants={slice1}
        transition={layerTransition}
        style={{ zIndex: 3 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/brendAnalitics/2.png"
        srcSet="/serviceCards/brendAnalitics/2-2x.png 2x"
        variants={slice2}
        transition={layerTransition}
        style={{ zIndex: 1 }}
        alt=""
        draggable={false}
      />

      {/* Слой 3 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/brendAnalitics/3.png"
        srcSet="/serviceCards/brendAnalitics/3-2x.png 2x"
        variants={slice3}
        transition={layerTransition}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
