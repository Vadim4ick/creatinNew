import { memo, useMemo, useRef } from "react";

import { Navigation, Pagination, EffectFade } from "swiper";
import type { SwiperOptions } from "swiper/types";

import styles from "./style.module.scss";
import { useSwiper } from "@/shared/hooks/useSwiper";
import { Arrow } from "@/shared/icons/Arrow";
import { classNames } from "@/shared/lib";
import { SearchInp } from "../../Search";
import Image from "next/image";
import { useMedia } from "@/shared/hooks/useMedia";

export type HeroSlide = {
  image: string;
  alt?: string;
};

type Props = {
  slides: HeroSlide[];
  className?: string;
  effect?: "fade" | "slide";
};

export const BannerSlider = memo(
  ({ slides, className = "", effect = "slide" }: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    const isDesktop = useMedia("(max-width: 992px)");

    const options = useMemo<SwiperOptions>(
      () => ({
        modules: [Navigation, Pagination, EffectFade],
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 600,
        // effect: "fade",
        allowTouchMove: isDesktop.matches,
        navigation: {
          prevEl: `.${styles.navPrev}`,
          nextEl: `.${styles.navNext}`,
        },
        pagination: {
          el: `.${styles.pagination}`,
          clickable: true,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.bulletActive,
          renderBullet: (index, className) =>
            `<span class="${className}" aria-label="Перейти к слайду ${
              index + 1
            }"></span>`,
        },
        observer: true,
        observeParents: true,
      }),
      [isDesktop.matches]
    );

    useSwiper({ ref: ref as any, options });

    return (
      <section className={classNames(styles.hero, {}, [className])}>
        <div ref={ref} className={`swiper ${styles.swiper}`}>
          <div className="swiper-wrapper">
            {slides.map((s, i) => (
              <div key={i} className={`swiper-slide ${styles.slide}`}>
                <Image src={s.image} alt="" fill className={styles.bg} />

                <div className={styles.overlay}>
                  <div className={styles.overlayInner}>
                    <SearchInp
                      onNavigate={(url, kw) => {
                        console.log("go to:", url, "by keyword:", kw);
                        // router.push(url)
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Навигация */}
          <button className={styles.navPrev} aria-label="Предыдущий слайд">
            <Arrow />
          </button>

          <button className={styles.navNext} aria-label="Следующий слайд">
            <Arrow />
          </button>

          {/* Пагинация */}
          <div className={styles.paginationWrap}>
            <div className={styles.pagination} />
          </div>
        </div>
      </section>
    );
  }
);
