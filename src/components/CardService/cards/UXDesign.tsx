/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";

const t = { duration: 0.3, ease: "easeInOut" as const };

const containerVariants = {
  rest: { x: 61, y: 140 },
  hover: { x: 29, y: 110 },
};

const slice1 = {
  rest: { x: 0, y: -65, rotate: 0, scale: 1 },
  hover: { x: 0, y: -65, rotate: 0, scale: 1 },
};

const slice2 = {
  rest: { x: -30, y: -108, rotate: 0, scale: 1 },
  hover: { x: -20, y: -100, rotate: -8, scale: 1 },
};

const slice3 = {
  rest: { x: 155, y: 110, rotate: 0, scale: 1 },
  hover: { x: 145, y: 113, rotate: 31, scale: 1 },
};

export const UXDesign = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={t}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/UXDesign/1.png"
        srcSet="/serviceCards/UXDesign/1-2x.png 2x"
        variants={slice1}
        transition={t}
        style={{ zIndex: 1 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/UXDesign/2.png"
        srcSet="/serviceCards/UXDesign/2-2x.png 2x"
        variants={slice2}
        transition={t}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />

      {/* Слой 3 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/UXDesign/3.png"
        srcSet="/serviceCards/UXDesign/3-2x.png 2x"
        variants={slice3}
        transition={t}
        style={{ zIndex: 3 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
