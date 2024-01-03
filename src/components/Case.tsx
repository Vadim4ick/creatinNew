"use client";

import { Case } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { CustomLink } from "@/shared/ui/Link";
import Image from "next/image";
import { useRef } from "react";

interface CaseProps {
  case: Omit<Case, "publishedAt" | "updatedAt" | "createdAt">;
}

const Case = (props: CaseProps) => {
  const { case: project } = props;

  const caseRef = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver({
    ref: caseRef,
    margin: "30px",
    once: true,
  });

  return (
    <div ref={caseRef} className="cases__column case-card fade-up">
      <div className="case-card__item case-card__item--text">
        <div className="case-card__title">{project.title && project.title}</div>
        <div className="case-card__info">{project.info && project.info}</div>
        <div className="case-card__btns">
          <CustomLink variant="white" iconPosition="right">
            Смотреть кейс
          </CustomLink>
        </div>
      </div>

      <div className="case-card__item case-card__item--big">
        {project.imageBig && (
          <Image
            fill
            src={getFileUrl(project.imageBig.data.attributes.url)}
            alt=""
          />
        )}
      </div>
      <a className="case-card__item case-card__item--main">
        {project.imageMain && (
          <Image
            fill
            src={getFileUrl(project.imageMain.data.attributes.url)}
            alt=""
          />
        )}
      </a>
    </div>
  );
};

export { Case };
