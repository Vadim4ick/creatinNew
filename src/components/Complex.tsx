/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import ReactMarkdown from "react-markdown";
import React, { useRef } from "react";
import { PromotionOffer } from "./PromotionOffer";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { CtaBanner } from "./CtaBanner";
import { GetComplexPageQuery } from "@/graphql/__generated__";
import { notFound } from "next/navigation";

const Complex = ({ data }: { data: GetComplexPageQuery | undefined }) => {
  const heroSection = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver({
    ref: heroSection,
    once: true,
  });

  if (!data) {
    return notFound();
  }

  return (
    <div className="page__base">
      <section className="hero fade-up mb-96" ref={heroSection}>
        <div className="hero__left">
          <h1 className="hero__title">
            {data.complexAccompany.data.attributes.title}
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
            {data.complexAccompany.data.attributes.description}
          </ReactMarkdown>
        </div>
      </section>

      {data.complexAccompany && (
        <PromotionOffer
          offers={data.complexAccompany.data.attributes.complexBlocks}
        />
      )}

      {data.complexAccompany.data.attributes.banner.data && (
        <CtaBanner
          animation={true}
          src={data.complexAccompany.data.attributes.banner.data.attributes}
        />
      )}
    </div>
  );
};

export { Complex };
