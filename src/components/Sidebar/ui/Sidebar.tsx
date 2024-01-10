"use client";

import { classNames } from "@/shared/lib";
import { CustomLink } from "@/shared/ui/Link";
import { memo } from "react";
import cls from "./Sidebar.module.scss";
import Image from "next/image";
import { Breadcrumbs } from "../lib/Breadcrumbs";
import { ActiveOffers } from "@/layouts/ServiceLayout";
import { GetOffersPageQuery } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { STORAGE_KEYS } from "@/shared/const/storageKey";

export interface SidebarItems {
  readonly id: string;

  readonly attributes: {
    name: string;
    nameID?: string;
  };
}

interface SidebarProps {
  items: readonly SidebarItems[];

  viewSpecialOffers: boolean;
  onChange: (id: string) => void;
  active: string;
  setActiveOffers: React.Dispatch<React.SetStateAction<ActiveOffers | null>>;
  activeOffers: ActiveOffers | null;
  imageOffers:
    | GetOffersPageQuery["offersPage"]["data"]["attributes"]["img"]
    | undefined;
}

const Sidebar = memo((props: SidebarProps) => {
  const {
    items,
    viewSpecialOffers,
    onChange,
    active,
    setActiveOffers,
    activeOffers,
    imageOffers,
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

                  if (item.attributes?.nameID === STORAGE_KEYS.COMPLEX) {
                    return setActiveOffers("complex");
                  }
                }}
                key={item.id}
                className={"sidebar__item"}
              >
                <a
                  className={classNames(`sidebar__link ${cls.link}`, {
                    [cls.active]:
                      item.id === active && activeOffers !== "offer",
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
              setActiveOffers("offer");
            }}
            className="sidebar__baner"
            style={{ background: "#d1e791" }}
          >
            <div className="sidebar__name">Спецпредложения</div>
            {imageOffers?.data && (
              <div className="sidebar__image">
                <Image
                  src={getFileUrl(imageOffers.data.attributes.url)}
                  alt=""
                  width={imageOffers.data.attributes.width}
                  height={imageOffers.data.attributes.height}
                />
              </div>
            )}
          </button>
        )}

        <CustomLink iconPosition="right">Оставить заявку</CustomLink>
      </div>
    </aside>
  );
});

export { Sidebar };
