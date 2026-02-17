/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";

const fileBackVariants = {
  rest: { rotate: 0, x: 0, y: 0 },
  hover: { rotate: 0, x: 0, y: 0 },
};

const filePaper1Variants = {
  rest: { rotate: 0, x: 0, y: 0 },
  hover: { rotate: 0, x: 0, y: 0 },
};

const filePaper2Variants = {
  rest: { rotate: 0, x: -4, y: -55 },
  hover: { rotate: -25, x: -32, y: -75 },
};

const filePaper3Variants = {
  rest: { rotate: 0, x: 2, y: -50 },
  hover: { rotate: -8, x: -8, y: -60 },
};

const fileFrontVariants = {
  rest: { rotate: 0, x: 8, y: -45 },
  hover: { rotate: 0, x: 8, y: -45 },
};

const fileContainerVariants = {
  rest: { x: 0 }, // дефолт чуть справа
  hover: { x: -5 }, // при наведении влево
};

const layerTransition = { duration: 0.3, ease: "easeInOut" as const };

export const BusinessPlan = () => {
  return (
    <motion.div
      className={styles.fileWrapper}
      variants={fileContainerVariants}
      transition={layerTransition}
    >
      <motion.img
        src="/serviceCards/businessPlan/1.png"
        srcSet="/serviceCards/businessPlan/1-2x.png 2x"
        className={styles.fileLayer}
        style={{ zIndex: 6 }}
        variants={fileBackVariants}
        transition={layerTransition}
      />
      <motion.img
        src="/serviceCards/businessPlan/2.png"
        srcSet="/serviceCards/businessPlan/2-2x.png 2x"
        className={styles.fileLayer}
        style={{ zIndex: 1 }}
        variants={filePaper1Variants}
        transition={layerTransition}
      />
      <motion.img
        src="/serviceCards/businessPlan/3.png"
        srcSet="/serviceCards/businessPlan/3-2x.png 2x"
        className={styles.fileLayer}
        style={{ zIndex: 3 }}
        variants={filePaper2Variants}
        transition={layerTransition}
      />
      <motion.img
        src="/serviceCards/businessPlan/4.png"
        srcSet="/serviceCards/businessPlan/4-2x.png 2x"
        className={styles.fileLayer}
        style={{ zIndex: 4 }}
        variants={filePaper3Variants}
        transition={layerTransition}
      />
      <motion.img
        src="/serviceCards/businessPlan/5.png"
        srcSet="/serviceCards/businessPlan/5-2x.png 2x"
        className={styles.fileLayer}
        style={{ zIndex: 5 }}
        variants={fileFrontVariants}
        transition={layerTransition}
      />
    </motion.div>
  );
};
