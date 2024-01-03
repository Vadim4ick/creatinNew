"use client";

import { classNames } from "@/shared/lib";
import { CustomLink } from "@/shared/ui/Link";
import { memo, useState } from "react";
import cls from "./Sidebar.module.scss";
import Image from "next/image";
import { GetServicesNamesQuery } from "@/graphql/__generated__";

export interface SidebarItems {
  id: string;
  attributes: {
    name: string;
  };
}

interface SidebarProps {
  // items: SidebarItems[];
  items: GetServicesNamesQuery["serviceNames"]["data"] | undefined;
  viewSpecialOffers: boolean;
  onChange: (id: string) => void;
  active: string;
}

const Sidebar = memo((props: SidebarProps) => {
  const { items, viewSpecialOffers, onChange, active } = props;

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
          {items?.length &&
            items.map((item) => (
              <li
                onClick={() => onChange(item.id)}
                key={item.id}
                className={"sidebar__item"}
              >
                <a
                  className={classNames("sidebar__link", {
                    [cls.active]: item.id === active,
                  })}
                >
                  {item.attributes.name}
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
});

export { Sidebar };
