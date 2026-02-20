/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";

const t = { duration: 0.3, ease: "easeInOut" as const };

const containerVariants = {
  rest: { x: 45, y: 100 },
  hover: { x: -5, y: 100 },
};

const slice1 = {
  rest: { x: -30, y: -65, rotate: 0, scale: 1 },
  hover: { x: -30, y: -65, rotate: 10, scale: 1 },
};

const slice2 = {
  rest: { x: 10, y: 105, rotate: 0, scale: 1 },
  hover: { x: -10, y: 50, rotate: 35, scale: 1 },
};

const slice3 = {
  rest: { x: 148, y: -70, rotate: 0, scale: 1 },
  hover: { x: 148, y: -70, rotate: -60, scale: 1 },
};

export const PromoProducts = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={t}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/promoProducts/1.png"
        srcSet="/serviceCards/promoProducts/1-2x.png 2x"
        variants={slice1}
        transition={t}
        style={{ zIndex: 3 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/promoProducts/2.png"
        srcSet="/serviceCards/promoProducts/2-2x.png 2x"
        variants={slice2}
        transition={t}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />

      {/* Слой 3 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/promoProducts/3.png"
        srcSet="/serviceCards/promoProducts/3-2x.png 2x"
        variants={slice3}
        transition={t}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
