import ReactMarkdown from "react-markdown";
import React, { useRef } from "react";
import { notFound } from "next/navigation";
import { GetOffersPageQuery } from "@/graphql/__generated__";
import { CtaBanner } from "./CtaBanner";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { OfferBlock } from "./OfferBlock";

const Offers = ({ data }: { data: GetOffersPageQuery | undefined }) => {
  const heroSection = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver({
    ref: heroSection,
    once: true,
  });

  if (!data) {
    return notFound();
  }

  return (
    <>
      <div className="page__base">
        <section className="hero fade-up mb-96" ref={heroSection}>
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
              {data?.offersPage.data.attributes.description}
            </ReactMarkdown>
          </div>
        </section>

        {data.offersPage && (
          <OfferBlock block={data.offersPage.data.attributes.offersBlock} />
        )}

        {data.offersPage.data.attributes.banner.data && (
          <CtaBanner
            animation={true}
            src={data.offersPage.data.attributes.banner.data.attributes}
          />
        )}
      </div>
    </>
  );
};

export { Offers };
