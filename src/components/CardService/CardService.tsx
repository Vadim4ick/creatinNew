/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useInView } from "framer-motion";
import styles from "./style.module.scss";
import { BtnArrowThird } from "@/shared/icons/BtnArrowThird";
import { springTransition } from "@/shared/lib";
import { useEffect, useRef, useState } from "react";
import { ServiceVisual } from "./ServiceVisual";
import { useMedia } from "@/shared/hooks/useMedia";

type Props = {
  bg: string;
  bgBtn?: string;
  desc?: string;
  serviceId: string;
  title: string;
  canHover?: boolean;
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

const CardService = ({
  bg,
  serviceId,
  title,
  bgBtn,
  desc,
  canHover,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const isMobile = useMedia("(max-width: 760px)");

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    amount: 0.8, // 40% карточки в зоне видимости
    once: true, // сработает один раз
  });

  useEffect(() => {
    if (isMobile && isInView) {
      setIsHovered(true);
    }
  }, [isMobile, isInView]);

  return (
    <motion.div
      className={styles.card}
      style={{ background: !isHovered ? "#EDEEF2" : bg }}
      ref={ref}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      onMouseEnter={canHover ? () => setIsHovered(true) : undefined}
      onMouseLeave={canHover ? () => setIsHovered(false) : undefined}
      transition={{ duration: 0.3 }}
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

      <ServiceVisual serviceId={serviceId} />

      <div />

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        {desc && <div className={styles.description}>{desc}</div>}
      </div>
    </motion.div>
  );
};

export { CardService };
