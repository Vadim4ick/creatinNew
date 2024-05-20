"use client";

import cls from "./Banner.module.scss";
import React, { useCallback, useContext, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMedia } from "@/shared/hooks/useMedia";
import { useRouter } from "next/navigation";
import { Loader } from "@/shared/ui/Loader/Loader";
import { GetHomeBannerFragment } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { PopupProviderContext } from "@/shared/providers/popupProvider";

const TIME_ANIMATION = 7.9;
const DELAY_ANIMATION = 6.5;
const DURATION_ANIMATION = 1;

interface BannerProps {
  banner: GetHomeBannerFragment;
}

gsap.registerPlugin(useGSAP);

export function Banner(props: BannerProps) {
  const { banner } = props;

  const [pageLoaded, setPageLoaded] = useState(true);

  const isMobile = useMedia("(max-width: 600px)");

  const router = useRouter();

  useEffect(() => {
    setPageLoaded(false);

    return () => {
      setPageLoaded(true);
      handleResumeAnimations();
    };
  }, []);

  const animate = useCallback(
    (videos: NodeListOf<Element>) => {
      if (videos.length > 0) {
        banner.bannerContent.map((_, i) => {
          if (videos[i] && Boolean(videos[i])) {
            // One block
            gsap.fromTo(
              videos[i],
              {
                scale: 0.75,
                y: "100%",
              },
              {
                onStart: function () {
                  // Обнуляем видео перед началом анимации

                  const video = videos[i]?.querySelector("video");

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
                  if (Boolean(videos[i])) {
                    gsap.to(videos[i], {
                      y: "-100%",
                      delay: DELAY_ANIMATION,
                      duration: DURATION_ANIMATION,
                      ease: "power1.in",

                      onComplete: function () {
                        if (i === videos.length - 1) {
                          // если это последний блок
                          // перемещаем предыдущие блоки обратно вниз
                          for (let j = 0; j < i; j++) {
                            gsap.to(videos[j], {
                              y: "0%",
                              duration: 0,

                              onComplete: function () {
                                if (j === i - 1) {
                                  // если это последний блок, который был перемещен вниз
                                  // запускаем анимацию снова
                                  animate(videos);
                                }
                              },
                            });
                          }
                        }
                      },
                    });
                  }
                },
              }
            );
            // /One block
          }
        });
      }
    },
    [banner.bannerContent]
  );

  const animateImageTwoBlock = useCallback(
    (imagesTwoBlock: NodeListOf<Element>) => {
      if (imagesTwoBlock.length > 0) {
        banner.bannerMetrics.map((_, i) => {
          if (imagesTwoBlock[i] && Boolean(imagesTwoBlock[i])) {
            gsap.from(
              imagesTwoBlock[i],

              {
                delay: i * TIME_ANIMATION,
                duration: 1,
                zIndex: -1,
                ease: "power1.in",
                y: "170%",

                onComplete() {
                  if (imagesTwoBlock[i]) {
                    gsap.to(imagesTwoBlock[i], {
                      y: "100%",
                      zIndex: 0,
                      delay: DELAY_ANIMATION,
                      duration: 0.85,
                      ease: "power1.in",

                      onComplete: function () {
                        if (i === imagesTwoBlock.length - 1) {
                          // если это последний блок
                          // перемещаем предыдущие блоки обратно вниз
                          for (let j = 0; j <= i; j++) {
                            gsap.to(imagesTwoBlock[j], {
                              y: "0%",
                              x: "0%",
                              duration: 0,

                              onComplete: function () {
                                if (j === i) {
                                  // если это последний блок, который был перемещен вниз
                                  // запускаем анимацию снова
                                  animateImageTwoBlock(imagesTwoBlock);
                                }
                              },
                            });
                          }
                        }
                      },
                    });
                  }
                },
              }
            );
          }
        });
      }
    },
    [banner.bannerMetrics]
  );

  const animateBlocksThreeBlock = useCallback(
    (block: NodeListOf<Element>) => {
      if (block.length > 0) {
        banner.bannerBottomBlocks.map((_, i) => {
          if (block[i] && Boolean(block[i])) {
            gsap.from(
              block[i],

              {
                y: isMobile.matches ? "0%" : "150%",
                x: isMobile.matches ? "150%" : "0",
                delay: i === 0 ? 0 : i * TIME_ANIMATION,
                duration: DURATION_ANIMATION,
                ease: "power1.out",

                onComplete() {
                  if (Boolean(block[i])) {
                    gsap.to(block[i], {
                      opacity: 0,
                      y: isMobile.matches ? "0%" : "-150%",
                      x: isMobile.matches ? "-150%" : "0%",
                      delay: DELAY_ANIMATION,
                      duration: DURATION_ANIMATION,
                      ease: "power1.in",

                      onComplete: function () {
                        if (i === block.length - 1) {
                          // если это последний блок
                          // перемещаем предыдущие блоки обратно вниз
                          for (let j = 0; j <= i; j++) {
                            gsap.to(block[j], {
                              y: "0%",
                              x: "0%",
                              opacity: 1,
                              duration: 0,

                              onComplete: function () {
                                if (j === i) {
                                  // если это последний блок, который был перемещен вниз
                                  // запускаем анимацию снова
                                  animateBlocksThreeBlock(block);
                                }
                              },
                            });
                          }
                        }
                      },
                    });
                  }
                },
              }
            );
          }
        });
      }
    },
    [banner.bannerBottomBlocks, isMobile.matches]
  );

  const animateText = useCallback((block: NodeListOf<Element>) => {
    if (block.length > 0) {
      Array.from(block).map((_, i) => {
        if (block[i] && Boolean(block[i])) {
          gsap.from(
            block[i],

            {
              x: "-150%",
              zIndex: 0,
              delay: i === 0 ? 0 : i * TIME_ANIMATION,
              duration: DURATION_ANIMATION,
              ease: "power1.out",

              onComplete() {
                if (Boolean(block[i])) {
                  gsap.to(block[i], {
                    opacity: 0,
                    y: "-150%",
                    delay: DELAY_ANIMATION,
                    duration: DURATION_ANIMATION,
                    ease: "power1.in",

                    onComplete: function () {
                      if (i === block.length - 1) {
                        // если это последний блок
                        // перемещаем предыдущие блоки обратно вниз
                        for (let j = 0; j <= i; j++) {
                          gsap.to(block[j], {
                            y: "0%",
                            x: "0%",
                            opacity: 1,
                            duration: 0,

                            onComplete: function () {
                              if (j === i) {
                                // если это последний блок, который был перемещен вниз
                                // запускаем анимацию снова
                                animateText(block);
                              }
                            },
                          });
                        }
                      }
                    },
                  });
                }
              },
            }
          );
        }
      });
    }
  }, []);

  useGSAP(() => {
    const videos = document.querySelectorAll('[data-video="true"]');
    const imagesTwoBlock = document.querySelectorAll('[data-blockTwo="image"]');

    const threeBlockInfo = isMobile.matches
      ? document.querySelectorAll('[data-blockThree="info"]')
      : document.querySelectorAll('[data-blockThreeMobile="info"]');

    const twoBlockText = document.querySelectorAll('[data-blockTwo="title"]');
    const threeBlockText = document.querySelectorAll(
      '[data-blockThree="title"]'
    );

    animate(videos);
    animateText(twoBlockText);
    animateImageTwoBlock(imagesTwoBlock);
    animateText(threeBlockText);
    animateBlocksThreeBlock(threeBlockInfo);
  }, [pageLoaded]);

  const onClick = (str: string) => router.push(str);

  const handlePauseAnimations = () => {
    gsap.globalTimeline.pause();
  };

  const handleResumeAnimations = () => {
    gsap.globalTimeline.resume();
  };

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
              <div key={i} data-video="true" className={cls.blockVideo}>
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

                  <button
                    onMouseLeave={() => handleResumeAnimations()}
                    onMouseEnter={() => handlePauseAnimations()}
                    onClick={() => onClick(el.link)}
                  >
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
                <p data-blockTwo="title">{el.title}</p>

                <div data-blockTwo="image" className={cls.image}>
                  <img src={el.img.data.attributes.url} alt="" />
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className={`${cls.block} ${cls.three}`}>
            <div className={cls.threeBody}>
              {banner.bannerBottomBlocks.map((el, i) => (
                <p key={i} data-blockThree="title" className={cls.threeTitle}>
                  {el.title}
                </p>
              ))}

              {isMobile.matches &&
                banner.bannerBottomBlocks.map((el, i) => (
                  <div
                    key={i}
                    data-blockThree="info"
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
                    data-blockThreeMobile="info"
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
