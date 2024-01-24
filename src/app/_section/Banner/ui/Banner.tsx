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
import { Portal } from "@/shared/ui/Portal";
import Image from "next/image";
import { memo, useContext, useEffect, useMemo, useRef } from "react";
import { A11y, Mousewheel } from "swiper";
import cls from "./Banner.module.scss";
import { classNames } from "@/shared/lib";
import { BannerAnimationProviderContext } from "@/shared/providers/bannerAnimationProvider";

interface BannerProps {
  banner: GetHomePageQuery["homePage"]["data"]["attributes"]["HomeBanner"];
}

type PartialImages = Partial<Record<IconsType, any>>;

let ANIMATION_DELAY = 19000;
let ANIMATION_DELAY_MOBILE = 13000;

const arrImages: PartialImages = {
  folders: <Folder />,
  spiral: <Spiral />,
  "__image--group": [
    "/img/intro/01.png",
    "/img/intro/02.png",
    "/img/intro/03.png",
  ],
};

const ButtonIntro = () => {
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
};

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

  // animation
  const contentInfo = useRef<HTMLDivElement | null>(null);
  const contentCards = useRef<HTMLDivElement | null>(null);

  const { animation, setAnimation } = useContext(
    BannerAnimationProviderContext
  );

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

  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     // onComplete: () => {
  //     //   console.log("finish");
  //     //   setAnimation(true);
  //     // },
  //   });

  //   if (isPhone.matches) {
  //     tl.from(contentInfo.current, {
  //       opacity: 0,
  //       ease: "power1.out",
  //       delay: ANIMATION_DELAY_MOBILE,
  //       position: "relative",
  //       left: "-150px",

  //       duration: 3,
  //     });

  //     gsap.to(contentCards.current, {
  //       opacity: 1,
  //       ease: "power1.out",
  //       delay: ANIMATION_DELAY_MOBILE,
  //       right: 0,
  //       duration: 3,
  //     });
  //   } else {
  //     tl.from(contentInfo.current, {
  //       opacity: 0,
  //       ease: "power1.out",
  //       delay: ANIMATION_DELAY,
  //       position: "relative",
  //       left: "-150px",
  //       bottom: "-150px",
  //       duration: 3,
  //     });

  //     gsap.to(contentCards.current, {
  //       opacity: 1,
  //       ease: "power1.out",
  //       delay: ANIMATION_DELAY,
  //       right: 0,
  //       duration: 3,
  //     });
  //   }
  // }, [{ scope: contentInfo }, { scope: contentCards }]);

  return (
    <section ref={bannerRef} className="intro">
      <div className="intro__container">
        <div ref={test} className="intro__inner">
          <div
            className="intro__row"
            style={banner.bannerMasks ? customStyles : undefined}
          >
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
              <div className="intro__title">
                <p>Стратегии, брендинг</p>
                <p>и digital-решения для компаний,</p>
                <p>
                  готовых <br />к <span>изменениям</span>
                </p>
              </div>
              {isPhone.matches ? (
                test.current &&
                animation && (
                  <Portal element={test.current}>
                    <ButtonIntro />
                  </Portal>
                )
              ) : (
                <>{animation && <ButtonIntro />}</>
              )}
            </div>
            <div className="intro__bg">
              {isPhone.matches ? (
                <Image src={"/banner/showmobil.gif"} fill alt="" />
              ) : (
                <Image src={"/banner/show.gif"} fill alt="" />
              )}
            </div>
          </div>
          <div
            ref={introCardsSwiperRef}
            className="intro__cards intro-cards swiper js-intro-cards"
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
                      className="intro__card intro-cards__item swiper-slide"
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
        </div>
      </div>
    </section>
  );
});

export { Banner };
