"use client";

import { useGetServicesNames } from "@/shared/services/servicesName";
import cls from "./style.module.scss";
import { useRef } from "react";
import { useSwiper } from "@/shared/hooks/useSwiper";
import { A11y, Mousewheel, Navigation } from "swiper";
import { ServicesSlide } from "./ServicesSlide";
import { MoreBtn } from "./MoreBtn/MoreBtn";
import { Arrow } from "@/shared/icons/Arrow";

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
      <div className={"services__container"}>
        <div className={cls.servicesHeader}>
          <h2>Креативные решения для вашего бизнеса</h2>

          <div className={cls.description}>
            <MoreBtn />

            <p>
              Мы создаем дизайн, который не только привлекает внимание, но и
              решает бизнес-задачи. В каждом проекте мы делаем акцент на
              индивидуальности бренда, чтобы подчеркнуть его уникальные черты.
            </p>
          </div>
        </div>

        <div className={cls.sliderBtn}>
          <button id="next">
            <Arrow style={{ transform: "rotate(180deg)" }} />
          </button>
        </div>
      </div>

      <div ref={ref} className={`swiper ${cls.slider}`}>
        <div className="swiper-wrapper">
          {data?.serviceNames.data.map((item) => {
            return <ServicesSlide key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export { ServicesBlock };
