"use client";

import {
  GetHomePageQuery,
  GetHomePartnersFragment,
} from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { useMedia } from "@/shared/hooks/useMedia";
import { SplitTypeAnimation } from "@/shared/hooks/useSplitTypeAnimation";
import { useSwiper } from "@/shared/hooks/useSwiper";
import { CustomLink } from "@/shared/ui/Link";
import { Portal } from "@/shared/ui/Portal";
import Image from "next/image";
import { useRef } from "react";
import { A11y, Grid, Mousewheel } from "swiper";

interface PartnersProps {
  partners: GetHomePartnersFragment;
}

const Partners = (props: PartnersProps) => {
  const { partners } = props;

  const isDesktop = useMedia("(max-width: 1200px)");

  const titleRef = useRef<HTMLDivElement | null>(null);
  const subTitleRef = useRef<HTMLDivElement | null>(null);
  const partnersBtnRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<HTMLDivElement | null>(null);
  const partnersContainerRef = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver({
    ref: titleRef,
    once: true,
  });

  useIntersectionObserver({
    ref: subTitleRef,
    once: true,
  });

  useIntersectionObserver({
    ref: partnersBtnRef,
    removeClass: true,
  });

  useIntersectionObserver({
    ref: swiperRef,
    removeClass: true,
  });

  useSwiper({
    ref: swiperRef,
    options: {
      modules: [A11y, Mousewheel, Grid],

      spaceBetween: 8,
      // slidesPerColumn: 4,
      grid: {
        rows: 2,
        fill: "column",
      },
      slidesPerGroup: 3,
      autoHeight: false,
      speed: 800,
      // mousewheelControl: true,

      mousewheel: {
        releaseOnEdges: true,
      },

      breakpoints: {
        320: {
          grid: {
            rows: 2,
            fill: "column",
          },
        },
        768: {
          grid: {
            rows: 1,
            fill: "column",
          },
        },
      },
    },
  });

  const partnersBtn = (
    <div className="partners__btn fade-up" ref={partnersBtnRef}>
      <CustomLink variant="white" iconPosition="right">
        Стать партнером
      </CustomLink>
    </div>
  );

  return (
    <section className="partners animate-block">
      <div className="partners__container" ref={partnersContainerRef}>
        <div className="partners__top">
          <div className="partners__text">
            <SplitTypeAnimation refChar={titleRef} bg="#aaaaaa" fg="#fff">
              <h2 ref={titleRef} className="partners__title fade-up">
                {partners.title}
              </h2>
            </SplitTypeAnimation>

            <div ref={subTitleRef} className="partners__subtitle fade-up">
              {partners.description}
            </div>
          </div>

          {isDesktop.matches
            ? partnersContainerRef.current && (
                <Portal element={partnersContainerRef.current}>
                  {partnersBtn}
                </Portal>
              )
            : partnersBtn}
        </div>
        <div
          className="partners__slider swiper js-partners fade-up"
          ref={swiperRef}
        >
          <div className="partners__swiper swiper-wrapper">
            {partners.icons.data.map((item) => {
              return (
                <div key={item.id} className="partners__slide swiper-slide">
                  <Image
                    width={item.attributes.width}
                    height={item.attributes.height}
                    key={item.id}
                    alt=""
                    src={getFileUrl(item.attributes.url)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Partners };
