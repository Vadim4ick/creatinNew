"use client";

import { useGetServicesNames } from "@/shared/services/servicesName";
import cls from "./style.module.scss";
import { useRef } from "react";
import { useSwiper } from "@/shared/hooks/useSwiper";
import Swiper, { A11y, Mousewheel } from "swiper";
import { MoreBtn } from "./MoreBtn/MoreBtn";
import { Arrow } from "@/shared/icons/Arrow";
import { useMedia } from "@/shared/hooks/useMedia";
import { ServicesSlide } from "./ServicesSlide/ServicesSlide";

const ServicesBlock = () => {
  const { data } = useGetServicesNames();

  const isDesktop1200 = useMedia("(max-width: 1200px)");

  const ref = useRef<HTMLDivElement | null>(null);

  const swiperRef = useRef<Swiper | null>(null);

  useSwiper({
    ref: !isDesktop1200.matches ? ref : undefined,
    options: {
      modules: [A11y, Mousewheel],
      direction: "horizontal",
      spaceBetween: 16,
      speed: 800,

      mousewheel: {
        releaseOnEdges: true,
      },

      on: {
        init(swiper) {
          swiperRef.current = swiper;
        },
      },
    },
  });

  const onClickNext = () => {
    const s = swiperRef.current;
    if (!s || s.animating) return;
    // нормальный вызов next (можно оставить slideNext)
    s.slideTo(s.activeIndex + 1, s.params.speed);
  };

  const onClickPrev = () => {
    const s = swiperRef.current;
    if (!s || s.animating) return;
    // вместо slidePrev — по индексу, чтобы была анимация
    s.slideTo(Math.max(s.activeIndex - 1, 0), s.params.speed);
  };

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
          <button onClick={onClickPrev}>
            <Arrow style={{ transform: "rotate(180deg)" }} />
          </button>
          <button onClick={onClickNext}>
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
