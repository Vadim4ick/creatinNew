/* eslint-disable react-hooks/rules-of-hooks */
import { ComplexBlockFragment } from "@/graphql/__generated__";
import { getRouteComplex } from "@/shared/const/pages";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { priceFormatter } from "@/shared/helpers/priceFormatter";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useLayoutEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

const PromotionOffer = ({
  offers,
}: {
  offers: readonly ComplexBlockFragment[];
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeIndexRow, setActiveIndexRow] = useState<number | null>(null);

  const promotionRefs = offers.map(() => useRef<HTMLDivElement | null>(null));

  useLayoutEffect(() => {
    const calculateWidth = (item: any, index: number): number => {
      if (item.classList.contains("_active")) {
        const nextItem = item[index + 1];
        const prevItem = item[index - 1];
        return nextItem
          ? nextItem.offsetWidth
          : prevItem
          ? prevItem.offsetWidth
          : item.offsetWidth;
      }
      return item.offsetWidth;
    };

    const updateWidths = () => {
      promotionRefs?.forEach((promotionRef) => {
        if (promotionRef.current) {
          const items = Array.from(
            promotionRef.current.querySelectorAll(".js-promotion-item")
          );

          items.forEach((item, index) => {
            const width = calculateWidth(item, index);
            item.setAttribute("style", `--width: ${width}px`);
          });
        }
      });
    };

    updateWidths();

    window.addEventListener("resize", updateWidths);

    return () => {
      window.removeEventListener("resize", updateWidths);
    };
  }, []);

  const handleButtonClick = (index: number, idxRow: number) => {
    setActiveIndex(index);
    setActiveIndexRow(idxRow);
  };

  return (
    <section className="promotion">
      {offers.map((el, i) => (
        <Fragment key={el.id}>
          <h2 className="promotion__title">{el.name}</h2>

          <div ref={promotionRefs[i]} className="promotion__row js-promotion">
            {el.offers.data.map((offer, offerI) => (
              <div
                key={offer.id}
                className={`promotion__column js-promotion-item ${
                  activeIndexRow === i && offerI === activeIndex
                    ? "_active"
                    : ""
                }`}
              >
                <div className="promotion__base">
                  <div className="promotion__image">
                    <Image
                      alt=""
                      width={offer.attributes.offer.img.data.attributes.width}
                      height={offer.attributes.offer.img.data.attributes.height}
                      src={getFileUrl(
                        offer.attributes.offer.img.data.attributes.url
                      )}
                    />
                  </div>
                  <div className="promotion__base-content">
                    <div className="promotion__price">
                      <span className="_rub">
                        {`${priceFormatter(offer.attributes.offer.price)} `}
                      </span>
                    </div>
                    <div className="promotion__info">
                      {offer.attributes.offer.info}
                    </div>
                    <div className="promotion__tag">
                      {offer.attributes.offer.tag}
                    </div>
                    <div className="promotion__bottom">
                      {offer.attributes.offer.number}
                    </div>
                  </div>

                  <div className="promotion__btns">
                    <button
                      onClick={() => handleButtonClick(offerI, i)}
                      type="button"
                      className="promotion__btn btn btn--whte js-promotion-open"
                    >
                      <span className="btn__text">Развернуть</span>
                    </button>

                    <Link
                      href={getRouteComplex(offer.id)}
                      className="promotion__btn btn "
                    >
                      <span className="btn__text">Подробнее</span>
                    </Link>
                  </div>
                </div>
                <div className="promotion__more">
                  <div className="promotion__bottom">
                    {offer.attributes.offer.number}
                  </div>
                  <div className="promotion__about">
                    {offer.attributes.offer.about}
                  </div>
                  <div className="promotion__list-title">
                    {offer.attributes.offer.titleList}
                  </div>
                  <ul className="promotion__list">
                    <ReactMarkdown
                      skipHtml
                      components={{
                        li: ({ children }) => {
                          return (
                            <li className="promotion__list-item">{children}</li>
                          );
                        },
                      }}
                    >
                      {offer.attributes.offer.list}
                    </ReactMarkdown>
                  </ul>
                  <div className="promotion__more-price">
                    <span className="_rub">
                      {`${priceFormatter(offer.attributes.offer.price)} `}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fragment>
      ))}
    </section>
  );
};

export { PromotionOffer };
