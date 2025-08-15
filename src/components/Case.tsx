"use client";

import { CaseEntity } from "@/graphql/__generated__";
import { getRouteCase } from "@/shared/const/pages";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { handleContextMenu } from "@/shared/helpers/handleContenxtMenu";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { useMedia } from "@/shared/hooks/useMedia";
import { BtnArrowThird } from "@/shared/icons/BtnArrowThird";
import { ButtonDetails } from "@/shared/ui/ButtonDetails";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { memo, useRef } from "react";

interface CaseProps {
  project: CaseEntity;
}

const Case = memo((props: CaseProps) => {
  const { project } = props;

  const router = useRouter();

  const caseRef = useRef<HTMLDivElement | null>(null);

  const isDesktop = useMedia("(max-width: 1200px)");

  useIntersectionObserver({
    ref: caseRef,
    margin: "30px",
    once: true,
  });

  return (
    <div
      onContextMenu={(e) => handleContextMenu(e)}
      ref={caseRef}
      className="cases__column case-card fade-up"
    >
      <div className="case-card__item case-card__item--text">
        <div className="case-card__title">
          {project.attributes.title && project.attributes.title}
        </div>
        <div className="case-card__info">
          {project.attributes.info && project.attributes.info}
        </div>
        {!isDesktop.matches && (
          <div className="case-card__btns">
            <ButtonDetails
              variant="white"
              text="Смотреть кейс"
              Icon={() => <BtnArrowThird />}
              onClick={() => router.push(getRouteCase(project.id))}
            />
          </div>
        )}
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

      {isDesktop.matches ? (
        <Link
          href={getRouteCase(project.id)}
          className="case-card__item case-card__item--main"
        >
          {project.attributes.imageMain && (
            <Image
              fill
              src={getFileUrl(project.attributes.imageMain.data.attributes.url)}
              alt=""
            />
          )}
        </Link>
      ) : (
        <a className="case-card__item case-card__item--main">
          {project.attributes.imageMain && (
            <Image
              fill
              src={getFileUrl(project.attributes.imageMain.data.attributes.url)}
              alt=""
            />
          )}
        </a>
      )}
    </div>
  );
});

export { Case };
