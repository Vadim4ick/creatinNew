"use client";

import Image from "next/image";
import cls from "./style.module.scss";
import { motion } from "framer-motion";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { MediaFragmentFragment } from "@/graphql/__generated__";
import { useState } from "react";

const PartnersItem = ({
  noFill,
  fill,
}: {
  noFill: MediaFragmentFragment;
  fill: MediaFragmentFragment;
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`partners__slide swiper-slide ${cls.card}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        className={cls.imageWrapper}
        animate={{
          scale: hover ? 1.08 : 1,
        }}
        transition={{ ease: "easeOut", duration: 0.45 }}
      >
        <Image
          width={noFill.width}
          height={noFill.height}
          alt=""
          src={getFileUrl(noFill.url)}
          className={cls.image}
        />

        <Image
          width={fill.width}
          height={fill.height}
          alt=""
          src={getFileUrl(fill.url)}
          className={cls.imageFill}
        />
      </motion.div>
    </div>
  );
};

export { PartnersItem };
