"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { SidebarItems } from "@/components/Sidebar/ui/Sidebar";
import { Submenu } from "./Submenu";
import { useGetServicesTitleById } from "@/shared/services/mobileGetServicesTitleById";
import { classNames } from "@/shared/lib";
import { ActiveOfferProviderContext } from "@/shared/providers/activeOfferProvider";
import { useRouter } from "next/navigation";
import { Menu } from "../Menu";
import { SendTaskBtn } from "../../SendTaskBtn";
import { Loader } from "@/shared/ui/Loader/Loader";

interface BurgerServicesProps {
  SubMenuName: string;
  items?: readonly SidebarItems[];
}

const BurgerServices = (props: BurgerServicesProps) => {
  const { SubMenuName, items } = props;

  const [activeContacts, setActiveContacts] = useState<boolean>(false);

  const [active, setActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);

  const [submenuParent, setSubmenuParent] = useState(false);

  const [subMenuContent, setSubMenuContent] = useState<
    readonly SidebarItems[] | undefined
  >(undefined);

  const { data, isLoading } = useGetServicesTitleById(SubMenuName);

  const router = useRouter();

  const btnRef = useRef<HTMLButtonElement | null>(null);
  const btnSubMenuRef = useRef<HTMLButtonElement | null>(null);
  const sendTaskBtnRef = useRef<HTMLAnchorElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const { activeOffers, setActiveOffers } = useContext(
    ActiveOfferProviderContext
  );

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
        setActiveContacts(false);

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

    if (activeOffers === "offer") {
      setSubMenuContent(items);
      setSubmenuParent(true);
    }
  }, [activeOffers, data, items]);

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
            {(!subMenuActive ||
              submenuParent ||
              activeOffers ||
              activeContacts) && (
              <a
                onClick={() => {
                  if (activeContacts) {
                    setActiveContacts(false);
                    sendTaskBtnRef.current?.classList.add("trigger-active");
                  } else {
                    if (!subMenuActive) {
                      setActiveOffers(null);
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

            {!activeContacts ? (
              <button
                ref={btnSubMenuRef}
                onClick={onToggleSubMenu}
                type="button"
                title="Показать подменю услуг"
                className="mobile-menu__link btn"
              >
                {activeOffers !== null ? "Услуги" : SubMenuName}
              </button>
            ) : (
              <button
                ref={btnSubMenuRef}
                onClick={undefined}
                type="button"
                title="Показать подменю услуг"
                className="mobile-menu__link btn"
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

export { BurgerServices };