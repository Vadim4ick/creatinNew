import Image from "next/image";

import { Partners1 } from "@/shared/icons/partners/01";
import { Partners2 } from "@/shared/icons/partners/02";
import { Partners3 } from "@/shared/icons/partners/03";
import { Partners4 } from "@/shared/icons/partners/04";
import { Partners5 } from "@/shared/icons/partners/05";
import { Partners6 } from "@/shared/icons/partners/06";
import { Partners7 } from "@/shared/icons/partners/07";
import { Partners8 } from "@/shared/icons/partners/08";
import { Partners9 } from "@/shared/icons/partners/09";
import { Partners10 } from "@/shared/icons/partners/10";
import { Partners11 } from "@/shared/icons/partners/11";
import { Partners12 } from "@/shared/icons/partners/12";
import { Partners13 } from "@/shared/icons/partners/13";
import { Partners14 } from "@/shared/icons/partners/14";
import { Partners15 } from "@/shared/icons/partners/15";
import { Partners16 } from "@/shared/icons/partners/16";
import { Banner } from "./_section/Banner";
import { gql } from "@/graphql/client";

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

        <section className="cases">
          <div className="cases__container">
            <h2 className="cases__title _title" data-observe>
              наши кейсы
            </h2>
            <div className="cases__row">
              <div
                className="cases__column case-card fade-up"
                data-watch
                data-watch-once
                data-watch-margin="30"
              >
                <div className="case-card__item case-card__item--text">
                  <div className="case-card__title">айдентика</div>
                  <div className="case-card__info">
                    леопард «Лео» является символом энергии и жизненной силы.
                  </div>
                  <div className="case-card__btns">
                    <a className="btn btn--whte btn--hasarrow">
                      <span className="btn__text">Смотреть кейс</span>
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
                </div>

                <div className="case-card__item case-card__item--big">
                  <Image fill src={"/img/cases/01-2.png"} alt="" />
                </div>
                <a className="case-card__item case-card__item--main">
                  <Image fill src={"/img/cases/01-1.png"} alt="" />
                </a>
              </div>
              <div
                className="cases__column case-card fade-up"
                data-watch
                data-watch-once
                data-watch-margin="30"
              >
                <div className="case-card__item case-card__item--text">
                  <div className="case-card__title">редизайн</div>
                  <div className="case-card__info">
                    Отель Marry — пятизвёздочный отель, расположенный в деловом
                    центре города Краснодара.
                  </div>
                  <div className="case-card__btns">
                    <a className="btn btn--whte btn--hasarrow">
                      <span className="btn__text">Смотреть кейс</span>
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
                </div>
                <div className="case-card__item case-card__item--big">
                  <Image fill src={"/img/cases/02-2.png"} alt="" />
                </div>
                <a className="case-card__item case-card__item--main">
                  <Image fill src="/img/cases/02-1.png" alt="" />
                </a>
              </div>
              <div
                className="cases__column case-card fade-up"
                data-watch
                data-watch-once
                data-watch-margin="30"
              >
                <div className="case-card__item case-card__item--text">
                  <div className="case-card__title">айдентика</div>
                  <div className="case-card__info">
                    бюро «ASTA» специализируется на проектировании жилых и
                    коммерческих комплексов, дизайне интерьеров и общественных
                    зон.
                  </div>
                  <div className="case-card__btns">
                    <a className="btn btn--whte btn--hasarrow">
                      <span className="btn__text">Смотреть кейс</span>
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
                </div>
                <div className="case-card__item case-card__item--big">
                  <Image fill src="/img/cases/03-2.png" alt="" />
                </div>
                <a className="case-card__item case-card__item--main">
                  <Image fill src="/img/cases/03-1.png" alt="" />
                </a>
              </div>
              <div
                className="cases__column case-card fade-up"
                data-watch
                data-watch-once
                data-watch-margin="30"
              >
                <div className="case-card__item case-card__item--text">
                  <div className="case-card__title">айдентика</div>
                  <div className="case-card__info">
                    стабильно развивающаяся строительная компания на юге страны
                  </div>
                  <div className="case-card__btns">
                    <a className="btn btn--whte btn--hasarrow">
                      <span className="btn__text">Смотреть кейс</span>
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
                </div>
                <div className="case-card__item case-card__item--big">
                  <Image fill src="/img/cases/04-2.png" alt="" />
                </div>
                <a className="case-card__item case-card__item--main">
                  <Image fill src="/img/cases/04-1.png" alt="" />
                </a>
              </div>
              <div
                className="cases__column case-card fade-up"
                data-watch
                data-watch-once
                data-watch-margin="30"
              >
                <div className="case-card__item case-card__item--text">
                  <div className="case-card__title">айдентика</div>
                  <div className="case-card__info">
                    коттеджный комплекс, символизирующий изысканность
                    аристократического образа жизни.
                  </div>
                  <div className="case-card__btns">
                    <a className="btn btn--whte btn--hasarrow">
                      <span className="btn__text">Смотреть кейс</span>
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
                </div>
                <div className="case-card__item case-card__item--big">
                  <Image fill src="/img/cases/05-2.png" alt="" />
                </div>
                <a className="case-card__item case-card__item--main">
                  <Image fill src="/img/cases/05-1.png" alt="" />
                </a>
              </div>
              <div className="cases__more">
                <a className="btn btn--alt btn--hasarrow">
                  <span className="btn__text">Все кейсы</span>
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
            </div>
          </div>
        </section>
        <section className="partners animate-block">
          <div className="partners__container">
            <div className="partners__top">
              <div className="partners__text">
                <h2
                  className="partners__title fade-up"
                  data-watch
                  data-watch-once
                  data-observe
                  data-observe-alt
                >
                  Наши партнеры
                </h2>
                <div
                  className="partners__subtitle fade-up"
                  data-watch
                  data-watch-once
                >
                  Рука в руку к креативным вершинам. Наши партнёры дополняют
                  нашу страсть к дизайну
                </div>
              </div>
              <div
                className="partners__btn fade-up"
                data-watch
                data-da=".partners__container,1200,last"
              >
                <a className="btn btn--whte btn--hasarrow">
                  <span className="btn__text">Стать партнером</span>
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
            </div>
            <div
              className="partners__slider swiper js-partners fade-up"
              data-watch
            >
              <div className="partners__swiper swiper-wrapper">
                <div className="partners__slide swiper-slide">
                  <Partners1 />
                </div>
                <div className="partners__slide swiper-slide">
                  <Partners2 />
                </div>
                <div className="partners__slide swiper-slide">
                  <Partners3 />
                </div>
                <div className="partners__slide swiper-slide">
                  <Partners4 />
                </div>
                <div className="partners__slide swiper-slide">
                  <Partners5 />
                </div>
                <div className="partners__slide swiper-slide">
                  <Partners6 />
                </div>
                <div className="partners__slide swiper-slide">
                  <Partners7 />
                </div>
                <div className="partners__slide swiper-slide">
                  <Partners8 />
                </div>
                <div className="partners__slide swiper-slide">
                  <Partners9 />
                </div>
                <div className="partners__slide swiper-slide">
                  <Partners10 />
                </div>
                <div className="partners__slide swiper-slide">
                  <Partners11 />
                </div>
                <div className="partners__slide swiper-slide">
                  <Partners12 />
                </div>
                <div className="partners__slide swiper-slide">
                  <Partners13 />
                </div>
                <div className="partners__slide swiper-slide">
                  <Partners14 />
                </div>
                <div className="partners__slide swiper-slide">
                  <Partners15 />
                </div>
                <div className="partners__slide swiper-slide">
                  <Partners16 />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="callback animate-block" id="callback">
          <div className="callback__container">
            <div className="callback__row">
              <div className="callback__left">
                <h2
                  className="callback__title text-decorated fade-up"
                  data-watch
                  data-observe
                >
                  Оставьте <b>заявку,</b> <br />
                  чтобы обсудить проект
                </h2>
                <h3 className="callback__subtitle fade-up" data-watch>
                  Cвяжитесь с нами любым удобным способом <br />
                  Мы всегда рады новым идеям и ответим на ваши вопросы
                </h3>
                <address
                  className="callback__contancs"
                  data-da=".callback__row,1200,last"
                >
                  <a
                    href="tel:8181999022`"
                    className="callback__contancs-item fade-up"
                    data-watch
                    data-watch-once
                  >
                    <span>+7 (918) 199-90-22</span>
                  </a>
                  <a
                    href="mailto:creat_in@mail.ru"
                    className="callback__contancs-item fade-up"
                    data-watch
                    data-watch-once
                  >
                    <span>creat_in@mail.ru</span>
                  </a>
                  <a
                    className="callback__contancs-item fade-up"
                    data-watch
                    data-watch-once
                  >
                    <span>Рашпилевская, 74</span>
                  </a>
                </address>
              </div>
              <form
                action="#"
                data-ajax
                data-dev
                method="GET"
                className="callback__form callback-form form fade-up"
                data-watch
              >
                <fieldset className="callback-form__group form__group">
                  <div className="form__item">
                    <label htmlFor="inp1" className="input-label">
                      Имя
                    </label>
                    <input
                      autoComplete="off"
                      type="text"
                      name="form[]"
                      id="inp1"
                      data-error="Ошибка"
                      placeholder=""
                      data-required
                      className="input"
                    />
                  </div>
                  <div className="form__item">
                    <label htmlFor="inp2" className="input-label">
                      Компания
                    </label>

                    <input
                      autoComplete="off"
                      type="text"
                      name="form[]"
                      id="inp2"
                      data-error="Ошибка"
                      placeholder=""
                      data-required
                      className="input"
                    />
                  </div>
                </fieldset>
                <fieldset className="callback-form__group form__group">
                  <div className="form__item">
                    <label htmlFor="inp3" className="input-label">
                      E-mail
                    </label>
                    <input
                      autoComplete="off"
                      type="email"
                      name="form[]"
                      id="inp3"
                      data-error="Ошибка"
                      placeholder=""
                      className="input"
                      data-required="email"
                    />
                  </div>
                  <div className="form__item">
                    <label htmlFor="inp4" className="input-label">
                      Телефон
                    </label>
                    <input
                      autoComplete="off"
                      type="tel"
                      name="form[]"
                      id="inp4"
                      data-error="Ошибка"
                      className="input"
                      data-required="tel"
                    />
                  </div>
                </fieldset>
                <div className="callback-form__item form__textarea-item">
                  <div className="form-textarea form__item">
                    <label htmlFor="txta1" className="input-label">
                      Описание задачи (тезисно)
                    </label>
                    <textarea
                      autoComplete="off"
                      name="form[]"
                      id="txta1"
                      placeholder=""
                      data-error="Ошибка"
                      className="input"
                    ></textarea>
                  </div>
                  <div className="form-file">
                    <label className="form-file__label" htmlFor="file1">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5 22H10.5C6.729 22 4.843 22 3.672 20.828C2.5 19.657 2.5 17.771 2.5 14V10C2.5 6.229 2.5 4.343 3.672 3.172C4.843 2 6.739 2 10.53 2C11.136 2 11.621 2 12.03 2.017C12.017 2.097 12.01 2.178 12.01 2.261L12 5.095C12 6.192 12 7.162 12.105 7.943C12.219 8.79 12.48 9.637 13.172 10.329C13.862 11.019 14.71 11.281 15.557 11.395C16.338 11.5 17.308 11.5 18.405 11.5H22.457C22.5 12.034 22.5 12.69 22.5 13.563V14C22.5 17.771 22.5 19.657 21.328 20.828C20.157 22 18.271 22 14.5 22Z"
                          fill="#7F7F7F"
                        />
                        <path
                          d="M20.1629 7.53504L16.0091 3.8495C14.8269 2.79959 14.2364 2.27411 13.5094 2L13.5 4.82803C13.5 7.2661 13.5 8.48565 14.2678 9.24282C15.0357 10 16.2724 10 18.7448 10H22.5C22.1203 9.27179 21.4385 8.6677 20.1629 7.53504Z"
                          fill="#7F7F7F"
                        />
                      </svg>
                      Прикрепить файл{" "}
                    </label>
                    <input
                      type="file"
                      name="form[]"
                      id="file1"
                      className="visually-hidden"
                    />
                  </div>
                </div>
                <button type="submit" className="btn form__btn">
                  <span className="btn__text">Отправить</span>
                </button>
                <div className="form__comment">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных
                  данных
                </div>
                <div className="form__sended">
                  <div className="form__sended-text">
                    Заявка успешно отправлена
                  </div>
                  <button
                    type="button"
                    className="form__sended-btn btn js-remove-sended"
                  >
                    <span className="btn__text">Замечательно</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
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
