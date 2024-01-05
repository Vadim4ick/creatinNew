/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { SliderFragmentFragment } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { SplitTypeAnimation } from "@/shared/hooks/useSplitTypeAnimation";
import { useSwiper } from "@/shared/hooks/useSwiper";
import { CustomLink } from "@/shared/ui/Link";
import Image from "next/image";
import { useRef } from "react";
import { A11y } from "swiper";
import cls from "./RelevantProject.module.scss";
import { classNames } from "@/shared/lib";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";

interface RelevantProjectsProps {
  cases: SliderFragmentFragment["cases"]["data"];
  animation?: boolean;
}

const RelevantProjects = (props: RelevantProjectsProps) => {
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
  //   useEffect(() => {
  //     const swiperRef = projectsSeiperRef.current;
  //     if (!swiperRef) return;

  //     const slides = swiperRef.querySelectorAll(".swiper-slide");
  //     const wrapper = swiperRef.querySelector(".swiper-wrapper");

  //     if (slides.length < 10 && wrapper) {
  //       const clones = Array.from(slides)
  //         .map((slide) => slide.cloneNode(true))
  //         .filter(() => swiperRef.querySelectorAll(".swiper-slide").length < 20);

  //       clones.forEach((clone) => wrapper.appendChild(clone));
  //     }
  //   }, []);

  useSwiper({
    ref: projectsSeiperRef,

    options: {
      modules: [A11y],
      slideToClickedSlide: true,
      loop: true,
      autoHeight: false,
      speed: 1200,

      //   on: {
      //     slideChange: function () {
      //       // if(this.activeIndexChange)
      //       //   console.log(this.activeIndex);
      //       //   console.log(projectsSeiperRef.current);

      //       if (projectsSeiperRef.current) {
      //         const swiper =
      //           projectsSeiperRef.current.querySelector(".swiper-wrapper");

      //         if (swiper) {
      //           console.log(swiper.children.length);
      //           console.log(this.activeIndex);
      //         }
      //       }
      //     },
      //   },

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
        <div ref={titleRef} className="relevant__title" data-observe>
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

                  <CustomLink
                    className="relevant__btn"
                    variant="white"
                    iconPosition="right"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { RelevantProjects };
