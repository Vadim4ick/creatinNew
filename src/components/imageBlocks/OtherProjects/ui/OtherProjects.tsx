"use client";

import { GetCaseByIdQuery } from "@/graphql/__generated__";
import cls from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getRouteCase } from "@/shared/const/pages";
import { useMemo, useRef, useState } from "react";
import { BtnArrowThird } from "@/shared/icons/BtnArrowThird";
import { A11y, Mousewheel, SwiperOptions } from "swiper";
import { useSwiper } from "@/shared/hooks/useSwiper";
import { useMedia } from "@/shared/hooks/useMedia";

const OtherProjects = ({
  caseContent,
}: {
  caseContent: GetCaseByIdQuery["case"]["data"]["attributes"]["cases"];
}) => {
  const isMobile = useMedia("(max-width: 991px)");
  const ref = useRef<HTMLDivElement | null>(null);

  const options = useMemo<SwiperOptions>(
    () => ({
      modules: [A11y, Mousewheel],
      direction: "horizontal",
      spaceBetween: isMobile.matches ? 12 : 16,
      speed: 450,
      mousewheel: { releaseOnEdges: true },
    }),
    [isMobile.matches]
  );

  useSwiper({
    ref: ref,
    options,
  });

  return (
    <div className={`project__container ${cls.container}`}>
      <h2 className={cls.title}>Другие проекты</h2>

      <div className={cls.body}>
        <div ref={ref} className={`swiper ${cls.slider}`}>
          <div className="swiper-wrapper">
            {caseContent.data.map((el) => (
              <ProjectCard
                key={el.id}
                href={getRouteCase(el.id)}
                img={el.attributes.imageMain.data.attributes.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ href, img }: { href: string; img: string }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={href}
      className={cls.item + " swiper-slide"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        animate={{ height: hover ? 394 : 446 }} // уменьшаем высоту
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={cls.imageWrapper}
      >
        <Image alt="" src={img} fill className={cls.image} />
      </motion.div>

      <motion.button
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: hover ? 52 : -30, opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={cls.btn}
      >
        Смотреть кейс
        <div className={cls.arrow}>
          <BtnArrowThird />
        </div>
      </motion.button>
    </Link>
  );
};

export { OtherProjects };
