"use client";

import cls from "./style.module.scss";
import { useMedia } from "@/shared/hooks/useMedia";
import { useSwiper } from "@/shared/hooks/useSwiper";
import { useRef } from "react";
import { A11y, Mousewheel } from "swiper";
import { PartnersItem } from "./PartnersItem";
import { GetPartnersQuery } from "@/graphql/__generated__";

interface PartnersProps {
  partners: GetPartnersQuery["ourPartners"]["data"];
}

const Partners = (props: PartnersProps) => {
  const { partners } = props;

  const isTablet = useMedia("(max-width: 991px)");
  const swiperRef = useRef<HTMLDivElement | null>(null);

  useSwiper({
    ref: isTablet.matches ? swiperRef : undefined,
    options: {
      modules: [A11y, Mousewheel],
      spaceBetween: 12,
      slidesPerView: "auto",
      autoHeight: false,
      speed: 800,
      mousewheel: {
        releaseOnEdges: true,
      },
    },
  });

  return (
    <section className={cls.partners}>
      <div className={`partners__container ${cls.container}`}>
        <div className={cls.header}>
          <h2>Наши партнёры</h2>

          <p>
            Растем вместе с нашими клиентами. <br />
            Соединяем нашу экспертизу с их бизнес-опытом для получения
            качественного результата.
          </p>
        </div>

        <div className={`swiper`} ref={swiperRef}>
          <div className={`partners__swiper swiper-wrapper ${cls.cards}`}>
            {partners.map((item, idx) => {
              const noFill = item.attributes.noFillImage.data.attributes;
              const fill = item.attributes.fillImage?.data?.attributes;

              return <PartnersItem key={idx} noFill={noFill} fill={fill} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Partners };
