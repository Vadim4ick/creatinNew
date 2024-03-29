"use client";

import { GetHomePageQuery } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { useMedia } from "@/shared/hooks/useMedia";
import { useSwiper } from "@/shared/hooks/useSwiper";
import { BtnArrow } from "@/shared/icons/BtnArrow";
import { Folder } from "@/shared/icons/introBanner/Folder";
import { Spiral } from "@/shared/icons/introBanner/Spiral";
import { PopupProviderContext } from "@/shared/providers/popupProvider";
import { IconsType } from "@/shared/type/iconsType";
import Image from "next/image";
import { memo, useContext, useEffect, useMemo, useRef } from "react";
import { A11y, Mousewheel } from "swiper";
import cls from "./Banner.module.scss";
import { classNames } from "@/shared/lib";
import { BannerAnimationProviderContext } from "@/shared/providers/bannerAnimationProvider";
import { handleContextMenu } from "@/shared/helpers/handleContenxtMenu";

interface BannerProps {
  banner: GetHomePageQuery["homePage"]["data"]["attributes"]["HomeBanner"];
}

type PartialImages = Partial<Record<IconsType, any>>;

let ANIMATION_DELAY = 27000;
let ANIMATION_DELAY_MOBILE = 27000;

const arrImages: PartialImages = {
  folders: <Folder />,
  spiral: <Spiral />,
  "__image--group": [
    "/img/intro/01.png",
    "/img/intro/02.png",
    "/img/intro/03.png",
  ],
};

const ButtonIntro = memo(() => {
  const { onClickPopup } = useContext(PopupProviderContext);

  return (
    <div className="intro__btns">
      <button onClick={onClickPopup} className={"btn btn--hasarrow"}>
        <span className="btn__text">Оставить заявку</span>

        <span className="btn__arrow">
          <BtnArrow />
        </span>
      </button>
    </div>
  );
});

const Banner = memo((props: BannerProps) => {
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
        1100: {
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

  // animation
  const contentInfo = useRef<HTMLDivElement | null>(null);
  const contentCards = useRef<HTMLDivElement | null>(null);

  const { animation, setAnimation } = useContext(
    BannerAnimationProviderContext
  );

  const mobileVideo = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    const handleScroll = () => {
      if (contentInfo.current && contentCards.current) {
        setAnimation(true);

        if (
          contentInfo.current.classList.contains(cls.cardInfo) &&
          contentCards.current.classList.contains(cls.contentCards)
        ) {
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    if (!animation && contentInfo.current && contentCards.current) {
      const delay = isPhone.matches ? ANIMATION_DELAY_MOBILE : ANIMATION_DELAY;

      timerId = setTimeout(() => {
        setAnimation(true);
      }, delay);
    }

    window.addEventListener("scroll", handleScroll);

    // Очистка обработчика при размонтировании
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [animation]);

  return (
    <section ref={bannerRef} className="intro">
      <div className="intro__container">
        <div ref={test} className="intro__inner">
          <div
            onContextMenu={(e) => handleContextMenu(e)}
            className={classNames("intro__row", {}, [cls.introRow])}
            style={banner.bannerMasks ? customStyles : undefined}
          >
            {isPhone.matches && (
              <video
                className={cls.banner}
                ref={mobileVideo}
                autoPlay
                muted
                playsInline
                loop
              >
                <source
                  src={banner.bannerMobile.data.attributes.url}
                  type="video/mp4"
                />
              </video>
            )}
            <div
              ref={contentInfo}
              className={classNames(
                "intro__content",
                {
                  [cls.cardInfoBefore]: !animation,
                  [cls.cardInfo]: animation,
                },
                [cls.content]
              )}
            >
              {!isPhone.matches && animation && <ButtonIntro />}
            </div>
            <div className="intro__bg">
              {!isPhone.matches && (
                <video className={cls.banner} autoPlay muted playsInline loop>
                  <source
                    src={banner.banner.data.attributes.url}
                    type="video/mp4"
                  />
                </video>
              )}
            </div>
          </div>

          <div
            ref={introCardsSwiperRef}
            className={classNames(
              "intro__cards intro-cards swiper js-intro-cards",
              {},
              [cls.cards]
            )}
          >
            <div
              ref={contentCards}
              className={classNames(
                "intro-cards__swiper swiper-wrapper",
                {
                  [cls.contentCards]: animation,
                },
                [cls.swiper]
              )}
            >
              {banner.IntroCard &&
                banner.IntroCard.map((card) => {
                  return (
                    <div
                      key={card.id}
                      className={classNames(
                        "intro__card intro-cards__item swiper-slide",
                        {},
                        []
                      )}
                    >
                      <div className="intro-cards__content">
                        <div className="intro-cards__value">{card.title}</div>
                        <div className="intro-cards__info">{card.info}</div>
                      </div>
                      <div
                        className={`intro-cards__image intro-cards-${card.selectClass[0]}`}
                      >
                        {card.selectClass[0] === "__image--group" ? (
                          <>
                            {arrImages[card.selectClass[0] as IconsType].map(
                              (el: string) => (
                                <div
                                  key={el}
                                  className="intro-cards__image-item"
                                >
                                  <Image
                                    onContextMenu={(e) => handleContextMenu(e)}
                                    src={el}
                                    width={57}
                                    height={57}
                                    alt=""
                                  />
                                </div>
                              )
                            )}
                          </>
                        ) : (
                          arrImages[card.selectClass[0] as IconsType]
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {isPhone.matches && animation && <ButtonIntro />}
        </div>
      </div>
    </section>
  );
});

export { Banner };
