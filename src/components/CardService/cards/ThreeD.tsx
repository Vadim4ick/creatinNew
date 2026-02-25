/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";
import { layerTransition } from "@/shared/const/animations";

const containerVariants = {
  rest: { x: 104, y: 102 },
  hover: { x: 45, y: 102 },
};

const slice1 = {
  rest: { x: 0, y: -65, rotate: 0, scale: 1 },
  hover: { x: 0, y: -65, rotate: 0, scale: 1 },
};

const slice2 = {
  rest: { x: -28, y: 13, rotate: 0, scale: 1 },
  hover: { x: -45, y: -13, rotate: 50, scale: 1 },
};

const slice3 = {
  rest: { x: 150, y: 95, rotate: 0, scale: 1 },
  hover: { x: 110, y: 95, rotate: 0, scale: 1 },
};

export const ThreeD = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={layerTransition}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/3d/1.png"
        srcSet="/serviceCards/3d/1-2x.png 2x"
        variants={slice1}
        transition={layerTransition}
        style={{ zIndex: 3 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/3d/2.png"
        srcSet="/serviceCards/3d/2-2x.png 2x"
        variants={slice2}
        transition={layerTransition}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />

      {/* Слой 3 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/3d/3.png"
        srcSet="/serviceCards/3d/3-2x.png 2x"
        variants={slice3}
        transition={layerTransition}
        style={{ zIndex: 4 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
