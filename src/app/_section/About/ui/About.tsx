"use client";

import {
  Enum_Componentelementsintrocard_Class,
  GetStudioQuery,
} from "@/graphql/__generated__";
import { useSwiper } from "@/shared/hooks/useSwiper";
import { Achievement } from "@/shared/icons/introBanner/Achievement";
import { Graph } from "@/shared/icons/introBanner/Graph";
import { Trust } from "@/shared/icons/introBanner/Trust";
import Image from "next/image";
import { useRef } from "react";
import { A11y, Mousewheel } from "swiper";
import cls from "./About.module.scss";
import { AboutLogo } from "@/shared/icons/AboutLogo";
import ReactMarkdown from "react-markdown";
import { SplitTypeAnimation } from "@/shared/hooks/useSplitTypeAnimation";

type PartialImages = Partial<
  Record<Enum_Componentelementsintrocard_Class, any>
>;

const arrImages: PartialImages = {
  graph: <Graph />,
  trust: <Trust />,
  achievement: <Achievement />,
  image_group: ["/img/about/03.png", "/img/about/02.png", "/img/about/01.png"],
};

const About = ({
  aboutSection,
}: {
  aboutSection: GetStudioQuery["studio"]["data"]["attributes"];
}) => {
  const introCardsSwiperRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef(null);

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

  return (
    <section className="about">
      <div className="about__container">
        <SplitTypeAnimation bg="#aaaaaa" fg="#181818" refChar={titleRef}>
          <h1 ref={titleRef} className="about__title">
            {aboutSection.aboutSection.mainTitle}
          </h1>
        </SplitTypeAnimation>

        <div className={`about__row ${cls.row}`}>
          <div className="about__left">
            <div
              ref={introCardsSwiperRef}
              className={`about__cards intro-cards js-intro-cards swiper `}
            >
              <div className={`intro-cards__swiper swiper-wrapper }`}>
                {aboutSection.introCards.map((card) => (
                  <div
                    key={card.id}
                    className="about__card intro-cards__item swiper-slide"
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
                ))}
              </div>
            </div>
          </div>

          <div className="about__column">
            <ReactMarkdown
              skipHtml
              components={{
                p: ({ children }) => {
                  return (
                    <>
                      <div className="about__item about__item--top text-decorated">
                        {children}
                      </div>
                    </>
                  );
                },
                strong: ({ children }) => <b>{children}</b>,
              }}
            >
              {aboutSection.aboutSection.description}
            </ReactMarkdown>
            <div className="about__item about__item--text ">
              <h3 className="about__item-title">
                {aboutSection.aboutSection.aboutTitle}
              </h3>
              <div className="about__item-info">
                {aboutSection.aboutSection.aboutDescription}
              </div>
            </div>
            <div className="about__item about__item--logo ">
              <AboutLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
