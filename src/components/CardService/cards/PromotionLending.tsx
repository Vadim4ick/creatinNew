/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";
import { layerTransition } from "@/shared/const/animations";

const containerVariants = {
  rest: { x: 45, y: 167 },
  hover: { x: 25, y: 137 },
};

const slice1 = {
  rest: { x: 15, y: -65, rotate: 0, scale: 1 },
  hover: { x: 15, y: -65, rotate: -5, scale: 1 },
};

const slice2 = {
  rest: { x: -80, y: -30, rotate: 0, scale: 1 },
  hover: { x: -80, y: -55, rotate: 20, scale: 1 },
};

const slice3 = {
  rest: { x: 160, y: 55, rotate: 0, scale: 1 },
  hover: { x: 160, y: 55, rotate: -7, scale: 1 },
};

export const PromotionLending = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={layerTransition}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/promotionLending/1.png"
        srcSet="/serviceCards/promotionLending/1-2x.png 2x"
        variants={slice1}
        transition={layerTransition}
        style={{ zIndex: 1 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/promotionLending/2.png"
        srcSet="/serviceCards/promotionLending/2-2x.png 2x"
        variants={slice2}
        transition={layerTransition}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />

      {/* Слой 3 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/promotionLending/3.png"
        srcSet="/serviceCards/promotionLending/3-2x.png 2x"
        variants={slice3}
        transition={layerTransition}
        style={{ zIndex: 3 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
