"use client";

import { useEffect, useRef, useState } from "react";
import { Submenu } from "./Submenu";
import { Menu } from "../Menu";
import { useGetServicesNames } from "@/shared/services/servicesName";
import { SidebarItems } from "@/components/Sidebar/ui/Sidebar";

interface BurgerProps {
  SubMenuName?: string;
}

const Burger = (props: BurgerProps) => {
  const { SubMenuName } = props;

  const [activeContacts, setActiveContacts] = useState<boolean>(false);

  const [active, setActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);

  const [subMenuContent, setSubMenuContent] = useState<
    readonly SidebarItems[] | undefined
  >(undefined);

  const { data: serviceNames } = useGetServicesNames();

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
      } else {
        // Если неактивный, то отключаю флаг
        setActive(false);
        setSubMenuActive(false);
        setActiveContacts(false);

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
    setSubMenuContent(serviceNames?.serviceNames.data);
  }, [serviceNames]);

  const onClickContacts = () => {
    setActiveContacts(true);
    // Убираю кнопку
    sendTaskBtnRef.current?.classList.remove("trigger-active");
  };

  return (
    <>
      <div ref={overlayRef} className="mobile-menu-overlay"></div>

      <div className="mobile-menu">
        <nav className="mobile-menu__row js-menu">
          <div className="mobile-menu__base">
            {activeContacts && (
              <a
                onClick={() => {
                  setActiveContacts(false);
                  sendTaskBtnRef.current?.classList.add("trigger-active");
                }}
                title="Вернуться на предыдущую страницу"
                className={"mobile-menu__back has-alt-icon"}
                style={{
                  // @ts-ignore
                  "--icon": "url(/img/icons/back.svg)",
                  "--icon-alt": "url(/img/icons/back-alt.svg)",
                }}
              ></a>
            )}

            <button
              ref={btnSubMenuRef}
              onClick={activeContacts ? undefined : onToggleSubMenu}
              type="button"
              title="Показать подменю услуг"
              className="mobile-menu__link btn"
            >
              {activeContacts ? "Контакты" : SubMenuName}
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

            <Menu
              active={active}
              activeContacts={activeContacts}
              onClickContacts={onClickContacts}
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export { Burger };
