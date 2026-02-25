/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";
import { layerTransition } from "@/shared/const/animations";

const containerVariants = {
  rest: { x: 55, y: 102 },
  hover: { x: 47, y: 65 },
};

const slice1 = {
  rest: { x: 85, y: -65, rotate: 0, scale: 1 },
  hover: { x: 75, y: -65, rotate: -10, scale: 1 },
};

const slice2 = {
  rest: { x: -40, y: -40, rotate: 0, scale: 1 },
  hover: { x: -87, y: -40, rotate: 20, scale: 1 },
};

export const Naming = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={layerTransition}
    >
      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/naming/2.png"
        srcSet="/serviceCards/naming/2-2x.png 2x"
        variants={slice2}
        transition={layerTransition}
        style={{ zIndex: 1 }}
        alt=""
        draggable={false}
      />

      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/naming/1.png"
        srcSet="/serviceCards/naming/1-2x.png 2x"
        variants={slice1}
        transition={layerTransition}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
