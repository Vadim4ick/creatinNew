/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";
import { layerTransition } from "@/shared/const/animations";

const containerVariants = {
  rest: { x: 85, y: 102 },
  hover: { x: 30, y: 65 },
};

const slice1 = {
  rest: { x: 0, y: 0, rotate: 0, scale: 1 },
  hover: { x: 0, y: 0, rotate: 0, scale: 1 },
};

const slice2 = {
  rest: { x: 10, y: -20, rotate: 0, scale: 1 },
  hover: { x: 10, y: -40, rotate: 0, scale: 1 },
};

const slice3 = {
  rest: { x: 35, y: -30, rotate: 0, scale: 1 },
  hover: { x: 35, y: -60, rotate: 0, scale: 1 },
};

const slice4 = {
  rest: { x: 45, y: -45, rotate: 0, scale: 1 },
  hover: { x: 45, y: -90, rotate: 0, scale: 1 },
};

export const PlatformBrend = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={layerTransition}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/platformBrend/1.png"
        srcSet="/serviceCards/platformBrend/1-2x.png 2x"
        variants={slice1}
        transition={layerTransition}
        style={{ zIndex: 1 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/platformBrend/2.png"
        srcSet="/serviceCards/platformBrend/2-2x.png 2x"
        variants={slice2}
        transition={layerTransition}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />

      {/* Слой 3 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/platformBrend/3.png"
        srcSet="/serviceCards/platformBrend/3-2x.png 2x"
        variants={slice3}
        transition={layerTransition}
        style={{ zIndex: 3 }}
        alt=""
        draggable={false}
      />

      {/* Слой 4 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/platformBrend/4.png"
        srcSet="/serviceCards/platformBrend/4-2x.png 2x"
        variants={slice4}
        transition={layerTransition}
        style={{ zIndex: 4 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
