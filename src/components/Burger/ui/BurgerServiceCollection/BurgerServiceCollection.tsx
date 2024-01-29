"use client";

import { useEffect, useRef, useState } from "react";
import { SidebarItems } from "@/components/Sidebar/ui/Sidebar";
import { Submenu } from "./Submenu";
import { Menu } from "../Menu";
import { classNames } from "@/shared/lib";
import { useRouter } from "next/navigation";
import { useGetServicesNames } from "@/shared/services/servicesName";
import { SendTaskBtn } from "../../SendTaskBtn";
import cls from "./../index.module.scss";

interface BurgerServiceCollectionProps {
  SubMenuName: string;
  items?: readonly SidebarItems[];
  title: string;
}

const BurgerServiceCollection = (props: BurgerServiceCollectionProps) => {
  const { SubMenuName, items, title } = props;

  const [activeContacts, setActiveContacts] = useState<boolean>(false);

  const [active, setActive] = useState(false);

  const [subMenuActive, setSubMenuActive] = useState(false);
  const [submenuParent, setSubmenuParent] = useState(false);

  const [subMenuContent, setSubMenuContent] = useState<
    readonly SidebarItems[] | undefined
  >(undefined);

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
        setActiveContacts(false);

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
            {(!subMenuActive || submenuParent || activeContacts) && (
              <a
                onClick={() => {
                  if (activeContacts) {
                    setActiveContacts(false);
                    sendTaskBtnRef.current?.classList.add("trigger-active");
                  } else {
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
                  }
                }}
                title="Вернуться на предыдущую страницу"
                className={classNames("mobile-menu__back has-alt-icon", {}, [
                  cls.burger,
                ])}
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
                  [cls.burger]
                )}
                style={{
                  // @ts-ignore
                  "--icon": "url(/img/icons/back.svg)",
                  "--icon-alt": "url(/img/icons/back-alt.svg)",
                }}
              ></a>
            )}

            {!activeContacts ? (
              <button
                ref={btnSubMenuRef}
                onClick={onToggleSubMenu}
                type="button"
                title="Показать подменю услуг"
                className={classNames("mobile-menu__link btn", {}, [cls.btn])}
              >
                {!submenuParent ? SubMenuName : "Услуги"}
              </button>
            ) : (
              <button
                ref={btnSubMenuRef}
                onClick={undefined}
                type="button"
                title="Показать подменю услуг"
                className={classNames("mobile-menu__link btn", {}, [cls.btn])}
              >
                Контакты
              </button>
            )}

            <SendTaskBtn sendTaskBtnRef={sendTaskBtnRef} />

            <button
              ref={btnRef}
              onClick={toggleMenu}
              type="button"
              title="Показать меню навигации"
              className={classNames("mobile-menu__burger", {}, [cls.burger])}
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

export { BurgerServiceCollection };
