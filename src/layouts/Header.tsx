"use client";

import { GetHeaderQuery } from "@/graphql/client";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface HeaderProps {
  header: GetHeaderQuery["header"]["data"]["attributes"];
}

const Header = (props: HeaderProps) => {
  const { header } = props;

  const headerRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <>
      <header ref={headerRef} className="header">
        <div className="header__container">
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
          <div className="header__menu menu">
            <nav className="menu__body">
              <ul className="menu__list">
                {header.links.map((link) => {
                  return (
                    <li key={link.id} className="menu__item">
                      <Link className="menu__link" href={link.href}>
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
