/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";
import { layerTransition } from "@/shared/const/animations";

const containerVariants = {
  rest: { x: 45, y: 102 },
  hover: { x: 47, y: 102 },
};

const slice1 = {
  rest: { x: 0, y: -65, rotate: 0, scale: 1 },
  hover: { x: -75, y: -110, rotate: -15, scale: 1 },
};

const slice2 = {
  rest: { x: 38, y: -52, rotate: 0, scale: 1 },
  hover: { x: 38, y: -52, rotate: 0, scale: 1 },
};

const slice3 = {
  rest: { x: 54, y: -52, rotate: 0, scale: 1 },
  hover: { x: 54, y: -52, rotate: 0, scale: 1 },
};

export const ADBook = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={layerTransition}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/books/1.png"
        srcSet="/serviceCards/books/1-2x.png 2x"
        variants={slice1}
        transition={layerTransition}
        style={{ zIndex: 1 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/books/2.png"
        srcSet="/serviceCards/books/2-2x.png 2x"
        variants={slice2}
        transition={layerTransition}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />

      {/* Слой 3 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/books/3.png"
        srcSet="/serviceCards/books/3-2x.png 2x"
        variants={slice3}
        transition={layerTransition}
        style={{ zIndex: 3 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
