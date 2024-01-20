/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { SliderFragmentFragment } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { SplitTypeAnimation } from "@/shared/hooks/useSplitTypeAnimation";
import { useSwiper } from "@/shared/hooks/useSwiper";
import Image from "next/image";
import { memo, useRef } from "react";
import Swiper, { A11y } from "swiper";
import cls from "./RelevantProject.module.scss";
import { classNames } from "@/shared/lib";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { getRouteCase } from "@/shared/const/pages";
import Link from "next/link";
import { BtnArrow } from "@/shared/icons/BtnArrow";

interface RelevantProjectsProps {
  cases: SliderFragmentFragment["cases"]["data"];
  animation?: boolean;
}

const RelevantProjects = memo((props: RelevantProjectsProps) => {
  const { cases, animation = false } = props;

  const projectsSeiperRef = useRef<HTMLDivElement | null>(null);

  const titleRef = useRef<HTMLDivElement | null>(null);
  const refBlocks = useRef<HTMLElement | null>(null);

  if (animation) {
    useIntersectionObserver({
      ref: refBlocks,
      once: true,
    });
  }

  const onSwiperReachEnd = (swiper: Swiper) => {
    if (swiper) {
      // Получаем оригинальные слайды
      const originalSlides = swiper.slides;

      // // Клонируем оригинальные слайды
      const clonedSlides = originalSlides.map((slide) => slide.cloneNode(true));

      // // Добавляем клонированные слайды в конец Swiper
      clonedSlides.forEach((clonedSlide) => {
        swiper.wrapperEl.appendChild(clonedSlide);
      });

      // // Обновляем Swiper
      swiper.update();
    }
  };

  useSwiper({
    ref: projectsSeiperRef,

    options: {
      modules: [A11y],
      slideToClickedSlide: true,
      autoHeight: false,
      speed: 1200,
      on: {
        transitionStart: (swiper) => {
          if (!swiper.animating) {
            swiper.allowSlideNext = false;
          }
        },
        transitionEnd: (swiper) => {
          swiper.allowSlideNext = true;
        },

        reachEnd: onSwiperReachEnd,
      },

      breakpoints: {
        320: {
          slidesPerView: 1.05,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    },
  });

  return (
    <section
      ref={animation ? refBlocks : undefined}
      className={classNames("relevant", { "fade-up": animation })}
    >
      <SplitTypeAnimation refChar={titleRef} bg="#aaaaaa" fg="#181818">
        <div ref={titleRef} className="relevant__title">
          Релевантные проекты
        </div>
      </SplitTypeAnimation>

      <div
        ref={projectsSeiperRef}
        className="relevant__slider swiper js-relevant-slider"
      >
        <div className="relevant__swiper swiper-wrapper">
          {cases.map((item) => (
            <div key={item.id} className="relevant__slide swiper-slide">
              <div className="relevant__inner">
                <div className="relevant__slide-image">
                  <Image
                    width={item.attributes.imageMain.data.attributes.width}
                    height={item.attributes.imageMain.data.attributes.height}
                    src={getFileUrl(
                      item.attributes.imageMain.data.attributes.url
                    )}
                    alt={item.attributes.title}
                  />
                </div>

                <div className="relevant__bottom">
                  <div className="relevant__name">{item.attributes.title}</div>
                  <div className={classNames(`relevant__info ${cls.info}`)}>
                    {item.attributes.info}
                  </div>

                  <Link
                    onClick={(e) => e.stopPropagation()}
                    href={getRouteCase(item.id)}
                    className="btn btn--hasarrow relevant__btn btn--whte"
                  >
                    <span className="btn__arrow">
                      <BtnArrow />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export { RelevantProjects };
