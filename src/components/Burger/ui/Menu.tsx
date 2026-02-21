import { getRouteOffersPage } from "@/shared/const/pages";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Lottie, { Options } from "react-lottie";
import animationData from "@/shared/assets/animation/data-mobile.json";
import { useCallback, useMemo } from "react";

interface MenuProps {
  active: boolean;
  activeContacts: boolean;
  onClickContacts: () => void;
  onClickServices: () => void;
}

const Menu = (props: MenuProps) => {
  const { active, activeContacts, onClickContacts, onClickServices } = props;

  const router = useRouter();

  const mobileNavigation = useCallback(
    ({
      clickContacts,
      clickServices,
    }: {
      clickContacts: () => void;
      clickServices: () => void;
    }) => {
      return [
        {
          id: "1",
          name: "главная",
          href: "/",
        },
        {
          id: "2",
          name: "контакты",
          click: clickContacts,
        },
        {
          id: "3",
          name: "услуги",
          click: clickServices,
        },
        {
          id: "4",
          name: "портфолио",
          href: "/portfolio",
        },
        {
          id: "5",
          name: "агентство",
          href: "/about",
        },
      ];
    },
    [],
  );

  const onClick = () => {
    router.push(getRouteOffersPage());
  };

  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      clearCanvas: true,
      className: "lottie-mobile",
    },
  };

  return (
    <>
      {activeContacts && (
        <div
          className="mobile-menu__nav mobile-nav"
          data-item="contacts"
          style={{ maxHeight: "440px" }}
        >
          <div className="mobile-nav__row">
            <a className="mobile-nav__logo logo">
              <span className="logo__base">
                <img src="/img/logo-base.svg" />
              </span>
              <span className="logo__in">
                <span className="logo__in-def">
                  <img src="/img/logo-in-def.svg" />
                </span>
                <span className="logo__in-hv">
                  <img src="/img/logo-in-hv.svg" />
                </span>
              </span>
            </a>
            <a
              className="mobile-nav__baner"
              onClick={onClick}
              //@ts-ignore
              style={{
                background: "linear-gradient(180deg, #489DEB 0%, #82C3FF 100%)",
              }}
            >
              <div className="mobile-nav__image">
                <Lottie
                  isClickToPauseDisabled={true}
                  options={defaultOptions}
                />
              </div>
            </a>
            <ul className="mobile-nav__list">
              <li className="mobile-nav__item">
                <a>+7 (919) 000-30-03</a>
              </li>
              <li className="mobile-nav__item ">
                <a>creat_in@mail.ru</a>
              </li>
              <li className="mobile-nav__item">
                <a>Рашпилевская, 74</a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {!activeContacts && (
        <div
          className="mobile-menu__nav mobile-nav"
          style={{ maxHeight: active ? "555px" : "0px" }}
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
              onClick={onClick}
              className="mobile-nav__baner"
              style={{
                background: "linear-gradient(180deg, #489DEB 0%, #82C3FF 100%)",
              }}
            >
              <div className="mobile-nav__image">
                <Lottie
                  isClickToPauseDisabled={true}
                  options={defaultOptions}
                />
              </div>
            </a>

            <ul className="mobile-nav__list">
              {mobileNavigation({
                clickContacts: onClickContacts,
                clickServices: onClickServices,
              })?.map((el) => {
                return (
                  <li key={el.id} className="mobile-nav__item">
                    {el.href ? (
                      <Link href={el.href}>{el.name}</Link>
                    ) : (
                      <a onClick={el.click}>{el.name}</a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export { Menu };
