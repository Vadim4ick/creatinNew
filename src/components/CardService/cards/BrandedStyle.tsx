/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";
import { layerTransition } from "@/shared/const/animations";

const containerVariants = {
  rest: { x: 100, y: 85 },
  hover: { x: 35, y: 35 },
};

const slice1 = {
  rest: { x: 0, y: -65, rotate: 0, scale: 1 },
  hover: { x: 0, y: -65, rotate: 25, scale: 1 },
};

const slice2 = {
  rest: { x: -65, y: 20, rotate: 0, scale: 1 },
  hover: { x: -50, y: 45, rotate: -20, scale: 1 },
};

const slice3 = {
  rest: { x: 88, y: 57, rotate: 0, scale: 1 },
  hover: { x: 95, y: 102, rotate: -15, scale: 1 },
};

export const BrandedStyle = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={layerTransition}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/brandedStyle/1.png"
        srcSet="/serviceCards/brandedStyle/1-2x.png 2x"
        variants={slice1}
        transition={layerTransition}
        style={{ zIndex: 1 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/brandedStyle/2.png"
        srcSet="/serviceCards/brandedStyle/2-2x.png 2x"
        variants={slice2}
        transition={layerTransition}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />

      {/* Слой 3 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/brandedStyle/3.png"
        srcSet="/serviceCards/brandedStyle/3-2x.png 2x"
        variants={slice3}
        transition={layerTransition}
        style={{ zIndex: 3 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
