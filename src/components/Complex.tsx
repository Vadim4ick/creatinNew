/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Loader } from "@/shared/ui/Loader/Loader";
import ReactMarkdown from "react-markdown";
import React, { useRef } from "react";
import { Portal } from "@/shared/ui/Portal";
import { Footer } from "@/layouts/Footer/ui/Footer";
import { notFound } from "next/navigation";
import { useGetComplexPage } from "@/shared/services/complex";
import { PromotionOffer } from "./PromotionOffer";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { CtaBanner } from "./CtaBanner";

const Complex = ({
  mainRef,
}: {
  mainRef: React.MutableRefObject<HTMLElement | null>;
}) => {
  const { data, isLoading } = useGetComplexPage();

  const heroSection = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver({
    ref: heroSection,
    once: true,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return notFound();
  }

  return (
    <>
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
              {data.complexAccompany.data.attributes.description}
            </ReactMarkdown>
          </div>
        </section>

        {data.complexAccompany && (
          <PromotionOffer
            offers={data.complexAccompany.data.attributes.complexes.data}
          />
        )}

        <CtaBanner animation={true} />
      </div>

      {mainRef.current && (
        <Portal element={mainRef.current}>
          <Footer
            title={data.complexAccompany.data.attributes.footer.title}
            img={
              data.complexAccompany.data.attributes.footer.img.data.attributes
            }
          />
        </Portal>
      )}
    </>
  );
};

export { Complex };
