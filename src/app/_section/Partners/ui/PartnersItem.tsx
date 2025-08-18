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
        animate={{
          scale: hover ? 1.08 : 1,
        }}
        transition={{ ease: "easeOut", duration: 0.8 }}
      >
        <Image
          width={hover ? fill.width : noFill.width}
          height={hover ? fill.height : noFill.height}
          alt=""
          src={getFileUrl(hover ? fill.url : noFill.url)}
          className={cls.image}
        />
      </motion.div>
    </div>
  );
};

export { PartnersItem };
