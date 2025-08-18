"use client";

import { GetHomePartnersFragment } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import Image from "next/image";

import cls from "./style.module.scss";
import { useMedia } from "@/shared/hooks/useMedia";
import { useSwiper } from "@/shared/hooks/useSwiper";
import { useRef } from "react";
import { A11y, Mousewheel } from "swiper";
import { motion } from "framer-motion";

interface PartnersProps {
  partners: GetHomePartnersFragment;
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
          <h2>{partners.title}</h2>

          <p>
            Рука в руку к креативным вершинам. <br /> Наши партнёры дополняют
            нашу страсть к дизайну
          </p>
        </div>

        <div className={`swiper`} ref={swiperRef}>
          <div className={`partners__swiper swiper-wrapper ${cls.cards}`}>
            {partners.our_partners.data.map((item, idx) => {
              const noFill = item.attributes.noFillImage.data.attributes;
              const fill = item.attributes.fillImage?.data?.attributes;

              return (
                <div
                  key={idx}
                  className={`partners__slide swiper-slide ${cls.card}`}
                >
                  <motion.div
                    className={cls.imageWrapper}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    {/* noFill */}
                    <motion.div
                      className={cls.imageInner}
                      variants={{
                        rest: { opacity: 1, scale: 1 },
                        hover: { opacity: 0, scale: 1.08 },
                      }}
                      transition={{ ease: "easeOut", duration: 0.3 }}
                    >
                      <Image
                        width={noFill.width}
                        height={noFill.height}
                        alt=""
                        src={getFileUrl(noFill.url)}
                        className={cls.image}
                      />
                    </motion.div>

                    {/* fill */}
                    {fill && (
                      <motion.div
                        className={cls.imageInner}
                        variants={{
                          rest: { opacity: 0, scale: 1 },
                          hover: { opacity: 1, scale: 1.08 },
                        }}
                        transition={{ ease: "easeOut", duration: 0.3 }}
                      >
                        <Image
                          width={fill.width}
                          height={fill.height}
                          alt=""
                          src={getFileUrl(fill.url)}
                          className={cls.image}
                        />
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Partners };
