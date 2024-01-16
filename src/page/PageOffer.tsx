"use client";

import { CtaBanner } from "@/components/CtaBanner";
import { GetOfferByIdQuery, GetOffersNameQuery } from "@/graphql/__generated__";
import { Spoller } from "@/shared/ui/Spoller";
import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import ServiceLayout from "@/layouts/ServiceLayout";
import { useGetOffersById } from "@/shared/services/offerById";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { Video } from "@/components/Video";
import { useMedia } from "@/shared/hooks/useMedia";
import { SplitTypeAnimation } from "@/shared/hooks/useSplitTypeAnimation";
import { BurgerServices } from "@/components/Burger/ui/BurgerServices/BurgerServices";
import { BurgerAbout } from "@/components/Burger/ui/BurgerAbout/Burger";

const PageOffer = ({
  offersName,
  id,
}: {
  offersName: GetOffersNameQuery["offers"]["data"];
  id: string;
}) => {
  const [offerId, setOfferId] = useState(id);

  const isPhone = useMedia("(max-width: 767px)");

  const refSection = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <ServiceLayout
      items={offersName}
      isLoading={isLoading}
      setId={setOfferId}
      serviceId={offerId}
      footer={offer?.footer}
      mainClass={""}
      BugerMenu={() => <BurgerAbout SubMenuName="услуги" />}
    >
      <div className="page__base">
        <section className="hero fade-up mb-42" ref={refSection}>
          <div className="hero__left">
            {offer?.name && (
              <h1 className="hero__title">Акция “{offer.name}”</h1>
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
              {offer?.description}
            </ReactMarkdown>
          </div>

          <div className="hero__right hero__right--one">
            <div className="hero-sale hero-sale--baner">
              <div className="hero-sale__name">
                <span>Скидка</span>
              </div>
              {offer?.sale && (
                <div className="hero-sale__value">
                  <span>-{offer.sale}%</span>
                </div>
              )}
            </div>
            <div className="hero-sale">
              <div className="hero-sale__text">
                <span>стоимость без скидки</span>
              </div>
              {offer?.oldPrice && (
                <del className="hero-sale__price">
                  <span className="_rub">{offer.oldPrice}</span>
                </del>
              )}
              <div className="hero-sale__text ">
                <span>Стоимость со скидкой</span>
              </div>
              <div className="hero-sale__price ">
                <span className="_rub">{offer?.offer.price}</span>
              </div>
            </div>
          </div>
        </section>

        <Video
          style={{ marginBottom: isPhone.matches ? 0 : undefined }}
          animation={true}
        />

        <section className="includes mb-96">
          <SplitTypeAnimation refChar={titleRef} bg="#aaaaaa" fg="#181818">
            <h2 ref={titleRef} className="includes__title">
              Что входит:
            </h2>
          </SplitTypeAnimation>

          <div className="includes__row includes__row--no-hover">
            {offer?.includes_blocks.data &&
              offer.includes_blocks.data.map((el) => (
                <div key={el.id} className="includes__inner">
                  <div className="includes__column">
                    <div className="includes__name">{el.attributes.title}</div>

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

        {offer?.banner.data && (
          <CtaBanner animation={true} src={offer.banner.data.attributes} />
        )}
      </div>
    </ServiceLayout>
  );
};

export { PageOffer };
