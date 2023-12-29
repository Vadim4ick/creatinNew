"use client";

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

export default function Home() {
  const customStyles = {
    "--mask": "url(/img/intro/mask.svg)",
    "--mask-mob": "url(/img/intro/mask-mobile.svg)",
  };

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
        <section className="intro" data-watch data-watch-once>
          <div className="intro__container">
            <div className="intro__inner">
              {/* @ts-ignore */}
              <div className="intro__row" style={customStyles}>
                <div className="intro__content">
                  <div className="intro__title">
                    <p>Стратегии, брендинг</p>
                    <p>и digital-решения для компаний,</p>
                    <p>
                      готовых <br />к <span>изменениям</span>
                    </p>
                  </div>
                  <div className="intro__btns" data-da=".intro__inner,767,last">
                    <a className="btn btn--hasarrow">
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
                </div>
                <div className="intro__bg">
                  <picture>
                    <source
                      srcSet="/img/intro/cover-mob.svg"
                      media="(max-width: 767px)"
                    />
                    <img data-src="/img/intro/cover.svg" alt="" />
                  </picture>
                </div>
              </div>
              <div className="intro__cards intro-cards swiper js-intro-cards">
                <div className="intro-cards__swiper swiper-wrapper">
                  <div className="intro__card intro-cards__item swiper-slide">
                    <div className="intro-cards__content">
                      <div className="intro-cards__value">100+</div>
                      <div className="intro-cards__info">
                        Реализованных проектов
                      </div>
                    </div>
                    <div className="intro-cards__image intro-cards-folders">
                      <svg
                        width="60"
                        height="62"
                        viewBox="0 0 60 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M48.664 13.2903H32.208C31.3173 13.2903 30.48 12.9465 29.8507 12.3222L27.6427 10.132C26.256 8.75652 24.416 8 22.456 8H11.3333C7.288 8 4 11.2615 4 15.2742V41.7258C4 45.7385 7.288 49 11.3333 49H48.6667C52.712 49 56 45.7385 56 41.7258V20.5645C56 16.5518 52.7093 13.2903 48.664 13.2903Z"
                          fill="#3D87F6"
                        />
                        <path
                          d="M50.0997 19.8065H32.3778C31.6872 19.8065 31.041 19.5369 30.5501 19.0406L28.1723 16.6368C26.4924 14.9385 24.2555 14 21.8757 14H9.89744C4.9784 14 1 18.0377 1 22.9839V52.0161C1 56.9623 4.9784 61 9.89744 61H50.1026C55.0216 61 59 56.9623 59 52.0161V28.7903C59 23.8437 55.0183 19.8065 50.0997 19.8065Z"
                          fill="#3D87F6"
                          stroke="#EEEFEF"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="intro__card intro-cards__item swiper-slide">
                    <div className="intro-cards__content">
                      <div className="intro-cards__value">50+</div>
                      <div className="intro-cards__info">
                        Проведённых исследований
                      </div>
                    </div>
                    <div className="intro-cards__image intro-cards-spiral">
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30 2.23408C30 1.00023 31.0016 -0.00865798 32.2321 0.083132C37.5173 0.477412 42.6184 2.2665 47.0064 5.28598C52.0095 8.72874 55.8498 13.6089 58.0198 19.2812C60.1897 24.9534 60.5869 31.1507 59.159 37.0536C57.731 42.9566 54.5452 48.2871 50.0226 52.3404C45.5 56.3938 39.8538 58.9791 33.8303 59.7545C27.8068 60.5299 21.6899 59.4589 16.2882 56.6831C10.8865 53.9073 6.45447 49.5574 3.57811 44.2086C1.05538 39.5174 -0.166502 34.2515 0.0181941 28.9548C0.061192 27.7217 1.17334 26.8361 2.39982 26.9707C3.6263 27.1053 4.50113 28.2096 4.47421 29.4431C4.37829 33.8385 5.41917 38.1981 7.51335 42.0924C9.96131 46.6445 13.7332 50.3465 18.3304 52.7089C22.9276 55.0713 28.1335 55.9828 33.2598 55.3229C38.3862 54.663 43.1915 52.4627 47.0405 49.0131C50.8895 45.5634 53.6008 41.0268 54.8161 36.0031C56.0313 30.9794 55.6933 25.7051 53.8465 20.8776C51.9998 16.0501 48.7314 11.8969 44.4735 8.96686C40.8309 6.46031 36.611 4.95002 32.2313 4.56583C31.0022 4.458 30 3.46793 30 2.23408Z"
                          fill="#3D87F6"
                        />
                        <path
                          d="M30 8.4975C30 7.11817 31.1212 5.98655 32.493 6.12983C35.3519 6.42841 38.1408 7.23891 40.7244 8.52936C44.0546 10.1928 46.9523 12.6081 49.1882 15.5843C51.4242 18.5605 52.9372 22.0161 53.6076 25.6778C54.278 29.3395 54.0874 33.107 53.051 36.6823C52.0145 40.2577 50.1605 43.5429 47.6356 46.2784C45.1107 49.0138 41.9842 51.1243 38.5031 52.4432C35.022 53.7621 31.2818 54.2531 27.5782 53.8775C24.705 53.5861 21.915 52.7793 19.3398 51.5025C18.104 50.8899 17.7619 49.3341 18.4996 48.1686C19.2373 47.0031 20.7751 46.6732 22.0272 47.2518C23.9346 48.1333 25.9803 48.6948 28.0822 48.908C31.015 49.2055 33.9768 48.8166 36.7334 47.7722C39.49 46.7278 41.9658 45.0565 43.9652 42.8904C45.9646 40.7243 47.4327 38.1228 48.2535 35.2916C49.0742 32.4603 49.2251 29.477 48.6943 26.5774C48.1634 23.6777 46.9653 20.9414 45.1947 18.5846C43.4241 16.2278 41.1295 14.3152 38.4923 12.9979C36.6023 12.0539 34.5734 11.4342 32.4903 11.1589C31.1229 10.9781 30 9.87683 30 8.4975Z"
                          fill="#3D87F6"
                        />
                        <path
                          d="M29.5 14.2505C29.5 13.0076 30.5117 11.9851 31.7444 12.1445C34.9824 12.5632 38.055 13.8821 40.6019 15.9723C43.7316 18.5408 45.8739 22.115 46.6637 26.0859C47.4536 30.0568 46.8422 34.1788 44.9336 37.7494C43.0251 41.3201 39.9375 44.1185 36.197 45.6679C32.4564 47.2173 28.2944 47.4217 24.42 46.2465C20.5456 45.0712 17.1986 42.5889 14.9493 39.2225C12.6999 35.8561 11.6874 31.8139 12.0843 27.7847C12.4072 24.5057 13.6473 21.4005 15.6408 18.8148C16.3997 17.8305 17.8381 17.8381 18.717 18.717C19.5959 19.5959 19.5766 21.012 18.8623 22.0292C17.5822 23.8519 16.7844 25.9843 16.5636 28.2259C16.2688 31.2188 17.0209 34.2213 18.6917 36.7218C20.3626 39.2224 22.8487 41.0662 25.7266 41.9392C28.6045 42.8122 31.696 42.6604 34.4745 41.5095C37.253 40.3586 39.5464 38.28 40.9641 35.6277C42.3817 32.9754 42.8359 29.9136 42.2492 26.964C41.6625 24.0144 40.0712 21.3595 37.7465 19.4517C36.0053 18.0227 33.9334 17.0791 31.7393 16.6953C30.515 16.4812 29.5 15.4934 29.5 14.2505Z"
                          fill="#3D87F6"
                        />
                        <path
                          d="M29.5 20.321C29.5 19.0392 30.5495 17.9765 31.8054 18.2334C33.257 18.5305 34.6449 19.1068 35.8891 19.9381C37.7802 21.2017 39.2542 22.9978 40.1246 25.0991C40.995 27.2005 41.2228 29.5128 40.779 31.7435C40.3353 33.9743 39.24 36.0234 37.6317 37.6317C36.0234 39.24 33.9743 40.3353 31.7435 40.779C29.5128 41.2228 27.2005 40.995 25.0991 40.1246C22.9978 39.2542 21.2017 37.7802 19.9381 35.8891C19.1068 34.6449 18.5305 33.257 18.2334 31.8054C17.9765 30.5495 19.0392 29.5 20.321 29.5C21.6029 29.5 22.6055 30.5679 23.0312 31.777C23.2206 32.3153 23.4775 32.8306 23.7979 33.31C24.5514 34.4378 25.6225 35.3168 26.8756 35.8359C28.1287 36.3549 29.5076 36.4907 30.8379 36.2261C32.1682 35.9615 33.3902 35.3084 34.3493 34.3493C35.3084 33.3902 35.9615 32.1682 36.2261 30.8379C36.4907 29.5076 36.3549 28.1287 35.8359 26.8756C35.3168 25.6225 34.4378 24.5514 33.31 23.7979C32.8306 23.4775 32.3153 23.2206 31.777 23.0312C30.5679 22.6055 29.5 21.6029 29.5 20.321Z"
                          fill="#3D87F6"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="intro__card intro-cards__item swiper-slide">
                    <div className="intro-cards__content">
                      <div className="intro-cards__value">15+</div>
                      <div className="intro-cards__info">
                        Долгосрочных партнёров
                      </div>
                    </div>

                    <div className="intro-cards__image intro-cards__image--group">
                      <div className="intro-cards__image-item">
                        <Image
                          src={"/img/intro/01.png"}
                          width={57}
                          height={57}
                          alt=""
                        />
                      </div>
                      <div className="intro-cards__image-item">
                        <Image
                          src={"/img/intro/02.png"}
                          width={57}
                          height={57}
                          alt=""
                        />
                      </div>
                      <div className="intro-cards__image-item">
                        <Image
                          src={"/img/intro/03.png"}
                          width={57}
                          height={57}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
}
