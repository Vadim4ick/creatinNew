"use client";

import { RelevantProjects } from "@/app/services/_sections/Relevant-project";
import { SectionTitle } from "@/app/services/_sections/SectionTitle";
import { Sidebar } from "@/components/Sidebar";
import { TextBlocks } from "@/components/TextBlocks";
import {
  GetServiceCollectionByIdQuery,
  GetServicesTitleByIdQuery,
} from "@/graphql/__generated__";
import { priceFormatter } from "@/shared/helpers/priceFormatter";
import React, { memo, useCallback, useState } from "react";
import ReactMarkdown from "react-markdown";

const ServiceCollection = memo(
  ({
    serviceCollection,
    titleServices,
  }: {
    serviceCollection: GetServiceCollectionByIdQuery["serviceCollection"]["data"];
    titleServices: GetServicesTitleByIdQuery["services"]["data"];
  }) => {
    const [serviceNameActive, setServiceNameActive] = useState(
      serviceCollection.id
    );

    const onChange = useCallback((id: string) => {
      setServiceNameActive(id);
    }, []);

    return (
      <main className="page page--hassidebar">
        <div className="page__container">
          <aside className="sidebar">
            <Sidebar
              onChange={onChange}
              active={serviceNameActive}
              viewSpecialOffers={true}
              items={
                titleServices[0].attributes.Services.service_collections.data
              }
            />
          </aside>

          <div className="page__base">
            <section
              className="hero fade-up mb-96"
              data-watch
              data-watch-once
              data-watch-margin="30"
            >
              <div className="hero__left">
                <h1 className="hero__title">
                  {serviceCollection.attributes.name}
                </h1>

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
                  {serviceCollection.attributes.description}
                </ReactMarkdown>
              </div>

              <div className="hero__right">
                <div
                  className="hero-card"
                  // @ts-ignore
                  style={{ "--icon": "url(/img/icons/price.svg)" }}
                >
                  <div className="hero-card__icon"></div>
                  <div className="hero-card__name">
                    <span> Стоимость </span>
                  </div>
                  <div className="hero-card__value">
                    <span>
                      от
                      <b className="_rub">
                        {` ${priceFormatter(
                          serviceCollection.attributes.price
                        )}`}
                      </b>
                    </span>
                  </div>
                </div>

                {serviceCollection.attributes.deadlines && (
                  <div
                    className="hero-card mobile-block"
                    // @ts-ignore
                    style={{ "--icon": "url(/img/icons/time.svg)" }}
                  >
                    <div className="hero-card__icon"></div>
                    <div className="hero-card__name">
                      <span> срок выполнения </span>
                    </div>
                    <div className="hero-card__value">
                      <span>
                        <b>{serviceCollection.attributes.deadlines}</b>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </section>

            <div className="video fade-up" data-da=".hero,767,1">
              <div
                className="video__item"
                // @ts-ignore
                style={{ "--icon": "url(/img/icons/video-icon.svg)" }}
              ></div>
            </div>

            {serviceCollection.attributes.textBlocks && (
              <TextBlocks
                blocks={serviceCollection.attributes.textBlocks}
                animation={true}
              />
            )}

            {serviceCollection.attributes.Title && (
              <SectionTitle title={serviceCollection.attributes.Title} />
            )}

            {serviceCollection.attributes.sliderCase && (
              <RelevantProjects
                animation={true}
                cases={serviceCollection.attributes.sliderCase.cases.data}
              />
            )}

            <div
              className="cta fade-up"
              data-watch
              data-watch-once
              data-watch-margin="30"
            >
              <div className="cta__title">
                Здесь будет CTA баннер, под него нужно оставить просто контейнер
              </div>
              <div className="cta__image"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }
);

export { ServiceCollection };
