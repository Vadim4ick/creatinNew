import { useEffect, RefObject } from "react";
import Swiper from "swiper";
import { SwiperOptions } from "swiper/types/swiper-options";

function useSwiper({
  ref,
  options,
}: {
  ref: RefObject<HTMLElement>;
  options: SwiperOptions;
}) {
  useEffect(() => {
    if (ref.current) {
      const swiperOptions: SwiperOptions = {
        observer: true,
        observeParents: true,
        slidesPerView: "auto",
        ...options,
      };

      const introCardsSlider = new Swiper(ref.current, swiperOptions);

      return () => {
        // Cleanup Swiper instance on component unmount
        introCardsSlider.destroy();
      };
    }
  }, [ref, options]);
}

export { useSwiper };
