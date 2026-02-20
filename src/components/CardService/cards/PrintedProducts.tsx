/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";

const t = { duration: 0.3, ease: "easeInOut" as const };

const containerVariants = {
  rest: { x: 63, y: 102 },
  hover: { x: 0, y: 80 },
};

const slice1 = {
  rest: { x: 0, y: -65, rotate: 0, scale: 1 },
  hover: { x: 0, y: -65, rotate: -11, scale: 1 },
};

const slice2 = {
  rest: { x: -35, y: -135, rotate: 0, scale: 1 },
  hover: { x: -35, y: -135, rotate: 66, scale: 1 },
};

const slice3 = {
  rest: { x: 105, y: 85, rotate: 0, scale: 1 },
  hover: { x: 105, y: 100, rotate: 31, scale: 1 },
};

export const PrintedProducts = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={t}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/printedProducts/1.png"
        srcSet="/serviceCards/printedProducts/1-2x.png 2x"
        variants={slice1}
        transition={t}
        style={{ zIndex: 3 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/printedProducts/2.png"
        srcSet="/serviceCards/printedProducts/2-2x.png 2x"
        variants={slice2}
        transition={t}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />

      {/* Слой 3 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/printedProducts/3.png"
        srcSet="/serviceCards/printedProducts/3-2x.png 2x"
        variants={slice3}
        transition={t}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
