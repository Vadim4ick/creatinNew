"use client";

import { useGetServicesNames } from "@/shared/services/servicesName";
import cls from "./style.module.scss";
import { useMemo, useRef, useState } from "react";
import { useSwiper } from "@/shared/hooks/useSwiper";
import Swiper, { A11y, Mousewheel, SwiperOptions } from "swiper";
import { Arrow } from "@/shared/icons/Arrow";
import { useMedia } from "@/shared/hooks/useMedia";
import { ServicesSlide } from "./ServicesSlide/ServicesSlide";
import { motion } from "framer-motion";
import { springTransition } from "@/shared/lib";
import { ButtonDetails } from "@/shared/ui/ButtonDetails";
import { BtnArrowThird } from "@/shared/icons/BtnArrowThird";
import { useRouter } from "next/navigation";

const flipVariants = {
  prev: { scaleX: 1 },
  next: { scaleX: -1 },
} as const;

type Dir = "prev" | "next";

const ServicesBlock = () => {
  const { data } = useGetServicesNames();
  const isDesktop1200 = useMedia("(max-width: 1200px)");

  const ref = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<Swiper | null>(null);

  const router = useRouter();

  // направление, в которое поедем по клику и как крутить стрелку
  const [dir, setDir] = useState<Dir>("next");

  const options = useMemo<SwiperOptions>(
    () => ({
      modules: [A11y, Mousewheel],
      direction: "horizontal",
      spaceBetween: 16,
      speed: 450,
      mousewheel: { releaseOnEdges: true },
      on: {
        init(swiper) {
          swiperRef.current = swiper;
          // синхронизация при старте
          setDir(swiper.isBeginning ? "next" : "prev");
        },
        // если пользователь листает колёсиком/тачем — держим направление в актуальном виде
        reachBeginning() {
          setDir("next");
        },
        reachEnd() {
          setDir("prev");
        },
      },
    }),
    []
  );

  useSwiper({
    ref: !isDesktop1200.matches ? ref : undefined,
    options,
  });

  const onClick = () => {
    const s = swiperRef.current;
    if (!s || s.animating) return;

    // если упёрлись в край — разворачиваемся СЕЙЧАС (флип начнётся одновременно с движением)
    let targetDir: Dir = dir;
    if (s.isEnd && dir === "next") targetDir = "prev";
    if (s.isBeginning && dir === "prev") targetDir = "next";

    setDir(targetDir); // ← запускаем анимацию флипа прямо сейчас

    if (targetDir === "next") s.slideNext();
    else s.slidePrev();
  };

  return (
    <section className={cls.servicesBlock}>
      <div className={"services__container"}>
        <div className={cls.servicesHeader}>
          <h2>Креативные решения для вашего бизнеса</h2>

          <div className={cls.description}>
            <ButtonDetails
              Icon={() => <BtnArrowThird />}
              onClick={() => router.push("/services/1")}
            />
            <p>
              Мы создаем дизайн, который не только привлекает внимание, но и
              решает бизнес-задачи. В каждом проекте мы делаем акцент на
              индивидуальности бренда, чтобы подчеркнуть его уникальные черты.
            </p>
          </div>
        </div>

        <div className={cls.sliderBtn}>
          <button
            onClick={onClick}
            aria-label={dir === "next" ? "Вперёд" : "Назад"}
          >
            <motion.span
              variants={flipVariants}
              animate={dir}
              transition={springTransition}
              style={{ display: "inline-flex", transformOrigin: "50% 50%" }}
            >
              <Arrow />
            </motion.span>
          </button>
        </div>
      </div>

      <div ref={ref} className={`swiper ${cls.slider}`}>
        <div className="swiper-wrapper">
          {data?.serviceNames.data.map((item) => (
            <ServicesSlide key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { ServicesBlock };
