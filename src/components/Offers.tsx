/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Loader } from "@/shared/ui/Loader/Loader";
import { PromotionOffer } from "./PromotionOffer";
import { useGetOffersPage } from "@/shared/services/offers";
import ReactMarkdown from "react-markdown";
import React from "react";
import { Portal } from "@/shared/ui/Portal";
import { Footer } from "@/layouts/Footer/ui/Footer";
import { notFound } from "next/navigation";

const Offers = ({
  mainRef,
}: {
  mainRef: React.MutableRefObject<HTMLElement | null>;
}) => {
  const { data, isLoading } = useGetOffersPage();

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return notFound();
  }

  return (
    <>
      <div className="page__base">
        <section
          className="hero fade-up mb-96"
          data-watch
          data-watch-once
          data-watch-margin="30"
        >
          <div className="hero__left">
            <h1 className="hero__title">
              {data?.offersPage.data.attributes.title}
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
              {data?.offersPage.data.attributes.description}
            </ReactMarkdown>
          </div>
        </section>

        {data?.offersPage && (
          <PromotionOffer
            offers={data.offersPage.data.attributes.offers.data}
          />
        )}

        <div
          className="cta fade-up"
          data-watch
          data-watch-once
          data-watch-margin="30"
        >
          <div className="cta__title ">
            Здесь будет CTA баннер, под него нужно оставить просто контейнер
          </div>
          <div className="cta__image"></div>
        </div>
      </div>

      {mainRef.current && (
        <Portal element={mainRef.current}>
          <Footer
            title={data?.offersPage.data.attributes.footer.title}
            img={data?.offersPage.data.attributes.footer.img.data.attributes}
          />
        </Portal>
      )}
    </>
  );
};

export { Offers };
