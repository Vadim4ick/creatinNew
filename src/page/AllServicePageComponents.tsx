"use client";

import {
  GetServiceByIdQuery,
  GetServicesNamesQuery,
} from "@/graphql/__generated__";
import ServiceLayout from "@/layouts/ServiceLayout";
import { useGetServiceByNameID } from "@/shared/services/serviceByNameID";
import React, { memo, useEffect, useMemo, useState } from "react";
import { BurgerServices } from "../components/Burger/ui/BurgerServices/BurgerServices";
import { TextBlocks } from "../components/TextBlocks";
import { RelevantProjects } from "../components/Relevant-project";
import { ContentBanner } from "../components/ContentBanner";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Video } from "../components/Video";
import { getRouteService, getRouteServices } from "@/shared/const/pages";

const AllServicePageComponents = memo(
  ({
    serviceNames,
    id,
  }: {
    serviceNames: GetServicesNamesQuery["serviceNames"]["data"];
    id: string;
  }) => {
    const { data: serviceData, isLoading: isLoadingService } =
      useGetServiceByNameID(id);

    const [service, setService] = useState<
      GetServiceByIdQuery["services"]["data"][0]["attributes"] | undefined
    >(undefined);

    const index = useMemo(
      () => serviceNames.findIndex((el) => el.id === id),
      [id, serviceNames]
    );

    useEffect(() => {
      if (serviceData?.services.data[0]) {
        setService(serviceData.services.data[0].attributes);
      } else {
        setService(undefined);
      }
    }, [serviceData]);

    // Mobile
    const nameBurger = useMemo(() => {
      return serviceNames[index].attributes.name;
    }, [index, serviceNames]);

    return (
      <ServiceLayout
        footer={serviceNames[index].attributes.footer}
        isLoading={isLoadingService}
        items={serviceNames}
        serviceId={id}
        urlPathname={getRouteServices()}
        BugerMenu={({ complexTitle }: { complexTitle: any }) => (
          <BurgerServices
            complexTitle={complexTitle}
            SubMenuName={nameBurger}
            items={serviceNames}
          />
        )}
      >
        {service && (
          <div className="page__base">
            <section className="hero">
              <div className="hero__left">
                <h1 className="hero__title">{service.title}</h1>

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
                  {service.description}
                </ReactMarkdown>
              </div>
            </section>

            {service.video.data && (
              <Video srcMedia={service.video.data.attributes} />
            )}

            {service.Services && (
              <section className="services">
                <div className="services__left">
                  <h2 className="services__title" data-observe>
                    {service.Services.title}
                  </h2>
                  <p className="services__subtitle">
                    {service.Services.description}
                  </p>
                </div>

                <div className="services__row">
                  {service.Services.service_collections.data.map((item) => (
                    <Link
                      key={item.id}
                      href={getRouteService(
                        service.serviceName.data.attributes.name,
                        item.id
                      )}
                      className="services__column"
                      // @ts-ignore
                      style={{ "--icon": "url(/img/icons/services.svg)" }}
                    >
                      <div className="services__name">
                        {item.attributes.name}
                      </div>
                      <div className="services__info">
                        <ReactMarkdown
                          skipHtml
                          components={{
                            p: ({ children }) => {
                              return (
                                <>
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
                                </>
                              );
                            },
                          }}
                        >
                          {item.attributes.description}
                        </ReactMarkdown>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {service.textBlocks && <TextBlocks blocks={service.textBlocks} />}

            {service.SliderCase?.cases && (
              <RelevantProjects cases={service.SliderCase.cases.data} />
            )}

            {service.contentBanner.data && (
              <ContentBanner content={service.contentBanner.data.attributes} />
            )}
          </div>
        )}
      </ServiceLayout>
    );
  }
);

export { AllServicePageComponents };
