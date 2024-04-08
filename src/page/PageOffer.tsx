"use client";

import {
  GetFormFeedbackQuery,
  GetOfferByIdQuery,
  GetServicesNamesOfferQuery,
} from "@/graphql/__generated__";
import { Spoller } from "@/shared/ui/Spoller";
import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import ServiceLayout from "@/layouts/ServiceLayout";
import { useGetOffersById } from "@/shared/services/offerById";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { SplitTypeAnimation } from "@/shared/hooks/useSplitTypeAnimation";
import { BurgerAbout } from "@/components/Burger/ui/BurgerAbout/Burger";
import { classNames } from "@/shared/lib";
import { OfferTopBanner } from "@/components/OfferTopBanner";
import { Video } from "@/components/Video";
import { TextBlocks } from "@/components/TextBlocks";
import { RelevantProjects } from "@/components/Relevant-project";
import { useRouter } from "next/navigation";
import { Loader } from "@/shared/ui/Loader/Loader";
import { getRouteOffers } from "@/shared/const/pages";
import { SectionTitle } from "@/app/services/_sections/SectionTitle";

const PageOffer = ({
  serviceNames,
  id,
  formFeedback,
}: {
  serviceNames: GetServicesNamesOfferQuery["serviceNames"]["data"];
  id: string;
  formFeedback: GetFormFeedbackQuery["formFeedback"];
}) => {
  const [activeServiceId, setActiveServicesId] = useState<string | undefined>(
    undefined
  );

  const refSection = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);

  const { data, isLoading } = useGetOffersById(id);

  const [offer, setOffer] = useState<
    GetOfferByIdQuery["offer"]["data"]["attributes"] | undefined
  >(undefined);

  const router = useRouter();

  useEffect(() => {
    if (data?.offer) {
      if (data.offer.data) {
        setActiveServicesId(data.offer.data.attributes.service_name.data.id);

        setOffer(data.offer.data.attributes);
      }
    } else {
      setActiveServicesId("");
      setOffer(undefined);
    }
  }, [data]);

  useIntersectionObserver({
    refs: [refSection],
    once: true,
  });

  const onChangeDop = (id: string) => {
    const offer = serviceNames.filter((el) => {
      return el.id == id;
    });

    router.push(getRouteOffers(offer[0].attributes.offers.data[0].id));
  };

  const onChangeDopFooter = () => {
    const initialIndexes = serviceNames.map((item, index) => ({
      id: item.id,
      index,
      offers: item.attributes.offers,
    }));

    const idx = serviceNames.findIndex((el) => el.id === activeServiceId);

    const nextDate = initialIndexes[idx + 1];

    if (nextDate) {
      router.push(getRouteOffers(nextDate.offers.data[0].id));
    } else {
      router.push(getRouteOffers(initialIndexes[0].offers.data[0].id));
    }
  };

  if (!activeServiceId || isLoading) {
    return <Loader />;
  }

  return (
    <ServiceLayout
      items={serviceNames}
      isLoading={isLoading}
      serviceId={activeServiceId}
      footer={offer?.footer}
      footerCls={"footer--whte footer-offer"}
      mainClass={""}
      BugerMenu={() => <BurgerAbout SubMenuName="услуги" />}
      formFeedback={formFeedback.data.attributes.formFeedback}
      onChangeDop={onChangeDop}
      onChangeDopFooter={onChangeDopFooter}
    >
      <div className="page__base">
        <section className="fade-up mb-42" ref={refSection}>
          {offer?.offerBanner.data.attributes && (
            <OfferTopBanner banner={offer.offerBanner.data.attributes} />
          )}
        </section>

        {offer?.headingBanner.data && (
          <Video
            animation={true}
            srcMedia={offer.headingBanner.data.attributes}
          />
        )}

        {offer?.textBlocks && <TextBlocks blocks={offer.textBlocks} />}

        {offer?.Title && <SectionTitle title={offer.Title} />}

        {offer?.includes_blocks.data &&
          offer?.includes_blocks.data.length > 0 && (
            <section className="includes mb-96">
              <SplitTypeAnimation refChar={titleRef} bg="#aaaaaa" fg="#181818">
                <h2 ref={titleRef} className="includes__title">
                  Что входит:
                </h2>
              </SplitTypeAnimation>

              <div
                className={`includes__row--no-hover ${
                  offer?.includes_blocks.data.some(
                    (el) => el.attributes.blockHover.title
                  ) && "includes__row"
                }`}
              >
                {offer.includes_blocks.data.map((el) => (
                  <div
                    key={el.id}
                    className={classNames("includes__inner", {}, [])}
                  >
                    <div className="includes__column">
                      <div className="includes__name">
                        {el.attributes.title}
                      </div>

                      {el.attributes.includesContent.map((content) => (
                        <div key={content.id} className="includes__item">
                          <Spoller
                            className="includes__text"
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
          )}

        {offer?.sliderCase && offer?.sliderCase.cases.data.length > 0 && (
          <RelevantProjects cases={offer.sliderCase.cases.data} />
        )}
      </div>
    </ServiceLayout>
  );
};

export { PageOffer };
