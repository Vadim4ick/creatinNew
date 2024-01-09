"use client";

import { classNames } from "@/shared/lib";
import { CustomLink } from "@/shared/ui/Link";
import { memo } from "react";
import cls from "./Sidebar.module.scss";
import Image from "next/image";
import { Breadcrumbs } from "../lib/Breadcrumbs";
import Link from "next/link";
import { getRouteOffers } from "@/shared/const/pages";

export interface SidebarItems {
  readonly id: string;

  readonly attributes: {
    name: string;
  };
}

interface SidebarProps {
  items: readonly SidebarItems[];

  viewSpecialOffers: boolean;
  onChange: (id: string) => void;
  active: string;
  setActiveOffers: React.Dispatch<React.SetStateAction<boolean>>;
  activeOffers: boolean;
}

const Sidebar = memo((props: SidebarProps) => {
  const {
    items,
    viewSpecialOffers,
    onChange,
    active,
    setActiveOffers,
    activeOffers,
  } = props;

  return (
    <aside className="sidebar">
      <div className="sidebar__row">
        <Breadcrumbs />

        <ul className="sidebar__items">
          {items.length &&
            items.map((item) => (
              <li
                onClick={() => {
                  onChange(item.id);
                }}
                key={item.id}
                className={"sidebar__item"}
              >
                <a
                  className={classNames(`sidebar__link ${cls.link}`, {
                    [cls.active]: item.id === active && !activeOffers,
                  })}
                >
                  {item.attributes.name}
                </a>
              </li>
            ))}
        </ul>

        {viewSpecialOffers && (
          <button
            onClick={() => {
              setActiveOffers(true);
            }}
            className="sidebar__baner"
            style={{ background: "#d1e791" }}
          >
            <div className="sidebar__name">Спецпредложения</div>
            <div className="sidebar__image">
              <Image
                src={"/img/services/sidebar.png"}
                alt=""
                width={184}
                height={180}
              />
            </div>
          </button>
        )}

        <CustomLink iconPosition="right">Оставить заявку</CustomLink>
      </div>
    </aside>
  );
});

export { Sidebar };
