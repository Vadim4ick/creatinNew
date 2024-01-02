"use client";

import { useRef, useState } from "react";

const Burger = () => {
  const [active, setActive] = useState(false);

  const btnRef = useRef<HTMLButtonElement | null>(null);
  const sendTaskBtnRef = useRef<HTMLAnchorElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    if (btnRef.current) {
      btnRef.current.classList.toggle("_active");
      sendTaskBtnRef.current?.classList.toggle("trigger-active");
      overlayRef.current?.classList.toggle("_active");

      if (btnRef.current.classList.contains("_active")) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
  };

  return (
    <>
      <div ref={overlayRef} className="mobile-menu-overlay"></div>

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
              ref={sendTaskBtnRef}
              title="Вернуться на предыдущую страницу"
              className="mobile-menu__sublink mobile-menu__sublink--small btn btn--alt"
              data-changeby="nav"
            >
              Оставить заявку
            </a>

            <button
              ref={btnRef}
              onClick={toggleMenu}
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

            <div
              className="mobile-menu__nav mobile-nav"
              data-item="nav"
              style={{ maxHeight: active ? "500px" : "0px" }}
            >
              <div className="mobile-nav__row">
                <a className="mobile-nav__logo logo">
                  <span className="logo__base">
                    <img src="/img/logo-base.svg" alt="" />
                  </span>
                  <span className="logo__in">
                    <span className="logo__in-def">
                      <img src="/img/logo-in-def.svg" alt="" />
                    </span>
                    <span className="logo__in-hv">
                      <img src="/img/logo-in-hv.svg" alt="" />
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
                    <img src="/img/header/01.png" alt="" />
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
    </>
  );
};

export { Burger };
