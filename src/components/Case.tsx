"use client";

import { CaseEntity } from "@/graphql/__generated__";
import { getRouteCase } from "@/shared/const/pages";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { CustomLink } from "@/shared/ui/Link";
import Image from "next/image";
import { memo, useRef } from "react";

interface CaseProps {
  project: CaseEntity;
}

const Case = memo((props: CaseProps) => {
  const { project } = props;

  const caseRef = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver({
    ref: caseRef,
    margin: "30px",
    once: true,
  });

  return (
    <div ref={caseRef} className="cases__column case-card fade-up">
      <div className="case-card__item case-card__item--text">
        <div className="case-card__title">
          {project.attributes.title && project.attributes.title}
        </div>
        <div className="case-card__info">
          {project.attributes.info && project.attributes.info}
        </div>
        <div className="case-card__btns">
          <CustomLink
            href={getRouteCase(project.id)}
            variant="white"
            iconPosition="right"
          >
            Смотреть кейс
          </CustomLink>
        </div>
      </div>

      <div className="case-card__item case-card__item--big">
        {project.attributes.imageBig && (
          <Image
            fill
            src={getFileUrl(project.attributes.imageBig.data.attributes.url)}
            alt=""
          />
        )}
      </div>
      <a className="case-card__item case-card__item--main">
        {project.attributes.imageMain && (
          <Image
            fill
            src={getFileUrl(project.attributes.imageMain.data.attributes.url)}
            alt=""
          />
        )}
      </a>
    </div>
  );
});

export { Case };
