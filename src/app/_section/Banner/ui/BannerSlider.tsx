import { memo, useEffect, useMemo, useRef, useState } from "react";

import { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import type { SwiperOptions } from "swiper/types";

import styles from "./style.module.scss";
import { useSwiper } from "@/shared/hooks/useSwiper";
import { Arrow } from "@/shared/icons/Arrow";
import { classNames } from "@/shared/lib";
import { SearchInp } from "../../Search";
import { useMedia } from "@/shared/hooks/useMedia";
import { useGetSearchLinks } from "@/shared/services/useGetSearchLinks";
import { useRouter } from "next/navigation";
import { GetHomePageQuery } from "@/graphql/__generated__";
import Image from "next/image";
import Link from "next/link";

type Props = {
  slides: GetHomePageQuery["homePage"]["data"]["attributes"]["banera_dlya_glavnoj_straniczies"]["data"];
  className?: string;
};

export const BannerSlider = memo(({ slides, className = "" }: Props) => {
  const { data } = useGetSearchLinks();

  const ref = useRef<HTMLDivElement>(null);

  const isDesktop = useMedia("(max-width: 992px)");
  const [activeIndex, setActiveIndex] = useState(0);

  const [isSwiperCssReady, setIsSwiperCssReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const wrapper = el.querySelector<HTMLElement>(".swiper-wrapper");
    if (!wrapper) return;

    let raf1 = 0;
    let raf2 = 0;

    const check = () => {
      const display = window.getComputedStyle(wrapper).display;
      if (display === "flex") {
        setIsSwiperCssReady(true);
        return;
      }
      // пробуем ещё чуть-чуть (без таймера, только кадры)
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(check);
      });
    };

    check();

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);

  const links = useMemo(() => {
    const rows = data?.searchLinks?.data ?? [];
    return rows.map((row) => {
      const a = row.attributes;
      return {
        title: a.title ?? undefined,
        url: a.url ?? "/",
        keywords: Array.isArray(a.keywords) ? a.keywords : [],
        isPopular: a.isPopular,
      };
    });
  }, [data]);

  const popularLinks = useMemo(() => {
    const rows = data?.searchLinks?.data ?? [];
    return rows
      .map((row) => {
        const a = row.attributes;
        return {
          title: a.title ?? undefined,
          url: a.url ?? "/",
          keywords: Array.isArray(a.keywords) ? a.keywords : [],
          isPopular: a.isPopular,
        };
      })
      .filter((link) => Boolean(link.isPopular));
  }, [data]);

  const options = useMemo<SwiperOptions>(
    () => ({
      modules: [Navigation, Pagination, EffectFade, Autoplay],
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 800,
      loop: true,
      loopedSlides: slides.length > 5 ? 5 : slides.length,
      effect: "fade",
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
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
      on: {
        slideChange(swiper) {
          setActiveIndex(swiper.realIndex); // realIndex важен при loop
        },
      },
      observer: true,
      observeParents: true,
    }),
    [isDesktop.matches, slides.length],
  );

  useSwiper({ ref: ref as any, options });

  const router = useRouter();

  return (
    <section className={classNames(styles.hero, {}, [className])}>
      {!isSwiperCssReady && (
        <div className={styles.sliderPreloader} aria-hidden="true">
          <div className={styles.spinner} />
        </div>
      )}

      <div ref={ref} className={classNames(`swiper ${styles.swiper}`, {}, [])}>
        <div className="swiper-wrapper">
          {slides.map((s, i) => {
            const desk = s.attributes.desktopMedia?.data?.attributes;
            const mob = s.attributes.mobileMedia?.data?.attributes;

            const urlDesk = desk?.url;
            const mimeDesk = desk?.mime;
            const urlMob = mob?.url || urlDesk; // fallback
            const mimeMob = mob?.mime || mimeDesk; // fallback

            return (
              <div
                key={i}
                className={classNames(
                  `swiper-slide ${styles.slide}`,
                  {
                    // [styles.swiperNotReady]: !isSwiperCssReady,
                  },
                  [],
                )}
              >
                {mimeDesk.startsWith("image/") ||
                mimeMob.startsWith("image/") ? (
                  <picture>
                    <source media="(max-width: 768px)" srcSet={urlMob} />
                    <source media="(min-width: 769px)" srcSet={urlDesk} />
                    <Image fill src={urlDesk} alt="" className={styles.bg} />
                  </picture>
                ) : mimeDesk.startsWith("video/") ||
                  mimeMob.startsWith("video/") ? (
                  <video
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    className={styles.bg}
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source
                      media="(max-width: 768px)"
                      src={urlMob}
                      type={mimeMob}
                    />
                    <source
                      media="(min-width: 769px)"
                      src={urlDesk}
                      type={mimeDesk}
                    />
                  </video>
                ) : null}

                {/* {!s.attributes.keywords && (
                  <div className={styles.tags}>
                    <div className={styles.container}>
                      <div className={styles.content}>
                        <button>Позиционирование</button>
                        <button>Фирменный стиль</button>
                        <button>SMM-book</button>
                        <button>AD-book</button>
                        <button>Брендинг</button>
                        <button>Брендбук</button>
                      </div>
                    </div>
                  </div>
                )} */}
              </div>
            );
          })}
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

      {slides[activeIndex] &&
        slides[activeIndex].attributes.keywords &&
        slides[activeIndex].attributes.keywords?.length > 0 && (
          <div className={styles.tags}>
            <div className={styles.container}>
              <div className={styles.content}>
                {slides[activeIndex].attributes.keywords.map(
                  (k: string, i: number) => (
                    <button key={i}>
                      <Link
                        target={
                          slides[activeIndex].attributes.link
                            ? "_blank"
                            : "_self"
                        }
                        href={
                          slides[activeIndex].attributes.link
                            ? `/${slides[activeIndex].attributes.link}`
                            : `#!`
                        }
                      >
                        {k}
                      </Link>
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        )}

      <div className={styles.overlay}>
        <div className={styles.overlayInner}>
          <SearchInp
            onNavigate={(url) => {
              router.push(`${process.env.NEXT_PUBLIC_FRONT_URL}${url}`);
            }}
            links={links}
            popularLinks={popularLinks}
          />
        </div>
      </div>
    </section>
  );
});
