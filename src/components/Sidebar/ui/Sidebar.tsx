"use client";

import { classNames } from "@/shared/lib";
import { Dispatch, SetStateAction, memo } from "react";
import cls from "./Sidebar.module.scss";
import { Breadcrumbs } from "../lib/Breadcrumbs";
import { usePathname, useRouter } from "next/navigation";
import { getRouteComplexPage, getRouteOffersPage } from "@/shared/const/pages";
import { GetComplexSidebarTitleQuery } from "@/graphql/__generated__";
import { SpecialOffer } from "@/shared/icons/SpecialOffer";

export interface SidebarItems {
  readonly id: string;

  readonly attributes: {
    name: string;
    nameID?: string;
  };
}

export type SidebarItemElement = "normal" | "input";

interface SidebarProps {
  items: readonly SidebarItems[];

  onChange: (id: string) => void;
  active?: string;
  itemElement?: SidebarItemElement;
  setInputIds?: Dispatch<SetStateAction<string[]>>;
  onChangeDop?: VoidFunction;
  complexTitle?: GetComplexSidebarTitleQuery["complexAccompany"];
}

const Sidebar = memo((props: SidebarProps) => {
  const {
    items,
    onChange,
    active,
    itemElement = "normal",
    setInputIds,
    complexTitle,
  } = props;

  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar__row">
        <Breadcrumbs />

        {items && items.length > 0 && (
          <ul className="sidebar__items">
            {items.map((item, i) => {
              if (itemElement === "normal") {
                return (
                  <li
                    onClick={() => {
                      onChange(item.id);
                    }}
                    key={item.id}
                    className={"sidebar__item"}
                  >
                    <a
                      className={classNames(`sidebar__link ${cls.link}`, {
                        [cls.active]:
                          item.id === active &&
                          pathname !== getRouteOffersPage(),
                      })}
                    >
                      {item.attributes.name}
                    </a>
                  </li>
                );
              } else if (itemElement === "input" && setInputIds) {
                return (
                  <li
                    onClick={() => {
                      onChange(item.id);
                    }}
                    key={item.id}
                    className={"sidebar__item"}
                  >
                    <input
                      id={`c_${i}`}
                      className="visually-hidden _form-field"
                      type="checkbox"
                      onChange={(e) =>
                        setInputIds((prev) =>
                          e.target.checked
                            ? [...prev, item.id]
                            : prev.filter((id) => id !== item.id)
                        )
                      }
                    />
                    <label htmlFor={`c_${i}`} className="sidebar__label">
                      <span className="sidebar__link">
                        {item.attributes.name}
                      </span>
                    </label>
                  </li>
                );
              }
            })}

            {complexTitle?.data && complexTitle.data.attributes.title && (
              <li
                className={"sidebar__item"}
                onClick={() => router.push(getRouteComplexPage())}
              >
                <a
                  className={classNames(
                    `sidebar__link ${cls.link}`,
                    {
                      [cls.active]: pathname === getRouteComplexPage(),
                    },
                    []
                  )}
                >
                  {complexTitle.data.attributes.title}
                </a>
              </li>
            )}
          </ul>
        )}

        <button
          onClick={() => {
            router.push(getRouteOffersPage());
          }}
          className={cls.btnSpecialOffer}
        >
          <span>Спецпредложения</span>

          <div className={cls.icon}>
            <SpecialOffer />
          </div>
        </button>
      </div>
    </aside>
  );
});

export { Sidebar };
