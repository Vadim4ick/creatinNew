/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";
import { layerTransition } from "@/shared/const/animations";

const containerVariants = {
  rest: { x: 45, y: 102 },
  hover: { x: 45, y: 92 },
};

const slice1 = {
  rest: { x: 0, y: 10, rotate: 0, scale: 1 },
  hover: { x: -53, y: 16, rotate: -3, scale: 1 },
};

const slice2 = {
  rest: { x: 114, y: -121, rotate: 0, scale: 1 },
  hover: { x: 85, y: -75, rotate: -4, scale: 1 },
};

const slice3 = {
  rest: { x: 0, y: -145, rotate: 0, scale: 1 },
  hover: { x: -20, y: -135, rotate: -22, scale: 1 },
};

export const IndividualProj = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={layerTransition}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/individualProj/1.png"
        srcSet="/serviceCards/individualProj/1-2x.png 2x"
        variants={slice1}
        transition={layerTransition}
        style={{ zIndex: 1 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/individualProj/2.png"
        srcSet="/serviceCards/individualProj/2-2x.png 2x"
        variants={slice2}
        transition={layerTransition}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />

      {/* Слой 3 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/individualProj/3.png"
        srcSet="/serviceCards/individualProj/3-2x.png 2x"
        variants={slice3}
        transition={layerTransition}
        style={{ zIndex: 3 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
