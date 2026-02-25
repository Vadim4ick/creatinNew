/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "../style.module.scss";
import { layerTransition } from "@/shared/const/animations";

// Контейнер двигаешь как хочешь (у тебя было x:55 -> 0)
const containerVariants = {
  rest: { x: 75, y: 100 },
  hover: { x: 65, y: 80 },
};

// ВАЖНО: hover = собранный пирог (все в центре)
const slice1 = {
  rest: { x: 0, y: -65, rotate: 0, scale: 1 },
  hover: { x: 0, y: 0, rotate: 0, scale: 1 },
};

const slice2 = {
  // rest: { x: 47, y: -30, rotate: 0, scale: 1 },
  rest: { x: 45, y: -50, rotate: 0, scale: 1 },
  hover: { x: 47, y: -30, rotate: 0, scale: 1 },
};

const slice3 = {
  rest: { x: 94, y: -85, rotate: 0, scale: 1 },
  hover: { x: 96, y: -70, rotate: 0, scale: 1 },
};

const slice4 = {
  rest: { x: 80, y: -68, rotate: 0, scale: 1 },
  hover: { x: 63, y: -54, rotate: -15, scale: 1 },
};

const slice5 = {
  rest: { x: -29, y: 100, rotate: 0, scale: 1 },
  hover: { x: -45, y: 100, rotate: 0, scale: 1 },
};

export const BussinessAnalitics = () => {
  return (
    <motion.div
      className={styles.pieWrap}
      variants={containerVariants}
      transition={layerTransition}
    >
      {/* Слой 1 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/bussinessAnalitics/1.png"
        srcSet="/serviceCards/bussinessAnalitics/1-2x.png 2x"
        variants={slice1}
        transition={layerTransition}
        style={{ zIndex: 1 }}
        alt=""
        draggable={false}
      />

      {/* Слой 2 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/bussinessAnalitics/2.png"
        srcSet="/serviceCards/bussinessAnalitics/2-2x.png 2x"
        variants={slice2}
        transition={layerTransition}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />

      {/* Слой 3 */}
      <motion.img
        className={styles.slice}
        src="/serviceCards/bussinessAnalitics/3.png"
        srcSet="/serviceCards/bussinessAnalitics/3-2x.png 2x"
        variants={slice3}
        transition={layerTransition}
        style={{ zIndex: 3 }}
        alt=""
        draggable={false}
      />
      <motion.img
        className={styles.slice}
        src="/serviceCards/bussinessAnalitics/4.png"
        srcSet="/serviceCards/bussinessAnalitics/4-2x.png 2x"
        variants={slice4}
        transition={layerTransition}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />
      <motion.img
        className={styles.slice}
        src="/serviceCards/bussinessAnalitics/5.png"
        srcSet="/serviceCards/bussinessAnalitics/5-2x.png 2x"
        variants={slice5}
        transition={layerTransition}
        style={{ zIndex: 2 }}
        alt=""
        draggable={false}
      />
    </motion.div>
  );
};
