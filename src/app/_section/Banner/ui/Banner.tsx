"use client";

import cls from "./Banner.module.scss";
import React, {
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMedia } from "@/shared/hooks/useMedia";
import { useRouter } from "next/navigation";
import { PopupProviderContext } from "@/shared/providers/popupProvider";
import { Loader } from "@/shared/ui/Loader/Loader";
import { GetHomeBannerFragment } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";

// const bannerContent = [
//   {
//     one: {
//       video: "/videos/desktop/Issled.mp4",
//       videoMobil: "/videos/mobil/Issled.mp4",

//       content: {
//         title: "Предпроектные исследования",
//         description:
//           "Качественные и количественные исследования для всех типов продуктов",
//       },

//       link: "/services/1",
//     },

//     three: {
//       title: "Cоздание фирменного стиля компании",

//       blocks: [
//         {
//           title: "срок реализации",
//           price: "20",
//           total: "рабочих дней",
//         },
//         {
//           title: "cтоимость от:",
//           price: "180 000",
//           total: "рублей",
//         },
//       ],
//     },
//   },
//   {
//     one: {
//       video: "/videos/desktop/Brending.mp4",
//       videoMobil: "/videos/mobil/Brending.mp4",
//       content: {
//         title: "Брендинг",
//         description:
//           "Формирование уникальной бренд-идентичности, чтобы установить прочное и запоминающееся впечатление у потребителей",
//       },

//       link: "/services/2",
//     },

//     three: {
//       title: "руководство по использованию фирменного стиля",

//       blocks: [
//         {
//           title: "срок реализации:",
//           price: "30",
//           total: "рабочих дней",
//         },
//         {
//           title: "cтоимость от:",
//           price: "350 000",
//           total: "рублей",
//         },
//       ],
//     },
//   },
//   {
//     one: {
//       video: "/videos/desktop/Design.mp4",
//       videoMobil: "/videos/mobil/Design.mp4",
//       content: {
//         title: "Графический дизайн",
//         description:
//           "Визуальное воплощение и профессиональное исполнение ваших идей",
//       },
//       link: "/services/3",
//     },

//     three: {
//       title: "Разработка бизнес плана",

//       blocks: [
//         {
//           title: "срок реализации:",
//           price: "50",
//           total: "рабочих дней",
//         },
//         {
//           title: "cтоимость от:",
//           price: "240 000",
//           total: "рублей",
//         },
//       ],
//     },
//   },
//   {
//     one: {
//       video: "/videos/desktop/WEB.mp4",
//       videoMobil: "/videos/mobil/WEB.mp4",
//       content: {
//         title: "Web-разработка",
//         description: "Создаем уникальные веб-проекты  для вашего бизнеса",
//       },
//       link: "/services/6",
//     },

//     three: {
//       title: "Рекламный лендинг",

//       blocks: [
//         {
//           title: "срок реализации:",
//           price: "30",
//           total: "рабочих дней",
//         },
//         {
//           title: "cтоимость от:",
//           price: "150 000",
//           total: "рублей",
//         },
//       ],
//     },
//   },
//   {
//     one: {
//       video: "/videos/desktop/Mobil.mp4",
//       videoMobil: "/videos/mobil/Mobil.mp4",
//       content: {
//         title: "Мобильные приложения",
//         description: "Инновационные решения для современного бизнеса",
//       },

//       link: "/services/7",
//     },

//     three: {
//       title: "Создание motion-ролика",

//       blocks: [
//         {
//           title: "срок реализации:",
//           price: "10",
//           total: "рабочих дней",
//         },
//         {
//           title: "cтоимость от:",
//           price: "15 000",
//           total: "рублей",
//         },
//       ],
//     },
//   },
// ];

// const metrics = [
//   {
//     title: "Реализованных проектов",
//     img: "/img/baner/100@2x.png",
//   },
//   {
//     title: "проведенных исследований",
//     img: "/img/baner/50@2x.png",
//   },
//   {
//     title: "долгосрочных партнеров",
//     img: "/img/baner/15@2x.png",
//   },
//   {
//     title: "лет на диджитал рынке",
//     img: "/img/baner/5+@2x.png",
//   },
//   {
//     title: "международные награды",
//     img: "/img/baner/3@2x.png",
//   },
//   {
//     title: "доверия",
//     img: "/img/baner/percent100@2x.png",
//   },
//   {
//     title: "высококласных специалистов",
//     img: "/img/baner/50@2x.png",
//   },
// ];

