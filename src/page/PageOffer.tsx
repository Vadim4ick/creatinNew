"use client";

import { CtaBanner } from "@/components/CtaBanner";
import {
  GetFormFeedbackQuery,
  GetOfferByIdQuery,
  GetOffersNameQuery,
} from "@/graphql/__generated__";
import { Spoller } from "@/shared/ui/Spoller";
import React, { useContext, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import ServiceLayout from "@/layouts/ServiceLayout";
import { useGetOffersById } from "@/shared/services/offerById";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { useMedia } from "@/shared/hooks/useMedia";
import { SplitTypeAnimation } from "@/shared/hooks/useSplitTypeAnimation";
import { BurgerAbout } from "@/components/Burger/ui/BurgerAbout/Burger";
import { ActiveOfferProviderContext } from "@/shared/providers/activeOfferProvider";
import { classNames } from "@/shared/lib";
import Image from "next/image";
import { OfferTopBanner } from "@/components/OfferTopBanner";
import { ContentBanner } from "@/components/ContentBanner";
import { Video } from "@/components/Video";
import { TextBlocks } from "@/components/TextBlocks";
import { RelevantProjects } from "@/components/Relevant-project";

const PageOffer = ({
  offersName,
  id,
  formFeedback,
}: {
  offersName: GetOffersNameQuery["offers"]["data"];
  id: string;
  formFeedback: GetFormFeedbackQuery["formFeedback"];
}) => {
  const [offerId, setOfferId] = useState(id);

  const isPhone = useMedia("(max-width: 767px)");

  const refSection = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);

  const { setActiveOffers } = useContext(ActiveOfferProviderContext);
  const { data, isLoading } = useGetOffersById(offerId);

  const [offer, setOffer] = useState<
    GetOfferByIdQuery["offer"]["data"]["attributes"] | undefined
  >(undefined);

  useEffect(() => {
    if (data?.offer) {
      setOffer(data.offer.data.attributes);
    } else {
      setOffer(undefined);
    }
  }, [data]);

  useIntersectionObserver({
    refs: [refSection],
    once: true,
  });

  useEffect(() => {
    setActiveOffers(null);

    return () => setActiveOffers(null);
  }, [setActiveOffers]);

  return (
    <ServiceLayout
      items={offersName}
      isLoading={isLoading}
      setId={setOfferId}
      viewSpecialOffers={false}
      serviceId={offerId}
      footer={offer?.footer}
      footerCls={"footer--whte footer-offer"}
      mainClass={""}
      BugerMenu={() => <BurgerAbout SubMenuName="услуги" />}
      formFeedback={formFeedback.data.attributes.formFeedback}
    >
      <div className="page__base">
        <section className="fade-up mb-42" ref={refSection}>
          {offer?.offerBanner.data && (
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
          )}

        {offer?.sliderCase && offer?.sliderCase.cases.data.length > 0 && (
          <RelevantProjects cases={offer.sliderCase.cases.data} />
        )}
      </div>
    </ServiceLayout>
  );
};

export { PageOffer };
