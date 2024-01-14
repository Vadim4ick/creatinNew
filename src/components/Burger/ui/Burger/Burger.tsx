"use client";

import { useEffect, useRef, useState } from "react";
import { Submenu } from "./Submenu";
import { Menu } from "./Menu";
import { useMobileRoute } from "../../lib/useMobileRoute";
import { useGetMobileBurgerLinks } from "@/shared/services/mobileBurgerLinks";
import { useGetServicesNames } from "@/shared/services/servicesName";
import { ComponentUiMobileLink } from "@/graphql/__generated__";
import { SidebarItems } from "@/components/Sidebar/ui/Sidebar";

interface BurgerProps {
  SubMenuName?: string;
  items?: readonly SidebarItems[];
}

const Burger = (props: BurgerProps) => {
  const { SubMenuName, items } = props;

  const [active, setActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);

  const [routeActive, setRouteActive] = useState<
    ComponentUiMobileLink | undefined
  >(undefined);

  const [subMenuContent, setSubMenuContent] = useState<
    readonly SidebarItems[] | undefined
  >(undefined);

  const { data: burgerLinks } = useGetMobileBurgerLinks();
  const { data: serviceNames } = useGetServicesNames();

  // const { services } = await gql.GetServicesTitleById({
  //   title: decodeURIComponent(service),
  // });

  useMobileRoute({
    mobileNavigation: burgerLinks?.mobileNavigation.data.attributes.mobileLink,
    setRouteActive,
  });

  const btnRef = useRef<HTMLButtonElement | null>(null);
  const btnSubMenuRef = useRef<HTMLButtonElement | null>(null);
  const sendTaskBtnRef = useRef<HTMLAnchorElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  // Если я кликнул на бургер
  const toggleMenu = () => {
    if (btnRef.current) {
      // Я кнопке с бургером добавляю active class
      btnRef.current.classList.toggle("_active");

      // if (
      //   btnRef.current.classList.contains("_active") &&
      //   btnSubMenuRef.current?.classList.contains("_active")
      // ) {
      //   return setSubMenuActive(false);
      // }

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
    if (routeActive?.href === "/") {
      setSubMenuContent(serviceNames?.serviceNames.data);
    } else {
      setSubMenuContent(items);
    }
  }, [routeActive, serviceNames]);

  return (
    <>
      <div ref={overlayRef} className="mobile-menu-overlay"></div>

      <div className="mobile-menu">
        <nav className="mobile-menu__row js-menu">
          <div className="mobile-menu__base">
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

export { Burger };
