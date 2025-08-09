"use client";

import { BurgerAbout } from "@/components/Burger/ui/BurgerAbout/Burger";
import {
  GetComplexByIdQuery,
  GetComplexNamesQuery,
} from "@/graphql/__generated__";
import ServiceLayout from "@/layouts/ServiceLayout";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { useMedia } from "@/shared/hooks/useMedia";
import { useGetComplexById } from "@/shared/services/complexById";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import React from "react";
import { Video } from "@/components/Video";
import { priceFormatter } from "@/shared/helpers/priceFormatter";
import { SplitTypeAnimation } from "@/shared/hooks/useSplitTypeAnimation";
import { Spoller } from "@/shared/ui/Spoller";
import { CtaBanner } from "@/components/CtaBanner";
import { getRouteComplexPage } from "@/shared/const/pages";

const PageComplex = ({
  complexesNames,
  id,
}: {
  complexesNames: GetComplexNamesQuery["complexes"]["data"];
  id: string;
}) => {
  const refSection = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);

  const { data, isLoading } = useGetComplexById(id);

  const isPhone = useMedia("(max-width: 767px)");

  const [complex, setComplex] = useState<
    GetComplexByIdQuery["complex"]["data"]["attributes"] | undefined
  >(undefined);

  useEffect(() => {
    if (data?.complex) {
      setComplex(data.complex.data.attributes);
    } else {
      setComplex(undefined);
    }
  }, [data]);

  useIntersectionObserver({
    refs: [refSection],
    once: true,
  });

  return (
    <ServiceLayout
      isLoading={isLoading}
      items={complexesNames}
      serviceId={id}
      urlPathname={getRouteComplexPage()}
      containerClass={"page__container--sidebar"}
      BugerMenu={() => <BurgerAbout SubMenuName="услуги" />}
    >
      <div className="page__base">
        <section className="hero fade-up mb-11" ref={refSection}>
          <div className="hero__left">
            {complex?.name && (
              <h1 className="hero__title">Пакет “{complex.name}”</h1>
            )}

            <ReactMarkdown
              skipHtml
              components={{
                p: ({ children }) => {
                  return (
                    <>
                      <div className="hero__info">
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
                      </div>
                    </>
                  );
                },
              }}
            >
              {complex?.description}
            </ReactMarkdown>
          </div>

          {complex?.videoMobile.data && (
            <Video
              srcMedia={complex.videoMobile.data.attributes}
              style={{
                marginBottom: isPhone.matches ? 0 : undefined,
                display: isPhone.matches ? "block" : "none",
              }}
              animation={true}
            />
          )}

          <div className="hero__right  tablet-hidden">
            <div
              className="hero-card"
              // @ts-ignore
              style={{ "--icon": "url(/img/icons/price.svg)" }}
            >
              <div className="hero-card__icon"></div>
              <div className="hero-card__name">
                <span>Стоимость</span>
              </div>
              {complex?.offer.price && (
                <div className="hero-card__value">
                  <span>
                    <b className="_rub">
                      {`${priceFormatter(complex.offer.price)} `}
                    </b>
                  </span>
                </div>
              )}
            </div>

            {complex?.totalHours && (
              <div
                className="hero-card desktop-hidden"
                // @ts-ignore
                style={{ "--icon": "url(/img/icons/time.svg)" }}
              >
                <div className="hero-card__icon"></div>
                <div className="hero-card__name">
                  <span>общее кол-во часов</span>
                </div>
                <div className="hero-card__value">
                  <span>
                    <b>{complex.totalHours}</b>
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="includes mt-11">
          <SplitTypeAnimation refChar={titleRef} bg="#aaaaaa" fg="#181818">
            <h2 ref={titleRef} className="includes__title desktop-hidden">
              Что входит:
            </h2>
          </SplitTypeAnimation>

          <div className="includes__row mb-116">
            {complex?.includes_blocks.data &&
              complex.includes_blocks.data.map((el) => (
                <div key={el.id} className="includes__inner">
                  <div className="includes__column">
                    <h2 className="includes__name">{el.attributes.title}</h2>

                    {el.attributes.includesContent.map((content) => (
                      <div key={content.id} className="includes__item">
                        <Spoller
                          className="includes__text"
                          // @ts-ignore
                          style={{ "--icon": "url(/img/icons/spoller.svg)" }}
                          btn={<>{content.title}</>}
                        >
                          <ReactMarkdown
                            skipHtml
                            components={{
                              p: ({ children }) => {
                                return (
                                  <div className="includes__info">
                                    {children
                                      ?.toString()
                                      .split(",\n")
                                      .map((line, index) => (
                                        <React.Fragment key={index}>
                                          {line}
                                          {/* @ts-ignore */}
                                          {index < children.length - 1 && (
                                            <br />
                                          )}
                                        </React.Fragment>
                                      ))}
                                  </div>
                                );
                              },
                            }}
                          >
                            {content.content}
                          </ReactMarkdown>
                        </Spoller>
                      </div>
                    ))}
                  </div>
                  {el.attributes.blockHover.title && (
                    <div className="includes__hover">
                      <div className="includes__hover-item">
                        <div className="includes__hover-name">
                          {el.attributes.blockHover.title}
                        </div>
                        <div className="includes__hover-val">
                          <b>{el.attributes.blockHover.text}</b>
                        </div>
                      </div>
                      <div className="includes__hover-item">
                        <div className="includes__hover-name">
                          {el.attributes.blockHover.subTitle}
                        </div>
                        <div className="includes__hover-val">
                          <ul>
                            <ReactMarkdown skipHtml>
                              {el.attributes.blockHover.list}
                            </ReactMarkdown>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </section>

        {complex?.banner.data && (
          <CtaBanner animation={true} src={complex.banner.data.attributes} />
        )}
      </div>

      <aside className="page__right ">
        <div className="page__right-inner">
          <div
            className="hero-card"
            // @ts-ignore
            style={{ "--icon": "url(/img/icons/price.svg)" }}
          >
            <div className="hero-card__icon"></div>
            <div className="hero-card__name">
              <span>Стоимость</span>
            </div>
            {complex?.offer.price && (
              <div className="hero-card__value">
                <span>
                  от
                  <b className="_rub">
                    {` ${priceFormatter(complex.offer.price)} `}
                  </b>
                </span>
              </div>
            )}
          </div>
          <div
            className="hero-card mobile-block"
            // @ts-ignore
            style={{ "--icon": "url(/img/icons/time.svg)" }}
          >
            <div className="hero-card__icon"></div>
            <div className="hero-card__name">
              <span>срок выполнения</span>
            </div>

            {complex?.deadlines && (
              <div className="hero-card__value">
                <span>
                  <b>{complex.deadlines}</b>
                </span>
              </div>
            )}
          </div>
        </div>
      </aside>
    </ServiceLayout>
  );
};

export { PageComplex };
