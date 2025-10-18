"use client";

import { CaseEntity } from "@/graphql/__generated__";
import { getRouteCase } from "@/shared/const/pages";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { handleContextMenu } from "@/shared/helpers/handleContenxtMenu";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { useMedia } from "@/shared/hooks/useMedia";
import { BtnArrowThird } from "@/shared/icons/BtnArrowThird";
import { DecorBgGreen } from "@/shared/icons/DecorBgGreen";
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

  const isBelow1200 = useMedia("(max-width: 1200px)");
  const isMobile = useMedia("(max-width: 778px)");

  useIntersectionObserver({
    ref: caseRef,
    margin: "30px",
    once: true,
  });

  // Выбираем картинку в зависимости от размера и fallback на десктоп
  const bigImage = project.attributes.imageBig;

  const mainImage =
    isMobile.matches && project.attributes.imageMainMobile.data
      ? project.attributes.imageMainMobile
      : project.attributes.imageMain;

  return (
    <div
      onContextMenu={(e) => handleContextMenu(e)}
      ref={caseRef}
      className="cases__column case-card fade-up"
    >
      <div className="case-card__item case-card__item--text">
        <div className="case-card__title">
          {project.attributes.title}
          <DecorBgGreen />
        </div>
        <div className="case-card__info">{project.attributes.info}</div>
        {!isBelow1200.matches && (
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
        {bigImage && (
          <img src={getFileUrl(bigImage.data.attributes.url)} alt="" />
        )}
      </div>

      {isBelow1200.matches ? (
        <Link
          href={getRouteCase(project.id)}
          className="case-card__item case-card__item--main"
        >
          {mainImage && (
            <img src={getFileUrl(mainImage.data.attributes.url)} alt="" />
          )}
        </Link>
      ) : (
        <a className="case-card__item case-card__item--main">
          {mainImage && (
            <img src={getFileUrl(mainImage.data.attributes.url)} alt="" />
          )}
        </a>
      )}
    </div>
  );
});

export { Case };
