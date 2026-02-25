/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";
import { layerTransition } from "@/shared/const/animations";

const containerVariants = {
  rest: { x: 45, y: 170 },
  hover: { x: -25, y: 170 },
};

const slice1 = {
  rest: { x: 30, y: -65, rotate: 0, scale: 1 },
  hover: { x: 30, y: -65, rotate: 13, scale: 1 },
};

const slice2 = {
  rest: { x: 155, y: -105, rotate: 0, scale: 1 },
  hover: { x: 155, y: -105, rotate: 0, scale: 1 },
};

const slice3 = {
  rest: { x: 60, y: -105, rotate: 0, scale: 1 },
  hover: { x: 60, y: -125, rotate: -15, scale: 1 },
};

export const CorporateWeb = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={layerTransition}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/corporateWeb/1.png"
        srcSet="/serviceCards/corporateWeb/1-2x.png 2x"
        variants={slice1}
        transition={layerTransition}
        style={{ zIndex: 3 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/corporateWeb/2.png"
        srcSet="/serviceCards/corporateWeb/2-2x.png 2x"
        variants={slice2}
        transition={layerTransition}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />

      {/* Слой 3 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/corporateWeb/3.png"
        srcSet="/serviceCards/corporateWeb/3-2x.png 2x"
        variants={slice3}
        transition={layerTransition}
        style={{ zIndex: 3 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
