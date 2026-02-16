/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { BtnArrowThird } from "@/shared/icons/BtnArrowThird";
import { springTransition } from "@/shared/lib";
import { useState } from "react";

type Props = {
  bg: string;
  bgBtn?: string;
  desc?: string;
  serviceId: string;
  title: string;
  canHover?: boolean;
};

const cardVariants = {
  rest: {},
  hover: {},
};

const rightArrowVariants = {
  rest: {
    x: 0,
    opacity: 1,
  },
  hover: {
    x: 40,
    opacity: 0,
  },
};

const leftArrowVariants = {
  rest: {
    x: -40,
    opacity: 0,
  },
  hover: {
    x: 0,
    opacity: 1,
  },
};

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

const CardService = ({
  bg,
  serviceId,
  title,
  bgBtn,
  desc,
  canHover,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
      style={{ background: !isHovered ? "#EDEEF2" : bg }}
      initial="rest"
      animate="rest"
      // whileHover="hover"
      transition={{ duration: 0.3 }}
      whileHover={canHover ? "hover" : undefined}
      onMouseEnter={canHover ? () => setIsHovered(true) : undefined}
      onMouseLeave={canHover ? () => setIsHovered(false) : undefined}
    >
      {/* Левая стрелка — появляется */}
      <motion.div
        style={{
          background: bgBtn ?? "white",
        }}
        className={styles.btnArrowLeft}
        variants={leftArrowVariants}
        transition={springTransition}
      >
        <BtnArrowThird
          style={{
            color: bgBtn ? "white" : "black",
          }}
        />
      </motion.div>

      {/* Правая стрелка — улетает */}
      <motion.div
        className={styles.btnArrowRight}
        variants={rightArrowVariants}
        transition={springTransition}
      >
        <BtnArrowThird />
      </motion.div>

      <div className={styles.imageContainer}>
        {Number(serviceId) === 5 && (
          <>
            {/* Верхняя композиция */}
            <div className={styles.topGroup}>
              <img
                src="/serviceCards/cube/1.png"
                srcSet="/serviceCards/cube/1-2x.png 2x"
                alt="top"
              />
            </div>

            {/* Синий куб */}
            <motion.div
              className={styles.middleCube}
              variants={middleCubeVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img
                src="/serviceCards/cube/2.png"
                srcSet="/serviceCards/cube/2-2x.png 2x"
                alt="middle"
              />
            </motion.div>

            {/* Нижний куб */}
            <div className={styles.bottomCube}>
              <img
                src="/serviceCards/cube/3.png"
                srcSet="/serviceCards/cube/3-2x.png 2x"
                alt="bottom"
              />
            </div>
          </>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        {desc && <div className={styles.description}>{desc}</div>}
      </div>
    </motion.div>
  );
};

export { CardService };
