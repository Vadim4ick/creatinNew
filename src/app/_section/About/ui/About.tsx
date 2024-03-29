"use client";

import { GetStudioQuery } from "@/graphql/__generated__";
import { useSwiper } from "@/shared/hooks/useSwiper";
import { Achievement } from "@/shared/icons/introBanner/Achievement";
import { Graph } from "@/shared/icons/introBanner/Graph";
import { Trust } from "@/shared/icons/introBanner/Trust";
import Image from "next/image";
import React, { useRef } from "react";
import { A11y, Mousewheel } from "swiper";
import cls from "./About.module.scss";
import { AboutLogo } from "@/shared/icons/AboutLogo";
import ReactMarkdown from "react-markdown";
import { SplitTypeAnimation } from "@/shared/hooks/useSplitTypeAnimation";
import { IconsType } from "@/shared/type/iconsType";

type PartialImages = Partial<Record<IconsType, any>>;

const arrImages: PartialImages = {
  graph: <Graph />,
  trust: <Trust />,
  achievement: <Achievement />,
  "__image--group": [
    "/img/about/03.png",
    "/img/about/02.png",
    "/img/about/01.png",
  ],
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
                      className={`intro-cards__image intro-cards-${card.selectClass[0]}`}
                    >
                      {card.selectClass[0] === "__image--group" ? (
                        <>
                          {arrImages[card.selectClass[0] as IconsType].map(
                            (el: string) => (
                              <div key={el} className="intro-cards__image-item">
                                <Image src={el} width={57} height={57} alt="" />
                              </div>
                            )
                          )}
                        </>
                      ) : (
                        arrImages[card.selectClass[0] as IconsType]
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
                <ReactMarkdown
                  skipHtml
                  components={{
                    p: ({ children }) => {
                      return (
                        <span>
                          {children
                            ?.toString()
                            .split(",\n")
                            .map((line, index) => (
                              <React.Fragment key={index}>
                                {line}
                                {/* @ts-ignore */}
                                {index < children.length - 1 && <br />}
                              </React.Fragment>
                            ))}
                        </span>
                      );
                    },
                  }}
                >
                  {aboutSection.aboutSection.aboutTitle}
                </ReactMarkdown>
              </h3>
              <div className="about__item-info">
                <ReactMarkdown
                  skipHtml
                  components={{
                    p: ({ children }) => {
                      return (
                        <span>
                          {children
                            ?.toString()
                            .split(",\n")
                            .map((line, index) => (
                              <React.Fragment key={index}>
                                {line}
                                {/* @ts-ignore */}
                                {index < children.length - 1 && <br />}
                              </React.Fragment>
                            ))}
                        </span>
                      );
                    },
                  }}
                >
                  {aboutSection.aboutSection.aboutDescription}
                </ReactMarkdown>
              </div>
            </div>
            <div className="about__item about__item--logo">
              <AboutLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
