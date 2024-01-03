import { gql } from "@/graphql/client";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import { RelevantProjects } from "./_sections/Relevant-projects";
import { Sidebar } from "@/components/Sidebar";

const test = [
  {
    id: 1,
    title: "Исследования",
  },
  {
    id: 2,
    title: "Брендинг",
  },
  {
    id: 3,
    title: "Дизайн",
  },
  {
    id: 4,
    title: "Web-разработка",
  },
  {
    id: 5,
    title: "Мобильные приложения",
  },
  {
    id: 6,
    title: "Комплексное сопровождение",
  },
];

const ServicesPage = async () => {
  const { servicesPage } = await gql.GetServicesPage();

  const { services } = await gql.GetServices();

  return (
    <main className="page page--hassidebar">
      <div className="page__container">
        <Sidebar items={test} viewSpecialOffers={true} />

        <div className="page__base">
          <section className="hero">
            <div className="hero__left">
              {servicesPage.data && (
                <>
                  <h1 className="hero__title">
                    {servicesPage.data.attributes.heading}
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
                    {servicesPage.data.attributes.description}
                  </ReactMarkdown>
                </>
              )}
            </div>
          </section>

          <div className="video">
            <div
              className="video__item"
              // @ts-ignore
              style={{ "--icon": "url(/img/icons/video-icon.svg)" }}
            ></div>
          </div>

          <section className="services">
            <div className="services__left">
              <h2 className="services__title" data-observe>
                {servicesPage.data.attributes.servicesTitle}
              </h2>
              <p className="services__subtitle">
                {servicesPage.data.attributes.servicesDescription}
              </p>
            </div>

            <div className="services__row">
              {services.data.map((service) => (
                <Link
                  key={service.id}
                  href={`test`}
                  className="services__column"
                  // @ts-ignore
                  style={{ "--icon": "url(/img/icons/services.svg)" }}
                >
                  <div className="services__name">
                    {service.attributes.title}
                  </div>
                  <div className="services__info">
                    {service.attributes.description}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="text-block">
            {servicesPage.data.attributes.textBlocks.map((block) => (
              <div className="text-block__item" key={block.id}>
                <div className="text-block__title">{block.titlle}</div>
                <div className="text-block__info">
                  <ReactMarkdown skipHtml>{block.description}</ReactMarkdown>
                </div>
              </div>
            ))}
          </section>

          <RelevantProjects />

          <div className="cta">
            <div className="cta__title">
              Здесь будет CTA баннер, под него нужно оставить просто контейнер
            </div>
            <div className="cta__image"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
