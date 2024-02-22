"use client";

import { classNames } from "@/shared/lib";
import { Dispatch, SetStateAction, memo, useContext } from "react";
import cls from "./Sidebar.module.scss";
import { Breadcrumbs } from "../lib/Breadcrumbs";
import { ActiveOffers } from "@/layouts/ServiceLayout";
import { GetOffersPageQuery } from "@/graphql/__generated__";
import { STORAGE_KEYS } from "@/shared/const/storageKey";
import { BtnArrow } from "@/shared/icons/BtnArrow";
import { PopupProviderContext } from "@/shared/providers/popupProvider";
import { ActiveOfferProviderContext } from "@/shared/providers/activeOfferProvider";
import Lottie, { Options } from "react-lottie";
import animationData from "@/shared/assets/animation/data.json";

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

  viewSpecialOffers: boolean;
  onChange: (id: string) => void;
  active?: string;
  setActiveOffers: React.Dispatch<React.SetStateAction<ActiveOffers | null>>;
  activeOffers: ActiveOffers | null;
  imageOffers:
    | GetOffersPageQuery["offersPage"]["data"]["attributes"]["img"]
    | undefined;
  itemElement?: SidebarItemElement;
  setInputIds?: Dispatch<SetStateAction<string[]>>;
  onChangeDop?: VoidFunction;
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
    itemElement = "normal",
    setInputIds,
  } = props;

  const { onClickPopup } = useContext(PopupProviderContext);

  const { setActiveComplex } = useContext(ActiveOfferProviderContext);

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

                      if (item.attributes?.nameID === STORAGE_KEYS.COMPLEX) {
                        sessionStorage.setItem(
                          STORAGE_KEYS.ACTIVE_OFFER,
                          "complex" as ActiveOffers
                        );
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
                );
              } else if (itemElement === "input" && setInputIds) {
                return (
                  <li
                    onClick={() => {
                      onChange(item.id);

                      if (item.attributes?.nameID === STORAGE_KEYS.COMPLEX) {
                        sessionStorage.setItem(
                          STORAGE_KEYS.ACTIVE_OFFER,
                          "complex" as ActiveOffers
                        );
                        return setActiveOffers("complex");
                      }
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

        {viewSpecialOffers && imageOffers?.data && (
          <div className="sidebar__image">
            <button
              onClick={() => {
                setActiveOffers("offer");

                setActiveComplex(false);

                sessionStorage.setItem(
                  STORAGE_KEYS.ACTIVE_OFFER,
                  "offer" as ActiveOffers
                );
              }}
            >
              <Lottie isClickToPauseDisabled={true} options={defaultOptions} />
            </button>
          </div>
        )}

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
