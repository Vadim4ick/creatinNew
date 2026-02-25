/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";
import { layerTransition } from "@/shared/const/animations";

const containerVariants = {
  rest: { x: 35, y: 102 },
  hover: { x: 35, y: 102 },
};

const slice1 = {
  rest: { x: 0, y: -65, rotate: 0, scale: 1 },
  hover: { x: -45, y: -65, rotate: 8, scale: 1 },
};

const slice2 = {
  rest: { x: 120, y: -82, rotate: 0, scale: 1 },
  hover: { x: 113, y: -82, rotate: 0, scale: 1 },
};

export const OnlineStore = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={layerTransition}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/onlineStore/1.png"
        srcSet="/serviceCards/onlineStore/1-2x.png 2x"
        variants={slice1}
        transition={layerTransition}
        style={{ zIndex: 1 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/onlineStore/2.png"
        srcSet="/serviceCards/onlineStore/2-2x.png 2x"
        variants={slice2}
        transition={layerTransition}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
