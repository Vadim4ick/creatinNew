/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";
import { layerTransition } from "@/shared/const/animations";

const containerVariants = {
  rest: { x: 107, y: 100 },
  hover: { x: 60, y: 90 },
};

const slice1 = {
  rest: { x: 0, y: -65, rotate: 0, scale: 1 },
  hover: { x: 0, y: -65, rotate: 13, scale: 1 },
};

const slice2 = {
  rest: { x: -20, y: 55, rotate: 0, scale: 1 },
  hover: { x: 10, y: 7, rotate: -16, scale: 1 },
};

export const NativeDevelop = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={layerTransition}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/nativeDevelop/1.png"
        srcSet="/serviceCards/nativeDevelop/1-2x.png 2x"
        variants={slice1}
        transition={layerTransition}
        style={{ zIndex: 1 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/nativeDevelop/2.png"
        srcSet="/serviceCards/nativeDevelop/2-2x.png 2x"
        variants={slice2}
        transition={layerTransition}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
