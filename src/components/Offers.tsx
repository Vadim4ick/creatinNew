import { PromotionOffer } from "./PromotionOffer";
import ReactMarkdown from "react-markdown";
import React, { useRef } from "react";
import { Portal } from "@/shared/ui/Portal";
import { Footer } from "@/layouts/Footer/ui/Footer";
import { notFound } from "next/navigation";
import { GetOffersPageQuery } from "@/graphql/__generated__";
import { CtaBanner } from "./CtaBanner";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";

const Offers = ({
  mainRef,
  data,
}: {
  mainRef: React.MutableRefObject<HTMLElement | null>;
  data: GetOffersPageQuery | undefined;
}) => {
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
            name="offer"
            offers={data.offersPage.data.attributes.offersBlock}
          />
        )}

        <CtaBanner animation={true} />
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
