"use client";

import { RelevantProjects } from "@/components/Relevant-project";
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
import { Video } from "@/components/Video";
import { BurgerServiceCollection } from "@/components/Burger/ui/BurgerServiceCollection/BurgerServiceCollection";
import { ContentBanner } from "@/components/ContentBanner";
import { getRouteServices } from "@/shared/const/pages";
import { classNames } from "@/shared/lib";
import cls from "./style.module.scss";

const ServiceCollection = memo(
  ({
    id,
    titleServices,
    title,
  }: {
    id: string;
    titleServices: GetServicesTitleByIdQuery["services"]["data"];
    title: string;
  }) => {
    const isPhone = useMedia("(max-width: 767px)");

    const refSection = useRef<HTMLElement | null>(null);
    const refVideo = useRef<HTMLDivElement | null>(null);

    const { data, isLoading } = useGetServicesCollectionById(id);

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

    useEffect(() => {
      if (data?.serviceCollection) {
        setServiceCollection(data.serviceCollection.data.attributes);
      } else {
        setServiceCollection(undefined);
      }
    }, [data]);

    const video = (
      <>
        {serviceCollection?.video.data && (
          <Video
            style={{ marginBottom: isPhone.matches ? 0 : undefined }}
            animation={true}
            srcMedia={serviceCollection.video.data.attributes}
          />
        )}
      </>
    );

    return (
      <ServiceLayout
        isLoading={isLoading}
        serviceId={id}
        urlPathname={`${getRouteServices()}/${title}`}
        items={titleServices[0].attributes.Services.service_collections.data}
        BugerMenu={({ complexTitle }: { complexTitle: any }) => (
          <BurgerServiceCollection
            complexTitle={complexTitle}
            SubMenuName={serviceCollection?.name || ""}
            items={
              titleServices[0]?.attributes.Services.service_collections.data
            }
            title={title}
          />
        )}
      >
        {!serviceCollection && <div>Такой коллекции пока не существует</div>}

        <div className="page__base">
          {video}

          {serviceCollection?.name && (
            <section
              className={classNames("fade-up mb-96", {}, [cls.hero])}
              ref={refSection}
            >
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
                  {serviceCollection.description}
                </ReactMarkdown>
              </div>

              <div className={cls.right}>
                <div
                  className={classNames(cls.card, {}, [cls.price])}
                  // @ts-ignore
                  style={{ "--icon": "url(/img/icons/price.svg)" }}
                >
                  <div style={{ margin: 0 }} className="hero-card__icon"></div>

                  <div className={cls.content}>
                    <p>Стоимость от</p>

                    <span>
                      {` ${priceFormatter(serviceCollection?.price)}`}
                    </span>
                  </div>
                </div>

                {serviceCollection?.deadlines && (
                  <div
                    className={classNames(cls.card, {}, [cls.time])}
                    // @ts-ignore
                    style={{ "--icon": "url(/img/icons/time.svg)" }}
                  >
                    <div
                      style={{ margin: 0 }}
                      className="hero-card__icon"
                    ></div>

                    <div className={cls.content}>
                      <p>срок выполнения</p>

                      <span>{serviceCollection?.deadlines}</span>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {serviceCollection?.textBlocks && (
            <TextBlocks
              blocks={serviceCollection.textBlocks}
              animation={true}
            />
          )}

          {serviceCollection?.Title && (
            <SectionTitle title={serviceCollection?.Title} />
          )}

          {serviceCollection?.sliderCase?.cases.data.length !== 0 &&
            serviceCollection?.sliderCase && (
              <RelevantProjects
                animation={true}
                cases={serviceCollection?.sliderCase.cases.data}
              />
            )}

          {serviceCollection?.contentBanner.data && (
            <ContentBanner
              content={serviceCollection.contentBanner.data.attributes}
            />
          )}
        </div>
      </ServiceLayout>
    );
  }
);

export { ServiceCollection };
