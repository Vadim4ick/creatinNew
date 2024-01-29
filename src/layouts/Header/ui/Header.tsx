"use client";

import { GetHeaderQuery } from "@/graphql/client";
import { classNames } from "@/shared/lib";
import { ActiveOfferProviderContext } from "@/shared/providers/activeOfferProvider";
import { DarkProviderContext } from "@/shared/providers/darkProvider";
// import { HomePreloaderProviderContext } from "@/shared/providers/homePreloader";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef } from "react";
import cls from "./Header.module.scss";

interface HeaderProps {
  header: GetHeaderQuery["header"]["data"]["attributes"];
}

const Header = (props: HeaderProps) => {
  const { header } = props;

  const headerRef = useRef<HTMLDivElement | null>(null);

  const { setActiveOffers } = useContext(ActiveOfferProviderContext);
  const { darkTheme } = useContext(DarkProviderContext);

  // const { preloader } = useContext(HomePreloaderProviderContext);

  // const pathname = usePathname();

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (headerRef.current) {
        if (e.deltaY < 0) {
          headerRef.current.classList.remove("header--scroll-top");
          document.documentElement.classList.remove("header-sroll-top");
        } else {
          headerRef.current.classList.add("header--scroll-top");
          document.documentElement.classList.add("header-sroll-top");
        }
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      document.documentElement.style.setProperty(
        "--header",
        window.getComputedStyle(headerRef.current).height
      );
    }
  }, []);

  // if (preloader && pathname === "/") {
  //   return null;
  // }

  return (
    <>
      <header ref={headerRef} className="header">
        <div className="header__container">
          {darkTheme ? (
            <Link href={"/"} className="header__logo logo">
              <span className="logo__base">
                <img src="/img/logo/dark-logo-base.svg" alt="" />
              </span>
              <span className="logo__in">
                <span className="logo__in-def">
                  <img src="/img/logo/dark-logo-in-def.svg" alt="" />
                </span>
                <span className="logo__in-hv">
                  <img src="/img/logo/dark-logo-in-hv.svg" alt="" />
                </span>
              </span>
            </Link>
          ) : (
            <Link href={"/"} className="header__logo logo">
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
            </Link>
          )}
          <div className="header__menu menu">
            <nav className="menu__body">
              <ul
                className={classNames(
                  "menu__list",
                  { [cls.darkList]: darkTheme },
                  []
                )}
              >
                {header.links.map((link) => {
                  return (
                    <li
                      key={link.id}
                      className={classNames(
                        "menu__item",
                        { [cls.darkItem]: darkTheme },
                        []
                      )}
                    >
                      <Link
                        onClick={() => setActiveOffers(null)}
                        className="menu__link"
                        href={link.href}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="mobile-menu-overlay"></div>
    </>
  );
};

export { Header };
