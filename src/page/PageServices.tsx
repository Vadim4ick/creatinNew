"use client";

import { GetServiceByIdQuery, GetServicesNamesQuery } from "@/graphql/client";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import React, { memo, useEffect, useMemo, useState } from "react";
import { RelevantProjects } from "@/components/Relevant-project";
import { useGetServiceByNameID } from "@/shared/services/serviceByNameID";
import { getRouteService } from "@/shared/const/pages";
import { TextBlocks } from "@/components/TextBlocks";
import ServiceLayout from "@/layouts/ServiceLayout";
import { Video } from "@/components/Video";
import { CtaBanner } from "@/components/CtaBanner";
import { STORAGE_KEYS } from "@/shared/const/storageKey";
import { BurgerServices } from "@/components/Burger/ui/BurgerServices/BurgerServices";

const PageServices = memo(
  ({
    serviceNames,
  }: {
    serviceNames: GetServicesNamesQuery["serviceNames"]["data"];
  }) => {
    const [serviceId, setServiceId] = useState<string>(
      (typeof window !== "undefined" &&
        sessionStorage.getItem(STORAGE_KEYS.SERVICE_ID)) ||
        serviceNames[0].id
    );

    const { data: serviceData, isLoading: isLoadingService } =
      useGetServiceByNameID(serviceId);

    const [service, setService] = useState<
      GetServiceByIdQuery["services"]["data"][0]["attributes"] | undefined
    >(undefined);

    const index = useMemo(
      () => serviceNames.findIndex((el) => el.id === serviceId),
      [serviceId, serviceNames]
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
      <>
        <ServiceLayout
          footer={serviceNames[index].attributes.footer}
          isLoading={isLoadingService}
          items={serviceNames}
          setId={setServiceId}
          serviceId={serviceId}
          BugerMenu={() => (
            <BurgerServices SubMenuName={nameBurger} items={serviceNames} />
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

              <Video />

              {service.Services.service_collections.data && (
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
                          {item.attributes.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {service.textBlocks && <TextBlocks blocks={service.textBlocks} />}

              {service.SliderCase && (
                <RelevantProjects cases={service.SliderCase.cases.data} />
              )}

              {service.banner.data.length !== 0 && (
                <CtaBanner src={service.banner.data[0].attributes} />
              )}
            </div>
          )}
        </ServiceLayout>
      </>
    );
  }
);

export { PageServices };
