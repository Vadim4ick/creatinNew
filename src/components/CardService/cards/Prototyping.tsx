/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";

const t = { duration: 0.3, ease: "easeInOut" as const };

const containerVariants = {
  rest: { x: 45, y: 100 },
  hover: { x: 15, y: 80 },
};

const slice1 = {
  rest: { x: 100, y: -100, rotate: 0, scale: 1 },
  hover: { x: 87, y: -100, rotate: 0, scale: 1 },
};

const slice2 = {
  rest: { x: 137, y: 15, rotate: 0, scale: 1 },
  hover: { x: 120, y: 9, rotate: -15, scale: 1 },
};

const slice3 = {
  rest: { x: 17, y: -8, rotate: 0, scale: 1 },
  hover: { x: 17, y: -8, rotate: -10, scale: 1 },
};

export const Prototyping = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={t}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/prototyping/1.png"
        srcSet="/serviceCards/prototyping/1-2x.png 2x"
        variants={slice1}
        transition={t}
        style={{ zIndex: 1 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/prototyping/2.png"
        srcSet="/serviceCards/prototyping/2-2x.png 2x"
        variants={slice2}
        transition={t}
        style={{ zIndex: 3 }}
        alt=""
        draggable={false}
      />

      {/* Слой 3 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/prototyping/3.png"
        srcSet="/serviceCards/prototyping/3-2x.png 2x"
        variants={slice3}
        transition={t}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
