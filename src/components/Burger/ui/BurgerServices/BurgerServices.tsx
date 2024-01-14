"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { useMobileRoute } from "../../lib/useMobileRoute";
import { useGetMobileBurgerLinks } from "@/shared/services/mobileBurgerLinks";
import { ComponentUiMobileLink } from "@/graphql/__generated__";
import { SidebarItems } from "@/components/Sidebar/ui/Sidebar";
import { Submenu } from "./Submenu";
import { Menu } from "./Menu";
import { useGetServicesTitleById } from "@/shared/services/mobileGetServicesTitleById";
import { classNames } from "@/shared/lib";
import { STORAGE_KEYS } from "@/shared/const/storageKey";
import { ActiveOfferProviderContext } from "@/shared/providers/activeOfferProvider";
import { useRouter } from "next/navigation";

interface BurgerServicesProps {
  SubMenuName: string;
  items?: readonly SidebarItems[];
}

const BurgerServices = (props: BurgerServicesProps) => {
  const { SubMenuName, items } = props;

  const [active, setActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);

  const [submenuParent, setSubmenuParent] = useState(false);

  const [routeActive, setRouteActive] = useState<
    ComponentUiMobileLink | undefined
  >(undefined);

  const [subMenuContent, setSubMenuContent] = useState<
    readonly SidebarItems[] | undefined
  >(undefined);

  const { data: burgerLinks } = useGetMobileBurgerLinks();

  const { data } = useGetServicesTitleById(SubMenuName);

  const router = useRouter();

  useMobileRoute({
    mobileNavigation: burgerLinks?.mobileNavigation.data.attributes.mobileLink,
    setRouteActive,
  });

  const btnRef = useRef<HTMLButtonElement | null>(null);
  const btnSubMenuRef = useRef<HTMLButtonElement | null>(null);
  const sendTaskBtnRef = useRef<HTMLAnchorElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const { activeOffers } = useContext(ActiveOfferProviderContext);

  // Если я кликнул на бургер
  const toggleMenu = () => {
    if (btnRef.current) {
      // Я кнопке с бургером добавляю active class
      btnRef.current.classList.toggle("_active");

      // Если он активен
      if (btnRef.current.classList.contains("_active")) {
        // Устанавливаю флаг
        setActive(true);

        // Кнопке отправить задаю активный класс
        sendTaskBtnRef.current?.classList.add("trigger-active");

        // Так же оверлею задаю активный класс
        overlayRef.current?.classList.add("_active");

        // А подменю отключаю
        setSubMenuActive(false);

        if (data?.services.data[0]) {
          setSubMenuContent(
            data.services.data[0].attributes.Services.service_collections.data
          );
        }

        setSubmenuParent(false);
      } else {
        // Если неактивный, то отключаю флаг
        setActive(false);
        setSubMenuActive(false);

        // Убираю кнопку
        sendTaskBtnRef.current?.classList.remove("trigger-active");

        // Удаляю оверлей
        overlayRef.current?.classList.remove("_active");

        // Удаляю активный класс кнопке сабменю
        btnSubMenuRef.current?.classList.remove("_active");

        if (data?.services.data[0]) {
          setSubMenuContent(
            data?.services.data[0].attributes.Services.service_collections.data
          );
        }

        setSubmenuParent(false);
      }
    }
  };

  // Если кликаю по сабменю
  const onToggleSubMenu = () => {
    if (btnSubMenuRef.current) {
      btnSubMenuRef.current.classList.toggle("_active");

      // Проверяю если тут есть активный класс, то
      if (btnSubMenuRef.current.classList.contains("_active")) {
        // Активизирую submenu
        setSubMenuActive(true);

        // Добавляю активный класс оверлею
        overlayRef.current?.classList.add("_active");

        btnRef.current?.classList.add("_active");

        setActive(false);
      } else {
        // Убираю сабменю
        setSubMenuActive(false);

        // Удаляю активный класс
        overlayRef.current?.classList.remove("_active");

        btnRef.current?.classList.remove("_active");
      }
    }
  };

  useEffect(() => {
    if (data?.services.data[0]) {
      setSubMenuContent(
        data.services.data[0].attributes.Services.service_collections.data
      );
    }

    if (activeOffers === "complex") {
      setSubMenuContent(items);
      setSubmenuParent(true);
    }
  }, [data, items, routeActive]);

  return (
    <>
      <div ref={overlayRef} className="mobile-menu-overlay"></div>

      <div className="mobile-menu">
        <nav className="mobile-menu__row js-menu">
          <div className="mobile-menu__base">
            {(!subMenuActive || submenuParent || activeOffers) && (
              <a
                onClick={() => {
                  if (!subMenuActive) {
                    return router.back();
                  }

                  if (!activeOffers) {
                    if (items) {
                      setSubMenuContent(items);
                    }

                    if (submenuParent) {
                      if (data?.services.data[0]) {
                        setSubMenuContent(
                          data.services.data[0].attributes.Services
                            .service_collections.data
                        );
                      }

                      setSubmenuParent(false);
                    }
                  }
                }}
                title="Вернуться на предыдущую страницу"
                className={classNames("mobile-menu__back has-alt-icon", {}, [])}
                style={{
                  // @ts-ignore
                  "--icon": "url(/img/icons/back.svg)",
                  "--icon-alt": "url(/img/icons/back-alt.svg)",
                }}
              ></a>
            )}

            {subMenuActive && !submenuParent && !activeOffers && (
              <a
                onClick={() => {
                  if (items) {
                    setSubMenuContent(items);
                    setSubmenuParent(true);
                  }
                }}
                title="Вернуться на предыдущую страницу"
                className={classNames(
                  "mobile-menu__back has-alt-icon trigger-active",
                  {},
                  []
                )}
                style={{
                  // @ts-ignore
                  "--icon": "url(/img/icons/back.svg)",
                  "--icon-alt": "url(/img/icons/back-alt.svg)",
                }}
              ></a>
            )}

            <button
              ref={btnSubMenuRef}
              onClick={onToggleSubMenu}
              type="button"
              title="Показать подменю услуг"
              className="mobile-menu__link btn"
            >
              {SubMenuName}
            </button>

            <a
              ref={sendTaskBtnRef}
              title="Вернуться на предыдущую страницу"
              className="mobile-menu__sublink mobile-menu__sublink--small btn btn--alt"
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
            {subMenuContent && (
              <Submenu
                subMenuContent={subMenuContent}
                subMenuActive={subMenuActive}
                name={SubMenuName}
                submenuParent={submenuParent}
              />
            )}

            {burgerLinks?.mobileNavigation && (
              <Menu
                burgerLinks={
                  burgerLinks.mobileNavigation.data.attributes.mobileLink
                }
                active={active}
              />
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export { BurgerServices };