gsap.registerPlugin(useGSAP);

const TIME_ANIMATION = 5.95;
const DELAY_ANIMATION = 4.5;
const DURATION_ANIMATION = 1;

interface BannerProps {
  banner: GetHomeBannerFragment;
}

export function Banner(props: BannerProps) {
  const { banner } = props;

  // Создаем массив для хранения useRef
  const refs = useRef<{ current: HTMLDivElement }[] | []>([]);
  const refsTwoBlockText = useRef<{ current: HTMLDivElement }[] | []>([]);
  const refsTwoBlockImage = useRef<{ current: HTMLDivElement }[] | []>([]);
  const refsThreeBlockText = useRef<{ current: HTMLDivElement }[] | []>([]);
  const refsBlocksThreeBlock = useRef<{ current: HTMLDivElement }[] | []>([]);

  const refsBlocksThreeBlockMobile = useRef<{ current: HTMLDivElement }[] | []>(
    []
  );

  const [pageLoaded, setPageLoaded] = useState(true);

  const isMobile = useMedia("(max-width: 600px)");

  const router = useRouter();

  useEffect(() => {
    refs.current = Array(banner.bannerContent.length)
      .fill(0)
      .map((_, i) => refs.current[i] || createRef());

    refsTwoBlockText.current = Array(banner.bannerMetrics.length)
      .fill(0)
      .map((_, i) => refsTwoBlockText.current[i] || createRef());

    refsTwoBlockImage.current = Array(banner.bannerMetrics.length)
      .fill(0)
      .map((_, i) => refsTwoBlockImage.current[i] || createRef());

    refsThreeBlockText.current = Array(banner.bannerBottomBlocks.length)
      .fill(0)
      .map((_, i) => refsThreeBlockText.current[i] || createRef());

    refsBlocksThreeBlock.current = Array(banner.bannerBottomBlocks.length)
      .fill(0)
      .map((_, i) => refsBlocksThreeBlock.current[i] || createRef());

    refsBlocksThreeBlockMobile.current = Array(banner.bannerBottomBlocks.length)
      .fill(0)
      .map((_, i) => refsBlocksThreeBlockMobile.current[i] || createRef());

    setPageLoaded(false);
  }, []);

  function animate() {
    if (refs.current.length > 0) {
      banner.bannerContent.map((_, i) => {
        if (refs.current[i] && refs.current[i].current) {
          // One block
          gsap.fromTo(
            refs.current[i].current,
            {
              scale: 0.75,
              y: "100%",
            },
            {
              onStart: function () {
                // Обнуляем видео перед началом анимации
                const video = refs.current[i].current?.querySelector("video");

                if (video) {
                  video.currentTime = 0;

                  video.play();
                }
              },
              y: `0%`,
              scale: 1,
              delay: i * TIME_ANIMATION,
              duration: DURATION_ANIMATION,
              ease: "power1.out",
              onComplete: function () {
                gsap.to(refs.current[i].current, {
                  y: "-100%",
                  delay: DELAY_ANIMATION,
                  duration: DURATION_ANIMATION,
                  ease: "power1.in",

                  onComplete: function () {
                    if (i === refs.current.length - 1) {
                      // если это последний блок
                      // перемещаем предыдущие блоки обратно вниз
                      for (let j = 0; j < i; j++) {
                        gsap.to(refs.current[j].current, {
                          y: "0%",
                          duration: 0,

                          onComplete: function () {
                            if (j === i - 1) {
                              // если это последний блок, который был перемещен вниз
                              // запускаем анимацию снова
                              animate();
                            }
                          },
                        });
                      }
                    }
                  },
                });
              },
            }
          );
          // /One block
        }
      });
    }
  }

  function animateImageTwoBlock() {
    if (refsTwoBlockImage.current.length > 0) {
      banner.bannerMetrics.map((_, i) => {
        if (
          refsTwoBlockImage.current[i] &&
          refsTwoBlockImage.current[i].current
        ) {
          gsap.from(
            refsTwoBlockImage.current[i].current,

            {
              delay: i * TIME_ANIMATION,
              duration: DURATION_ANIMATION,
              zIndex: -1,
              ease: "power1.in",
              y: "170%",

              onComplete() {
                gsap.to(refsTwoBlockImage.current[i].current, {
                  y: "100%",
                  zIndex: 0,
                  delay: DELAY_ANIMATION,
                  duration: DURATION_ANIMATION,
                  ease: "power1.in",

                  onComplete: function () {
                    if (i === refsTwoBlockImage.current.length - 1) {
                      // если это последний блок
                      // перемещаем предыдущие блоки обратно вниз
                      for (let j = 0; j <= i; j++) {
                        gsap.to(refsTwoBlockImage.current[j].current, {
                          y: "0%",
                          x: "0%",
                          duration: 0,

                          onComplete: function () {
                            if (j === i) {
                              // если это последний блок, который был перемещен вниз
                              // запускаем анимацию снова
                              animateImageTwoBlock();
                            }
                          },
                        });
                      }
                    }
                  },
                });
              },
            }
          );
        }
      });
    }
  }

  function animateBlocksThreeBlock(
    refs: React.MutableRefObject<
      | []
      | {
          current: HTMLDivElement;
        }[]
    >
  ) {
    if (refs.current.length > 0) {
      banner.bannerBottomBlocks.map((_, i) => {
        if (refs.current[i] && refs.current[i].current) {
          gsap.from(
            refs.current[i].current,

            {
              y: isMobile.matches ? "0%" : "150%",
              x: isMobile.matches ? "150%" : "0",
              delay: i === 0 ? 0 : i * TIME_ANIMATION,
              duration: DURATION_ANIMATION,
              ease: "power1.out",

              onComplete() {
                gsap.to(refs.current[i].current, {
                  opacity: 0,
                  y: isMobile.matches ? "0%" : "-150%",
                  x: isMobile.matches ? "-150%" : "0%",
                  delay: DELAY_ANIMATION,
                  duration: DURATION_ANIMATION,
                  ease: "power1.in",

                  onComplete: function () {
                    if (i === refs.current.length - 1) {
                      // если это последний блок
                      // перемещаем предыдущие блоки обратно вниз
                      for (let j = 0; j <= i; j++) {
                        gsap.to(refs.current[j].current, {
                          y: "0%",
                          x: "0%",
                          opacity: 1,
                          duration: 0,

                          onComplete: function () {
                            if (j === i) {
                              // если это последний блок, который был перемещен вниз
                              // запускаем анимацию снова
                              animateBlocksThreeBlock(refs);
                            }
                          },
                        });
                      }
                    }
                  },
                });
              },
            }
          );
        }
      });
    }
  }

  function animateText<T>(
    refs: React.MutableRefObject<
      | []
      | {
          current: HTMLDivElement;
        }[]
    >,
    arr: readonly T[]
  ) {
    if (refs.current.length > 0) {
      arr.map((_, i) => {
        if (refs.current[i] && refs.current[i].current) {
          gsap.from(
            refs.current[i].current,

            {
              x: "-150%",
              zIndex: 0,
              delay: i === 0 ? 0 : i * TIME_ANIMATION,
              duration: DURATION_ANIMATION,
              ease: "power1.out",

              onComplete() {
                gsap.to(refs.current[i].current, {
                  opacity: 0,
                  y: "-150%",
                  delay: DELAY_ANIMATION,
                  duration: DURATION_ANIMATION,
                  ease: "power1.in",

                  onComplete: function () {
                    if (i === refs.current.length - 1) {
                      // если это последний блок
                      // перемещаем предыдущие блоки обратно вниз
                      for (let j = 0; j <= i; j++) {
                        gsap.to(refs.current[j].current, {
                          y: "0%",
                          x: "0%",
                          opacity: 1,
                          duration: 0,

                          onComplete: function () {
                            if (j === i) {
                              // если это последний блок, который был перемещен вниз
                              // запускаем анимацию снова
                              animateText(refs, arr);
                            }
                          },
                        });
                      }
                    }
                  },
                });
              },
            }
          );
        }
      });
    }
  }

  useGSAP(() => {
    animate();
    animateText(refsTwoBlockText, banner.bannerMetrics);
    animateImageTwoBlock();
    animateText(refsThreeBlockText, banner.bannerContent);
    animateBlocksThreeBlock(
      isMobile.matches ? refsBlocksThreeBlockMobile : refsBlocksThreeBlock
    );

    // refs.current.forEach((ref) => {
    //   gsap.killTweensOf(ref.current); // Отменить все анимации для данного элемента
    // });
    // refsTwoBlockText.current.forEach((ref) => {
    //   gsap.killTweensOf(ref.current); // Отменить все анимации для данного элемента
    // });
    // refsTwoBlockImage.current.forEach((ref) => {
    //   gsap.killTweensOf(ref.current); // Отменить все анимации для данного элемента
    // });
    // refsThreeBlockText.current.forEach((ref) => {
    //   gsap.killTweensOf(ref.current); // Отменить все анимации для данного элемента
    // });
    // refsBlocksThreeBlockMobile.current.forEach((ref) => {
    //   gsap.killTweensOf(ref.current); // Отменить все анимации для данного элемента
    // });

    // refs.current = [];
    // refsTwoBlockText.current = [];
    // refsTwoBlockImage.current = [];
    // refsThreeBlockText.current = [];
    // refsBlocksThreeBlockMobile.current = [];
  }, [refs.current]);

  const onClick = (str: string) => router.push(str);

  const { onClickPopup } = useContext(PopupProviderContext);

  const clickPopup = () => {
    onClickPopup();
  };

  if (pageLoaded) {
    return <Loader />;
  }

  return (
    <section className={cls.banner}>
      <div className={cls.container}>
        <div className={cls.body}>
          <div className={`${cls.block} ${cls.one}`}>
            {banner.bannerContent.map((el, i) => (
              <div key={i} ref={refs.current[i]} className={cls.blockVideo}>
                <video
                  className={cls.video}
                  key={
                    isMobile
                      ? el.videoMobile.data.attributes.url + i
                      : el.video.data.attributes.url + i
                  }
                  muted
                  playsInline
                  loop
                >
                  <source
                    src={
                      isMobile.matches
                        ? getFileUrl(el.videoMobile.data.attributes.url)
                        : getFileUrl(el.video.data.attributes.url)
                    }
                    type="video/mp4"
                  />
                </video>

                <div className={cls.videoContent}>
                  <div className={cls.videoTitles}>
                    <h3>{el.title}</h3>

                    <p>{el.description}</p>
                  </div>

                  <button onClick={() => onClick(el.link)}>
                    <p>Подробнее</p>

                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M0.699218 8.40208L0.699218 6.69753L10.9265 6.69753L6.23899 2.01003L7.44922 0.799805L14.1992 7.5498L7.44922 14.2998L6.23899 13.0896L10.9265 8.40208L0.699218 8.40208Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={`${cls.block} ${cls.two}`}>
            {banner.bannerMetrics.map((el, i) => (
              <React.Fragment key={i}>
                <p ref={refsTwoBlockText.current[i]}>{el.title}</p>

                <div ref={refsTwoBlockImage.current[i]} className={cls.image}>
                  <img src={el.img.data.attributes.url} alt="" />
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className={`${cls.block} ${cls.three}`}>
            <div className={cls.threeBody}>
              {banner.bannerBottomBlocks.map((el, i) => (
                <p
                  key={i}
                  ref={refsThreeBlockText.current[i]}
                  className={cls.threeTitle}
                >
                  {el.title}
                </p>
              ))}

              {isMobile.matches &&
                banner.bannerBottomBlocks.map((el, i) => (
                  <div
                    key={i}
                    ref={refsBlocksThreeBlockMobile.current[i]}
                    className={cls.threeBlock}
                  >
                    {el.blocks.map((el) => (
                      <div key={el.title} className={cls.threeBlockSection}>
                        <div className={cls.threeBlockTitle}>{el.title}</div>
                        <div className={cls.threeBlockPrice}>{el.total}</div>
                        <div className={cls.threeBlockTotal}>{el.term}</div>
                      </div>
                    ))}
                  </div>
                ))}

              <button onClick={clickPopup} className={cls.threeBottom}>
                <p>Оставить заявку</p>

                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M0.699218 8.40208L0.699218 6.69753L10.9265 6.69753L6.23899 2.01003L7.44922 0.799805L14.1992 7.5498L7.44922 14.2998L6.23899 13.0896L10.9265 8.40208L0.699218 8.40208Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {!isMobile.matches && (
              <div className={cls.threeBlockBlocks}>
                {banner.bannerBottomBlocks.map((el, i) => (
                  <div
                    key={i}
                    ref={refsBlocksThreeBlock.current[i]}
                    className={cls.threeBlock}
                  >
                    {el.blocks.map((el) => (
                      <div key={el.title} className={cls.threeBlockSection}>
                        <div className={cls.threeBlockTitle}>{el.title}</div>
                        <div className={cls.threeBlockPrice}>{el.total}</div>
                        <div className={cls.threeBlockTotal}>{el.term}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
