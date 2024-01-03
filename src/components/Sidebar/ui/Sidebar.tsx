"use client";

import { classNames } from "@/shared/lib";
import { CustomLink } from "@/shared/ui/Link";
import { useState } from "react";
import cls from "./Sidebar.module.scss";
import Image from "next/image";

export interface SidebarItems {
  id: number;
  title: string;
}

interface SidebarProps {
  items: SidebarItems[];
  viewSpecialOffers: boolean;
}

const Sidebar = (props: SidebarProps) => {
  const { items, viewSpecialOffers } = props;

  const [activeItemIdx, setActiveItemIdx] = useState<number>(0);

  const handleClick = (idx: number) => {
    setActiveItemIdx(idx);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__row">
        <div className="breadcrumb">
          <ul className="breadcrumb__list">
            <li className="breadcrumb__item breadcrumb__item--back">
              <span>
                <a>
                  <span> </span>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="mdi:arrow-up">
                      <path
                        id="Vector"
                        d="M16 8.67929V10.3207H6.15152L10.6654 14.8346L9.5 16L3 9.5L9.5 3L10.6654 4.1654L6.15152 8.67929H16Z"
                        fill="#656565"
                      />
                    </g>
                  </svg>
                </a>
              </span>
            </li>
            <li className="breadcrumb__item">
              <span>
                <a>
                  <span> Главная </span>
                </a>
              </span>
            </li>
            <li className="breadcrumb__item breadcrumb__item-link--active">
              <span>
                <span>Портфолио</span>
              </span>
            </li>
          </ul>
        </div>
        <ul className="sidebar__items">
          {items.map((item, i) => (
            <li
              onClick={() => handleClick(i)}
              key={item.id}
              className={"sidebar__item"}
            >
              <a
                className={classNames("sidebar__link", {
                  [cls.active]: i === activeItemIdx,
                })}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {viewSpecialOffers && (
          <a className="sidebar__baner" style={{ background: "#d1e791" }}>
            <div className="sidebar__name">Спецпредложения</div>
            <div className="sidebar__image">
              <Image
                src={"/img/services/sidebar.png"}
                alt=""
                width={184}
                height={180}
              />
            </div>
          </a>
        )}

        <CustomLink iconPosition="right">Оставить заявку</CustomLink>
      </div>
    </aside>
  );
};

export { Sidebar };
