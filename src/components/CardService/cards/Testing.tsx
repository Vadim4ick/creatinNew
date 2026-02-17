/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";

const middleCubeVariants = {
  rest: {
    x: 0,
    y: 0,
    rotate: 0,
  },
  hover: {
    x: -30,
    y: -25,
    rotate: -15,
  },
};

export const Testing = () => {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.topGroup}>
        <img
          src="/serviceCards/testing/1.png"
          srcSet="/serviceCards/testing/1-2x.png 2x"
          alt="top"
        />
      </div>

      <motion.div
        className={styles.middleCube}
        variants={middleCubeVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <img
          src="/serviceCards/testing/2.png"
          srcSet="/serviceCards/testing/2-2x.png 2x"
          alt="middle"
        />
      </motion.div>

      <div className={styles.bottomCube}>
        <img
          src="/serviceCards/testing/3.png"
          srcSet="/serviceCards/testing/3-2x.png 2x"
          alt="bottom"
        />
      </div>
    </div>
  );
};
