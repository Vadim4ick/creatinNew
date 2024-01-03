"use client";

import {
  Enum_Componentelementsintrocard_Class,
  GetHomePageQuery,
} from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { useMedia } from "@/shared/hooks/useMedia";
import { useSwiper } from "@/shared/hooks/useSwiper";
import { Folder } from "@/shared/icons/introBanner/Folder";
import { Spiral } from "@/shared/icons/introBanner/Spiral";
import { CustomLink } from "@/shared/ui/Link";
import { Portal } from "@/shared/ui/Portal";
import Image from "next/image";
import { useMemo, useRef } from "react";
import { A11y, Mousewheel } from "swiper";

interface BannerProps {
  banner: GetHomePageQuery["homePage"]["data"]["attributes"]["HomeBanner"];
}

const arrImages: Record<Enum_Componentelementsintrocard_Class, any> = {
  folders: <Folder />,
  spiral: <Spiral />,
  image_group: ["/img/intro/01.png", "/img/intro/02.png", "/img/intro/03.png"],
};

const ButtonIntro = () => {
  return (
    <div className="intro__btns" data-da=".intro__inner,767,last">
      <CustomLink iconPosition="right">Оставить заявку</CustomLink>
    </div>
  );
};

const Banner = (props: BannerProps) => {
  const { banner } = props;

  const bannerRef = useRef<HTMLElement | null>(null);
  const introCardsSwiperRef = useRef<HTMLDivElement | null>(null);
  const test = useRef<HTMLDivElement | null>(null);

  const isPhone = useMedia("(max-width: 767px)");

  useIntersectionObserver({
    ref: bannerRef,
    once: true,
  });
  useSwiper({
    ref: introCardsSwiperRef,
    options: {
      modules: [A11y, Mousewheel],
      direction: "horizontal",
      speed: 800,
      spaceBetween: 12,
      breakpoints: {
        320: {
          autoHeight: false,
          spaceBetween: 12,
        },
        1439: {
          direction: "vertical",
        },
      },
    },
  });

  const customStyles: { [key: string]: string } = useMemo(() => {
    const stylesObject: { [key: string]: string } = {};

    banner.bannerMasks.data.forEach((el) => {
      stylesObject[`--${el.attributes.name}`] = `url(${getFileUrl(
        el.attributes.url
      )})`;
    });

    return stylesObject;
  }, [banner.bannerMasks.data]);

  return (
    <section ref={bannerRef} className="intro">
      <div className="intro__container">
        <div ref={test} className="intro__inner">
          <div
            className="intro__row"
            style={banner.bannerMasks ? customStyles : undefined}
          >
            <div className="intro__content">
              <div className="intro__title">
                <p>Стратегии, брендинг</p>
                <p>и digital-решения для компаний,</p>
                <p>
                  готовых <br />к <span>изменениям</span>
                </p>
              </div>
              {isPhone.matches ? (
                test.current && (
                  <Portal element={test.current}>
                    <ButtonIntro />
                  </Portal>
                )
              ) : (
                <ButtonIntro />
              )}
            </div>
            <div className="intro__bg">
              {isPhone.matches ? (
                <Image
                  fill
                  src={getFileUrl(banner.bannerMobile.data.attributes.url)}
                  alt=""
                />
              ) : (
                <Image
                  fill
                  src={getFileUrl(banner.banner.data.attributes.url)}
                  alt=""
                />
              )}
            </div>
          </div>
          <div
            ref={introCardsSwiperRef}
            className="intro__cards intro-cards swiper js-intro-cards"
          >
            <div className="intro-cards__swiper swiper-wrapper">
              {banner.IntroCard &&
                banner.IntroCard.map((card) => {
                  return (
                    <div
                      key={card.id}
                      className="intro__card intro-cards__item swiper-slide"
                    >
                      <div className="intro-cards__content">
                        <div className="intro-cards__value">{card.title}</div>
                        <div className="intro-cards__info">{card.info}</div>
                      </div>
                      <div
                        className={`intro-cards__image intro-cards-${card.class}`}
                      >
                        {card.class === "image_group" ? (
                          <>
                            {arrImages[card.class].map((el: string) => (
                              <div key={el} className="intro-cards__image-item">
                                <Image src={el} width={57} height={57} alt="" />
                              </div>
                            ))}
                          </>
                        ) : (
                          arrImages[card.class]
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Banner };
