/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";

const t = { duration: 0.3, ease: "easeInOut" as const };

const containerVariants = {
  rest: { x: 30, y: 102 },
  hover: { x: -10, y: 102 },
};

const slice1 = {
  rest: { x: 18, y: -65, rotate: 0, scale: 1 },
  hover: { x: 15, y: -65, rotate: 20, scale: 1 },
};

const slice2 = {
  rest: { x: 38, y: -52, rotate: 0, scale: 1 },
  hover: { x: 38, y: -52, rotate: -10, scale: 1 },
};

export const SiteVisit = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={t}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/siteVisit/1.png"
        srcSet="/serviceCards/siteVisit/1-2x.png 2x"
        variants={slice1}
        transition={t}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/siteVisit/2.png"
        srcSet="/serviceCards/siteVisit/2-2x.png 2x"
        variants={slice2}
        transition={t}
        style={{ zIndex: 1 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
//
