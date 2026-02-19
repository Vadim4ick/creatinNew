/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";

const fileBackVariants = {
  rest: { rotate: 0, x: 0, y: 0 },
  hover: { rotate: -15, x: 0, y: 0 },
};

const filePaper1Variants = {
  rest: { rotate: 0, x: -100, y: -100 },
  hover: { rotate: 90, x: -100, y: -100 },
};

const fileContainerVariants = {
  rest: { x: 55 }, // дефолт чуть справа
  hover: { x: 0 }, // при наведении влево
};

const layerTransition = { duration: 0.3, ease: "easeInOut" as const };

export const Social = () => {
  return (
    <motion.div
      className={styles.social}
      variants={fileContainerVariants}
      transition={layerTransition}
    >
      <motion.img
        src="/serviceCards/social/1.png"
        srcSet="/serviceCards/social/1-2x.png 2x"
        className={styles.socialEl1}
        style={{ zIndex: 6 }}
        variants={fileBackVariants}
        transition={layerTransition}
      />
      <motion.img
        src="/serviceCards/social/2.png"
        srcSet="/serviceCards/social/2-2x.png 2x"
        className={styles.socialEl2}
        style={{ zIndex: 1 }}
        variants={filePaper1Variants}
        transition={layerTransition}
      />
    </motion.div>
  );
};
