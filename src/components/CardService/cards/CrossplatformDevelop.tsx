/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";

const t = { duration: 0.3, ease: "easeInOut" as const };

const containerVariants = {
  rest: { x: 68, y: 150 },
  hover: { x: -15, y: 120 },
};

const slice1 = {
  rest: { x: 0, y: -65, rotate: 0, scale: 1 },
  hover: { x: 0, y: -65, rotate: 11, scale: 1 },
};

const slice2 = {
  rest: { x: 120, y: -125, rotate: 0, scale: 1 },
  hover: { x: 120, y: -125, rotate: -13, scale: 1 },
};

const slice3 = {
  rest: { x: 180, y: 10, rotate: 15, scale: 1 },
  hover: { x: 170, y: 10, rotate: 15, scale: 1 },
};

export const CrossplatformDevelop = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={t}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/crossplatformDevelop/1.png"
        srcSet="/serviceCards/crossplatformDevelop/1-2x.png 2x"
        variants={slice1}
        transition={t}
        style={{ zIndex: 1 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/crossplatformDevelop/2.png"
        srcSet="/serviceCards/crossplatformDevelop/2-2x.png 2x"
        variants={slice2}
        transition={t}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />

      {/* Слой 3 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/crossplatformDevelop/3.png"
        srcSet="/serviceCards/crossplatformDevelop/3-2x.png 2x"
        variants={slice3}
        transition={t}
        style={{ zIndex: 3 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
