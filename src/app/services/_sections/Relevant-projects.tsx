"use client";

import { SplitTypeAnimation } from "@/shared/hooks/useSplitTypeAnimation";
import { useSwiper } from "@/shared/hooks/useSwiper";
import { useRef } from "react";
import { A11y } from "swiper";

const RelevantProjects = () => {
  const projectsSeiperRef = useRef<HTMLDivElement | null>(null);

  const titleRef = useRef<HTMLDivElement | null>(null);

  //   useEffect(() => {
  //     const swiperRef = projectsSeiperRef.current;
  //     if (!swiperRef) return;

  //     const slides = swiperRef.querySelectorAll(".swiper-slide");
  //     const wrapper = swiperRef.querySelector(".swiper-wrapper");

  //     if (slides.length < 10 && wrapper) {
  //       const clones = Array.from(slides)
  //         .map((slide) => slide.cloneNode(true))
  //         .filter(() => swiperRef.querySelectorAll(".swiper-slide").length < 20);

  //       clones.forEach((clone) => wrapper.appendChild(clone));
  //     }
  //   }, []);

  useSwiper({
    ref: projectsSeiperRef,

    options: {
      modules: [A11y],
      slideToClickedSlide: true,
      loop: true,
      autoHeight: false,
      speed: 1200,

      //   on: {
      //     slideChange: function () {
      //       // if(this.activeIndexChange)
      //       //   console.log(this.activeIndex);
      //       //   console.log(projectsSeiperRef.current);

      //       if (projectsSeiperRef.current) {
      //         const swiper =
      //           projectsSeiperRef.current.querySelector(".swiper-wrapper");

      //         if (swiper) {
      //           console.log(swiper.children.length);
      //           console.log(this.activeIndex);
      //         }
      //       }
      //     },
      //   },

      breakpoints: {
        320: {
          slidesPerView: 1.05,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    },
  });

  return (
    <section className="relevant">
      {/* <div className="relevant__title" data-observe>
        Релевантные проекты
      </div> */}

      <SplitTypeAnimation refChar={titleRef} bg="#aaaaaa" fg="#181818">
        <div ref={titleRef} className="relevant__title" data-observe>
          Релевантные проекты
        </div>
      </SplitTypeAnimation>

      <div
        ref={projectsSeiperRef}
        className="relevant__slider swiper js-relevant-slider"
      >
        <div className="relevant__swiper swiper-wrapper">
          <div className="relevant__slide swiper-slide">
            <div className="relevant__inner">
              <div className="relevant__slide-image">
                <img src="/img/relevant/01.png" alt="" />
              </div>

              <div className="relevant__bottom">
                <div className="relevant__name">загород</div>
                <div className="relevant__info">
                  это стабильно развивающаяся строительная компания
                  на юге страны
                </div>
                <a className="relevant__btn" title="Посмотреть проект">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.2529 4.66889L15.4858 10.8052C14.9859 10.9878 14.5079 11.236 14.0573 11.5444L12.2806 2.69666L14.2529 4.66889ZM3.09641 11.8809L3.09371 11.8945L5.04586 13.8467L11.2001 15.0909C11.3818 14.5921 11.6289 14.1153 11.9361 13.6659L3.09641 11.8809ZM12.9681 12.5766C13.2086 12.3361 13.4491 12.1099 13.695 11.8892L2.38126 0.575454L0.967049 1.98967L12.2808 13.3034C12.5015 13.0575 12.7277 12.817 12.9681 12.5766Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="relevant__slide swiper-slide">
            <div className="relevant__inner">
              <div className="relevant__slide-image">
                <img src="/img/relevant/02.png" alt="" />
              </div>

              <div className="relevant__bottom">
                <div className="relevant__name">marry</div>
                <div className="relevant__info">
                  это стабильно развивающаяся строительная компания
                  на юге страны
                </div>
                <a className="relevant__btn" title="Посмотреть проект">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.2529 4.66889L15.4858 10.8052C14.9859 10.9878 14.5079 11.236 14.0573 11.5444L12.2806 2.69666L14.2529 4.66889ZM3.09641 11.8809L3.09371 11.8945L5.04586 13.8467L11.2001 15.0909C11.3818 14.5921 11.6289 14.1153 11.9361 13.6659L3.09641 11.8809ZM12.9681 12.5766C13.2086 12.3361 13.4491 12.1099 13.695 11.8892L2.38126 0.575454L0.967049 1.98967L12.2808 13.3034C12.5015 13.0575 12.7277 12.817 12.9681 12.5766Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="relevant__slide swiper-slide">
            <div className="relevant__inner">
              <div className="relevant__slide-image">
                <img src="/img/relevant/01.png" alt="" />
              </div>

              <div className="relevant__bottom">
                <div className="relevant__name">загород</div>
                <div className="relevant__info">
                  это стабильно развивающаяся строительная компания
                  на юге страны
                </div>
                <a className="relevant__btn" title="Посмотреть проект">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.2529 4.66889L15.4858 10.8052C14.9859 10.9878 14.5079 11.236 14.0573 11.5444L12.2806 2.69666L14.2529 4.66889ZM3.09641 11.8809L3.09371 11.8945L5.04586 13.8467L11.2001 15.0909C11.3818 14.5921 11.6289 14.1153 11.9361 13.6659L3.09641 11.8809ZM12.9681 12.5766C13.2086 12.3361 13.4491 12.1099 13.695 11.8892L2.38126 0.575454L0.967049 1.98967L12.2808 13.3034C12.5015 13.0575 12.7277 12.817 12.9681 12.5766Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="relevant__slide swiper-slide">
            <div className="relevant__inner">
              <div className="relevant__slide-image">
                <img src="/img/relevant/01.png" alt="" />
              </div>

              <div className="relevant__bottom">
                <div className="relevant__name">загород</div>
                <div className="relevant__info">
                  это стабильно развивающаяся строительная компания
                  на юге страны
                </div>
                <a className="relevant__btn" title="Посмотреть проект">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.2529 4.66889L15.4858 10.8052C14.9859 10.9878 14.5079 11.236 14.0573 11.5444L12.2806 2.69666L14.2529 4.66889ZM3.09641 11.8809L3.09371 11.8945L5.04586 13.8467L11.2001 15.0909C11.3818 14.5921 11.6289 14.1153 11.9361 13.6659L3.09641 11.8809ZM12.9681 12.5766C13.2086 12.3361 13.4491 12.1099 13.695 11.8892L2.38126 0.575454L0.967049 1.98967L12.2808 13.3034C12.5015 13.0575 12.7277 12.817 12.9681 12.5766Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { RelevantProjects };
