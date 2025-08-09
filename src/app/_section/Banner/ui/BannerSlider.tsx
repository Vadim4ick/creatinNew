import { memo, useMemo, useRef } from "react";

import { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import type { SwiperOptions } from "swiper/types";

import styles from "./style.module.scss";
import { useSwiper } from "@/shared/hooks/useSwiper";
import { Arrow } from "@/shared/icons/Arrow";
import { classNames } from "@/shared/lib";
import { SearchInp } from "../../Search";
import Image from "next/image";
import { useMedia } from "@/shared/hooks/useMedia";
import { useGetSearchLinks } from "@/shared/services/useGetSearchLinks";
import { useRouter } from "next/navigation";
import { GetHomePageQuery } from "@/graphql/__generated__";
import { ImagePreloader } from "@/shared/ui/ImagePreloader";

type Props = {
  slides: GetHomePageQuery["homePage"]["data"]["attributes"]["bannerMedia"]["data"];
  className?: string;
};

export const BannerSlider = memo(({ slides, className = "" }: Props) => {
  const { data } = useGetSearchLinks();

  const ref = useRef<HTMLDivElement>(null);

  const isDesktop = useMedia("(max-width: 992px)");

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
      observer: true,
      observeParents: true,
    }),
    [isDesktop.matches]
  );

  useSwiper({ ref: ref as any, options });

  const router = useRouter();

  return (
    <section className={classNames(styles.hero, {}, [className])}>
      <div ref={ref} className={`swiper ${styles.swiper}`}>
        <div className="swiper-wrapper">
          {slides.map((s, i) => (
            <div key={i} className={`swiper-slide ${styles.slide}`}>
              {/* <Image src={s.attributes.url} alt="" fill className={styles.bg} /> */}

              <ImagePreloader
                src={s.attributes.url}
                alt=""
                className={styles.bg}
                fill={true}
              />
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
