import Image from "next/image";

import { Banner } from "./_section/Banner";
import { gql } from "@/graphql/client";
import { Cases } from "./_section/Cases";
import { Partners } from "./_section/Partners";
import { FormSend } from "./_section/FormSend";

const Home = async () => {
  const { homePage } = await gql.GetHomePage();

  return (
    <>
      <div className="mobile-menu">
        <nav className="mobile-menu__row js-menu">
          <div className="mobile-menu__base">
            <button
              type="button"
              title="Показать подменю услуг"
              className="mobile-menu__link btn"
              data-trigger="services"
            >
              Услуги
            </button>

            <a
              title="Вернуться на предыдущую страницу"
              className="mobile-menu__sublink mobile-menu__sublink--small btn btn--alt"
              data-changeby="nav"
            >
              Оставить заявку
            </a>

            <button
              type="button"
              title="Показать меню навигации"
              className="mobile-menu__burger"
              data-trigger="nav"
            >
              <span></span>
            </button>
          </div>

          <div className="mobile-menu__subs">
            <div
              className="mobile-menu__services mobile-services"
              data-item="services"
            >
              <div className="mobile-services__row">
                <a className="mobile-services__title">Все услуги</a>
                <ul className="mobile-services__list">
                  <li className="mobile-services__item">
                    <a>Предпроектные исследования</a>
                  </li>
                  <li className="mobile-services__item">
                    <a>Брендинг</a>
                  </li>
                  <li className="mobile-services__item">
                    <a>Дизайн</a>
                  </li>
                  <li className="mobile-services__item">
                    <a>Web-разработка</a>
                  </li>
                  <li className="mobile-services__item">
                    <a>Мобильные приложения</a>
                  </li>
                  <li className="mobile-services__item">
                    <a>Комплексное сопровождение</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mobile-menu__nav mobile-nav" data-item="nav">
              <div className="mobile-nav__row">
                <a className="mobile-nav__logo logo">
                  <span className="logo__base">
                    <img data-src="/img/logo-base.svg" alt="" />
                  </span>
                  <span className="logo__in">
                    <span className="logo__in-def">
                      <img data-src="/img/logo-in-def.svg" alt="" />
                    </span>
                    <span className="logo__in-hv">
                      <img data-src="/img/logo-in-hv.svg" alt="" />
                    </span>
                  </span>
                </a>

                <a
                  className="mobile-nav__baner"
                  style={{
                    background:
                      "linear-gradient(180deg, #489DEB 0%, #82C3FF 100%)",
                  }}
                >
                  <div className="mobile-nav__name">Спецпредложения</div>
                  <div className="mobile-nav__image">
                    <img data-src="/img/header/01.png" alt="" />
                  </div>
                </a>

                <ul className="mobile-nav__list">
                  <li className="mobile-nav__item">
                    <a>контакты</a>
                  </li>
                  <li className="mobile-nav__item">
                    <a>услуги</a>
                  </li>
                  <li className="mobile-nav__item">
                    <a>портфолио</a>
                  </li>
                  <li className="mobile-nav__item">
                    <a>студия</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <h1 className="visually-hidden">Студия разработки и брендинга creatin</h1>

      <main className="page">
        <Banner banner={homePage.data.attributes} />

        <Cases cases={homePage.data.attributes.cases} />

        <Partners partners={homePage.data.attributes.Partners} />

        <FormSend form={homePage.data.attributes.formSend} />

        <section className="smile">
          <div className="smile__container">
            <Image src={"/img/smile.png"} width={316} height={300} alt="" />
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
