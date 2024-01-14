"use client";

import { useEffect, useRef, useState } from "react";
import { useGetMobileBurgerLinks } from "@/shared/services/mobileBurgerLinks";
import { SidebarItems } from "@/components/Sidebar/ui/Sidebar";
import { Submenu } from "./Submenu";
import { Menu } from "./Menu";
import { classNames } from "@/shared/lib";
import { useRouter } from "next/navigation";
import { useGetServicesNames } from "@/shared/services/servicesName";

interface BurgerServiceCollectionProps {
  SubMenuName: string;
  items?: readonly SidebarItems[];
  title: string;
}

const BurgerServiceCollection = (props: BurgerServiceCollectionProps) => {
  const { SubMenuName, items, title } = props;

  const [active, setActive] = useState(false);

  const [subMenuActive, setSubMenuActive] = useState(false);
  const [submenuParent, setSubmenuParent] = useState(false);

  const [subMenuContent, setSubMenuContent] = useState<
    readonly SidebarItems[] | undefined
  >(undefined);

  const { data: burgerLinks } = useGetMobileBurgerLinks();

  const { data } = useGetServicesNames();

  const router = useRouter();

  const btnRef = useRef<HTMLButtonElement | null>(null);
  const btnSubMenuRef = useRef<HTMLButtonElement | null>(null);
  const sendTaskBtnRef = useRef<HTMLAnchorElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

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
    setSubMenuContent(items);
  }, [items]);

  return (
    <>
      <div ref={overlayRef} className="mobile-menu-overlay"></div>

      <div className="mobile-menu">
        <nav className="mobile-menu__row js-menu">
          <div className="mobile-menu__base">
            {(!subMenuActive || submenuParent) && (
              <a
                onClick={() => {
                  if (!subMenuActive) {
                    return router.back();
                  }

                  if (items) {
                    setSubMenuContent(items);
                  }

                  if (submenuParent) {
                    if (items) {
                      setSubMenuContent(items);
                    }

                    setSubmenuParent(false);
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

            {subMenuActive && !submenuParent && (
              <a
                onClick={() => {
                  if (data?.serviceNames) {
                    setSubMenuContent(data.serviceNames.data);
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
              {!submenuParent ? SubMenuName : "Услуги"}
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
                name={title}
                submenuParent={submenuParent}
                activeName={SubMenuName}
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

export { BurgerServiceCollection };
