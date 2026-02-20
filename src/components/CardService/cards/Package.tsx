/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";

const t = { duration: 0.3, ease: "easeInOut" as const };

const containerVariants = {
  rest: { x: 90, y: 102 },
  hover: { x: 25, y: 80 },
};

const slice1 = {
  rest: { x: 5, y: -8, rotate: 0, scale: 1 },
  hover: { x: -25, y: -30, rotate: -15, scale: 1 },
};

const slice2 = {
  rest: { x: 165, y: 60, rotate: 0, scale: 1 },
  hover: { x: 165, y: 60, rotate: 0, scale: 1 },
};

const slice3 = {
  rest: { x: 90, y: 122, rotate: 0, scale: 1 },
  hover: { x: 80, y: 135, rotate: -23, scale: 1 },
};

const slice4 = {
  rest: { x: 38, y: -52, rotate: 0, scale: 1 },
  hover: { x: 38, y: -52, rotate: -13, scale: 1 },
};

const slice5 = {
  rest: { x: 32, y: 60, rotate: 0, scale: 1 },
  hover: { x: 20, y: 43, rotate: 0, scale: 1 },
};

export const Package = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={t}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/package/1.png"
        srcSet="/serviceCards/package/1-2x.png 2x"
        variants={slice1}
        transition={t}
        style={{ zIndex: 1 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/package/2.png"
        srcSet="/serviceCards/package/2-2x.png 2x"
        variants={slice2}
        transition={t}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />

      {/* Слой 3 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/package/3.png"
        srcSet="/serviceCards/package/3-2x.png 2x"
        variants={slice3}
        transition={t}
        style={{ zIndex: 6 }}
        alt=""
        draggable={false}
      />

      {/* Слой 4 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/package/4.png"
        srcSet="/serviceCards/package/4-2x.png 2x"
        variants={slice4}
        transition={t}
        style={{ zIndex: 5 }}
        alt=""
        draggable={false}
      />

      {/* Слой 5 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/package/5.png"
        srcSet="/serviceCards/package/5-2x.png 2x"
        variants={slice5}
        transition={t}
        style={{ zIndex: 3 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
