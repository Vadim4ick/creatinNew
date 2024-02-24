"use client";

import { classNames } from "@/shared/lib";
import { Dispatch, SetStateAction, memo, useContext } from "react";
import cls from "./Sidebar.module.scss";
import { Breadcrumbs } from "../lib/Breadcrumbs";
import { BtnArrow } from "@/shared/icons/BtnArrow";
import { PopupProviderContext } from "@/shared/providers/popupProvider";
import Lottie, { Options } from "react-lottie";
import animationData from "@/shared/assets/animation/data.json";
import { usePathname, useRouter } from "next/navigation";
import { getRouteOffersPage } from "@/shared/const/pages";

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
}

const Sidebar = memo((props: SidebarProps) => {
  const {
    items,
    onChange,
    active,
    itemElement = "normal",
    setInputIds,
  } = props;

  const { onClickPopup } = useContext(PopupProviderContext);

  const router = useRouter();
  const pathname = usePathname();

  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      clearCanvas: true,
      className: "lottie",
    },
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__row">
        <Breadcrumbs />

        <ul className="sidebar__items">
          {items.length &&
            items.map((item, i) => {
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
        </ul>

        <div className="sidebar__image">
          <button
            onClick={() => {
              router.push(getRouteOffersPage());
            }}
          >
            <Lottie isClickToPauseDisabled={true} options={defaultOptions} />
          </button>
        </div>

        <button onClick={onClickPopup} className={"btn btn--hasarrow"}>
          <span className="btn__text">Оставить заявку</span>

          <span className="btn__arrow">
            <BtnArrow />
          </span>
        </button>
      </div>
    </aside>
  );
});

export { Sidebar };
