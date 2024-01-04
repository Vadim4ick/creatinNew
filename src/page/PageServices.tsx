"use client";

import { GetServiceByIdQuery, GetServicesNamesQuery } from "@/graphql/client";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Sidebar } from "@/components/Sidebar";
import React, { memo, useCallback, useEffect, useState } from "react";
import { RelevantProjects } from "@/app/services/_sections/Relevant-project";
import { Loader } from "@/shared/ui/Loader/Loader";
import { useGetServiceByNameID } from "@/shared/services/serviceByNameID";
import { getRouteService } from "@/shared/const/pages";
import { TextBlocks } from "@/components/TextBlocks";

const PageServices = memo(
  ({
    serviceNames,
  }: {
    serviceNames: GetServicesNamesQuery["serviceNames"]["data"];
  }) => {
    const [serviceNameActive, setServiceNameActive] = useState(
      serviceNames[0].id
    );

    const [service, setService] = useState<
      GetServiceByIdQuery["services"]["data"][0]["attributes"] | undefined
    >(undefined);

    const onChange = useCallback((id: string) => {
      setServiceNameActive(id);
    }, []);

    const { data: serviceData, isLoading: isLoadingService } =
      useGetServiceByNameID(serviceNameActive);

    useEffect(() => {
      if (serviceData?.services.data[0]) {
        setService(serviceData.services.data[0].attributes);
      } else {
        setService(undefined);
      }
    }, [serviceData]);

    if (isLoadingService) {
      return <Loader />;
    }

    return (
      <main className="page page--hassidebar">
        <div className="page__container">
          <Sidebar
            active={serviceNameActive}
            onChange={onChange}
            items={serviceNames}
            viewSpecialOffers={true}
          />

          {!service && <div>У этого раздела пока нет услуги</div>}

          {service && (
            <div className="page__base">
              <section className="hero">
                <div className="hero__left">
                  <h1 className="hero__title">{service?.title}</h1>

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
                    {service?.description}
                  </ReactMarkdown>
                </div>
              </section>

              <div className="video">
                <div
                  className="video__item"
                  // @ts-ignore
                  style={{ "--icon": "url(/img/icons/video-icon.svg)" }}
                ></div>
              </div>

              {service.Services.service_collections.data && (
                <section className="services">
                  <div className="services__left">
                    <h2 className="services__title" data-observe>
                      {service?.Services.title}
                    </h2>
                    <p className="services__subtitle">
                      {service?.Services.description}
                    </p>
                  </div>

                  <div className="services__row">
                    {service.Services.service_collections.data.map(
                      (service) => (
                        <Link
                          key={service.id}
                          href={getRouteService(service.id)}
                          className="services__column"
                          // @ts-ignore
                          style={{ "--icon": "url(/img/icons/services.svg)" }}
                        >
                          <div className="services__name">
                            {service.attributes.title}
                          </div>
                          <div className="services__info">
                            {service.attributes.description}
                          </div>
                        </Link>
                      )
                    )}
                  </div>
                </section>
              )}

              {service.textBlocks && <TextBlocks blocks={service.textBlocks} />}

              {service.SliderCase && (
                <RelevantProjects cases={service.SliderCase.cases.data} />
              )}

              <div className="cta">
                <div className="cta__title">
                  Здесь будет CTA баннер, под него нужно оставить просто
                  контейнер
                </div>
                <div className="cta__image"></div>
              </div>
            </div>
          )}
        </div>
      </main>
    );
  }
);

export { PageServices };
