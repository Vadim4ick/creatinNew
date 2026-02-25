/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";
import { layerTransition } from "@/shared/const/animations";

const containerVariants = {
  rest: { x: 50, y: 130 },
  hover: { x: 50, y: 89 },
};

const slice1 = {
  rest: { x: -20, y: -65, rotate: 0, scale: 1 },
  hover: { x: -90, y: -65, rotate: 0, scale: 1 },
};

const slice2 = {
  rest: { x: -40, y: -125, rotate: 0, scale: 1 },
  hover: { x: -50, y: -53, rotate: -33, scale: 1 },
};

export const Tz = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={layerTransition}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/tz/1.png"
        srcSet="/serviceCards/tz/1-2x.png 2x"
        variants={slice1}
        transition={layerTransition}
        style={{ zIndex: 1 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/tz/2.png"
        srcSet="/serviceCards/tz/2-2x.png 2x"
        variants={slice2}
        transition={layerTransition}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
