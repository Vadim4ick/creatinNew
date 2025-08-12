"use client";

import { useGetServicesNames } from "@/shared/services/servicesName";
import cls from "./style.module.scss";
import { useRef } from "react";
import { useSwiper } from "@/shared/hooks/useSwiper";
import { A11y, Mousewheel } from "swiper";
import { ServicesSlide } from "./ServicesSlide";

const ServicesBlock = () => {
  const { data } = useGetServicesNames();

  const ref = useRef<HTMLDivElement | null>(null);

  useSwiper({
    ref: ref,
    options: {
      modules: [A11y, Mousewheel],
      direction: "horizontal",
      spaceBetween: 16,
      speed: 800,
      mousewheel: {
        releaseOnEdges: true,
      },
    },
  });

  return (
    <section className={cls.servicesBlock}>
      <div className={cls.container}>
        <div ref={ref} className={`swiper ${cls.slider}`}>
          <div className="swiper-wrapper">
            {data?.serviceNames.data.map((item) => {
              return <ServicesSlide key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { ServicesBlock };
