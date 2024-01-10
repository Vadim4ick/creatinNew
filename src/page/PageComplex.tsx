"use client";

import {
  GetComplexByIdQuery,
  GetComplexNamesQuery,
} from "@/graphql/__generated__";
import ServiceLayout from "@/layouts/ServiceLayout";
import { priceFormatter } from "@/shared/helpers/priceFormatter";
import { useGetComplexById } from "@/shared/services/complexById";
import { Spoller } from "@/shared/ui/Spoller";
import React, { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";

const PageComplex = ({
  complexesNames,
  id,
}: {
  complexesNames: GetComplexNamesQuery["complexes"]["data"];
  id: string;
}) => {
  const [complexId, setComplexId] = useState(id);

  const { data, isLoading } = useGetComplexById(complexId);

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

  return (
    <ServiceLayout
      isLoading={isLoading}
      items={complexesNames}
      serviceId={complexId}
      setId={setComplexId}
      footer={complex?.footer}
      containerClass={"page__container--sidebar"}
    >
      <div className="page__base">
        <section
          className="hero fade-up mb-11"
          data-watch
          data-watch-once
          data-watch-margin="30"
        >
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
                          .split("\n")
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
          <div
            className="video fade-up desktop-hidden"
            data-watch
            data-watch-once
            data-watch-margin="30"
            data-da=".hero,767,1"
          >
            <div
              className="video__item"
              // @ts-ignore
              style={{ "--icon": "url(/img/icons/video-icon.svg)" }}
            >
              <img src="./img/promotion/01.png" alt="" />
            </div>
          </div>
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
                      `${priceFormatter(complex.offer.price)}`
                    </b>
                  </span>
                </div>
              )}
            </div>
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
                  <b>500</b>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="includes mt-11">
          <h2 className="includes__title desktop-hidden" data-observe>
            Что входит:
          </h2>

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
                                      .split("\n")
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
                </div>
              ))}
          </div>
        </section>

        <div
          className="cta fade-up"
          data-watch
          data-watch-once
          data-watch-margin="30"
        >
          <div className="cta__title ">
            Здесь будет CTA баннер, под него нужно оставить просто контейнер
          </div>
          <div className="cta__image"></div>
        </div>
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
                    {`${priceFormatter(complex.offer.price)}`}
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
