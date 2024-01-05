"use client";

import { RelevantProjects } from "@/app/services/_sections/Relevant-project";
import { SectionTitle } from "@/app/services/_sections/SectionTitle";
import { TextBlocks } from "@/components/TextBlocks";
import {
  GetServiceCollectionByIdQuery,
  GetServicesTitleByIdQuery,
} from "@/graphql/__generated__";
import ServiceLayout from "@/layouts/ServiceLayout";
import { priceFormatter } from "@/shared/helpers/priceFormatter";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { useMedia } from "@/shared/hooks/useMedia";
import { useGetServicesCollectionById } from "@/shared/services/serviceCollectionById";
import React, { memo, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

const ServiceCollection = memo(
  ({
    id,
    titleServices,
  }: {
    id: string;
    titleServices: GetServicesTitleByIdQuery["services"]["data"];
  }) => {
    const [serviceNameActive, setServiceNameActive] = useState(id);

    const isPhone = useMedia("(max-width: 767px)");

    const refSection = useRef<HTMLElement | null>(null);
    const refBanner = useRef<HTMLDivElement | null>(null);
    const refVideo = useRef<HTMLDivElement | null>(null);

    const { data, isLoading } = useGetServicesCollectionById(serviceNameActive);

    const [serviceCollection, setServiceCollection] = useState<
      | GetServiceCollectionByIdQuery["serviceCollection"]["data"]["attributes"]
      | undefined
    >(undefined);

    useIntersectionObserver({
      refs: [refSection],
      once: true,
    });
    useIntersectionObserver({
      refs: [refVideo],
      once: true,
    });
    useIntersectionObserver({
      refs: [refBanner],
      once: true,
    });

    useEffect(() => {
      if (data?.serviceCollection) {
        setServiceCollection(data.serviceCollection.data.attributes);
      } else {
        setServiceCollection(undefined);
      }
    }, [data]);

    const video = (
      <div
        className="video fade-up"
        style={{ marginBottom: isPhone.matches ? 0 : undefined }}
      >
        <div
          className="video__item"
          // @ts-ignore
          style={{ "--icon": "url(/img/icons/video-icon.svg)" }}
        ></div>
      </div>
    );

    return (
      <ServiceLayout
        isLoading={isLoading}
        footer={serviceCollection?.Footer}
        serviceId={serviceNameActive}
        setId={setServiceNameActive}
        items={titleServices[0].attributes.Services.service_collections.data}
      >
        {!serviceCollection && <div>Такой коллекции пока не существует</div>}

        <div className="page__base">
          {serviceCollection?.name && (
            <section className="hero fade-up mb-96" ref={refSection}>
              <div className="hero__left">
                <h1 className="hero__title">{serviceCollection.name}</h1>

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
                  {serviceCollection.description}
                </ReactMarkdown>
              </div>

              {isPhone.matches && video}

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
                        {` ${priceFormatter(serviceCollection?.price)}`}
                      </b>
                    </span>
                  </div>
                </div>

                {serviceCollection?.deadlines && (
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
                        <b>{serviceCollection?.deadlines}</b>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {!isPhone.matches && video}

          {serviceCollection?.textBlocks && (
            <TextBlocks
              blocks={serviceCollection?.textBlocks}
              animation={true}
            />
          )}

          {serviceCollection?.Title && (
            <SectionTitle title={serviceCollection?.Title} />
          )}

          {serviceCollection?.sliderCase && (
            <RelevantProjects
              animation={true}
              cases={serviceCollection?.sliderCase.cases.data}
            />
          )}

          <div className="cta fade-up" ref={refBanner}>
            <div className="cta__title">
              Здесь будет CTA баннер, под него нужно оставить просто контейнер
            </div>
            <div className="cta__image"></div>
          </div>
        </div>
      </ServiceLayout>
    );
  }
);

export { ServiceCollection };
