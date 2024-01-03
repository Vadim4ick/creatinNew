import { gql } from "@/graphql/client";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import { RelevantProjects } from "./_sections/Relevant-projects";

const ServicesPage = async () => {
  const { servicesPage } = await gql.GetServicesPage();

  const { services } = await gql.GetServices();

  return (
    <main className="page page--hassidebar">
      <div className="page__container">
        <aside className="sidebar">
          <div className="sidebar__row">
            <div className="breadcrumb">
              <ul className="breadcrumb__list">
                <li className="breadcrumb__item breadcrumb__item--back">
                  <span>
                    <a>
                      <span> </span>
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="mdi:arrow-up">
                          <path
                            id="Vector"
                            d="M16 8.67929V10.3207H6.15152L10.6654 14.8346L9.5 16L3 9.5L9.5 3L10.6654 4.1654L6.15152 8.67929H16Z"
                            fill="#656565"
                          />
                        </g>
                      </svg>
                    </a>
                  </span>
                </li>
                <li className="breadcrumb__item">
                  <span>
                    <a>
                      <span> Главная </span>
                    </a>
                  </span>
                </li>
                <li className="breadcrumb__item breadcrumb__item-link--active">
                  <span>
                    <span>услуги</span>
                  </span>
                </li>
              </ul>
            </div>
            <ul className="sidebar__items">
              <li className="sidebar__item">
                <input
                  id="c_1"
                  data-error="Ошибка"
                  className="visually-hidden"
                  type="checkbox"
                  value="1"
                  name="form[]"
                />
                <label htmlFor="c_1" className="sidebar__label">
                  <span className="sidebar__link">Исследования</span>
                </label>
              </li>
              <li className="sidebar__item">
                <input
                  id="c_2"
                  data-error="Ошибка"
                  className="visually-hidden"
                  type="checkbox"
                  value="1"
                  name="form[]"
                />
                <label htmlFor="c_2" className="sidebar__label">
                  <span className="sidebar__link">Брендинг</span>
                </label>
              </li>
              <li className="sidebar__item">
                <input
                  id="c_3"
                  data-error="Ошибка"
                  className="visually-hidden"
                  type="checkbox"
                  value="1"
                  name="form[]"
                />
                <label htmlFor="c_3" className="sidebar__label">
                  <span className="sidebar__link">Дизайн</span>
                </label>
              </li>
              <li className="sidebar__item">
                <input
                  id="c_4"
                  data-error="Ошибка"
                  className="visually-hidden"
                  type="checkbox"
                  value="1"
                  name="form[]"
                />
                <label htmlFor="c_4" className="sidebar__label">
                  <span className="sidebar__link">Web-разработка</span>
                </label>
              </li>
              <li className="sidebar__item">
                <input
                  id="c_5"
                  data-error="Ошибка"
                  className="visually-hidden"
                  type="checkbox"
                  value="1"
                  name="form[]"
                />
                <label htmlFor="c_5" className="sidebar__label">
                  <span className="sidebar__link">Мобильные приложения</span>
                </label>
              </li>
              <li className="sidebar__item">
                <input
                  id="c_6"
                  data-error="Ошибка"
                  className="visually-hidden"
                  type="checkbox"
                  value="1"
                  name="form[]"
                />
                <label htmlFor="c_6" className="sidebar__label">
                  <span className="sidebar__link">
                    Комплексное сопровождение
                  </span>
                </label>
              </li>
            </ul>
            <a className="sidebar__baner" style={{ background: "#d1e791" }}>
              <div className="sidebar__name">Спецпредложения</div>
              <div className="sidebar__image">
                <img src="/img/services/sidebar.png" alt="" />
              </div>
            </a>
            <a className="btn btn--hasarrow sidebar__btn">
              <span className="btn__text">Оставить заявку</span>
              <span className="btn__arrow">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.2529 9.66889L20.4858 15.8052C19.9859 15.9878 19.5079 16.236 19.0573 16.5444L17.2806 7.69666L19.2529 9.66889ZM8.09641 16.8809L8.09371 16.8945L10.0459 18.8467L16.2001 20.0909C16.3818 19.5921 16.6289 19.1153 16.9361 18.6659L8.09641 16.8809ZM17.9681 17.5766C18.2086 17.3361 18.4491 17.1099 18.695 16.8892L7.38126 5.57545L5.96705 6.98967L17.2808 18.3034C17.5015 18.0575 17.7277 17.817 17.9681 17.5766Z"
                    fill="white"
                  />
                </svg>
              </span>
            </a>
          </div>
        </aside>

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
