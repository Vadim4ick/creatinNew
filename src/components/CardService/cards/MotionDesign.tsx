/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";
import { layerTransition } from "@/shared/const/animations";

const containerVariants = {
  rest: { x: 45, y: 132 },
  hover: { x: -40, y: 132 },
};

const slice1 = {
  rest: { x: 40, y: -100, rotate: 10, scale: 1 },
  hover: { x: 75, y: -100, rotate: 10, scale: 1 },
};

const slice2 = {
  rest: { x: 104, y: -52, rotate: 0, scale: 1 },
  hover: { x: 104, y: -52, rotate: 0, scale: 1 },
};

export const MotionDesign = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={layerTransition}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/motionDesign/1.png"
        srcSet="/serviceCards/motionDesign/1-2x.png 2x"
        variants={slice1}
        transition={layerTransition}
        style={{ zIndex: 1 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/motionDesign/2.png"
        srcSet="/serviceCards/motionDesign/2-2x.png 2x"
        variants={slice2}
        transition={layerTransition}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
