"use client";

import { RelevantProjects } from "@/app/services/_sections/Relevant-project";
import { SectionTitle } from "@/app/services/_sections/SectionTitle";
import { Sidebar } from "@/components/Sidebar";
import { TextBlocks } from "@/components/TextBlocks";
import {
  GetServiceCollectionByIdQuery,
  GetServicesTitleByIdQuery,
} from "@/graphql/__generated__";
import { Footer } from "@/layouts/Footer/ui/Footer";
import { priceFormatter } from "@/shared/helpers/priceFormatter";
import useSmoothScrollToTop from "@/shared/hooks/useSmoothScrollToTop";
import { useGetServicesCollectionById } from "@/shared/services/serviceCollectionById";
import { Loader } from "@/shared/ui/Loader/Loader";
import React, { memo, useCallback, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface IndexDateState {
  id: string;
  index: number;
}

const ServiceCollection = memo(
  ({
    id,
    titleServices,
  }: {
    id: string;
    titleServices: GetServicesTitleByIdQuery["services"]["data"];
  }) => {
    const [serviceNameActive, setServiceNameActive] = useState(id);

    const [indexDate, setIndexDate] = useState<IndexDateState[] | null>(null);

    useSmoothScrollToTop({
      trigger: serviceNameActive,
      time: 100,
    });

    const [serviceCollection, setServiceCollection] = useState<
      | GetServiceCollectionByIdQuery["serviceCollection"]["data"]["attributes"]
      | undefined
    >(undefined);

    const onChange = useCallback((id: string) => {
      setServiceNameActive(id);
    }, []);

    const onClickFooter = () => {
      if (!indexDate) {
        return null;
      }

      const currentDate = indexDate.filter((el) => el.id === serviceNameActive);

      const nextDate = currentDate[0].index + 1;

      if (
        nextDate >=
        titleServices[0].attributes.Services.service_collections.data.length
      ) {
        setServiceNameActive(indexDate[0].id);
      } else {
        setServiceNameActive(indexDate[nextDate].id);
      }
    };

    const { data, isLoading } = useGetServicesCollectionById(serviceNameActive);

    useEffect(() => {
      if (data?.serviceCollection) {
        setServiceCollection(data.serviceCollection.data.attributes);
      } else {
        setServiceCollection(undefined);
      }
    }, [data]);

    useEffect(() => {
      // Создаем массив индексов от 0 до (длины массива - 1)
      const initialIndexes =
        titleServices[0].attributes.Services.service_collections.data.map(
          (item, index) => ({
            id: item.id,
            index,
          })
        );

      setIndexDate(initialIndexes);
    }, [titleServices]);

    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
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
                  <h1 className="hero__title">{serviceCollection?.name}</h1>

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
                    {serviceCollection?.description}
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

              <div className="video fade-up" data-da=".hero,767,1">
                <div
                  className="video__item"
                  // @ts-ignore
                  style={{ "--icon": "url(/img/icons/video-icon.svg)" }}
                ></div>
              </div>

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

              <div
                className="cta fade-up"
                data-watch
                data-watch-once
                data-watch-margin="30"
              >
                <div className="cta__title">
                  Здесь будет CTA баннер, под него нужно оставить просто
                  контейнер
                </div>
                <div className="cta__image"></div>
              </div>
            </div>
          </div>
        </main>

        {serviceCollection?.Footer && (
          <Footer
            title={serviceCollection.Footer.title}
            img={serviceCollection.Footer.img.data.attributes}
            callback={onClickFooter}
          />
        )}
      </>
    );
  }
);

export { ServiceCollection };
