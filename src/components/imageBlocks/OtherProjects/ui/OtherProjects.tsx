"use client";

import { GetCaseByIdQuery } from "@/graphql/__generated__";
import cls from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getRouteCase } from "@/shared/const/pages";
import { useState } from "react";
import { BtnArrowThird } from "@/shared/icons/BtnArrowThird";

const OtherProjects = ({
  caseContent,
}: {
  caseContent: GetCaseByIdQuery["case"]["data"]["attributes"]["cases"];
}) => {
  return (
    <div className={`project__container ${cls.container}`}>
      <h2 className={cls.title}>Другие проекты</h2>

      <div className={cls.body}>
        {caseContent.data.map((el) => (
          <ProjectCard
            key={el.id}
            href={getRouteCase(el.id)}
            img={el.attributes.imageMain.data.attributes.url}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ href, img }: { href: string; img: string }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={href}
      className={cls.item}
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
