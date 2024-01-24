"use client";

import { MediaFragmentFragment } from "@/graphql/__generated__";
import { fileExistion } from "@/shared/helpers/fileExistion";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { classNames } from "@/shared/lib";
import { useEffect, useRef } from "react";
import { CtaBanner } from "./CtaBanner";

interface VideoProps extends React.HTMLProps<HTMLDivElement> {
  animation?: boolean;
  container?: boolean;
  className?: string;
  srcMedia: MediaFragmentFragment;
}

const Video = (props: VideoProps) => {
  const {
    animation = false,
    className = "",
    container = false,
    srcMedia,
    ...otherProps
  } = props;

  const videoRef = useRef<HTMLDivElement | null>(null);
  const videoVideo = useRef<HTMLVideoElement | null>(null);

  const existion = fileExistion(srcMedia.url);

  useIntersectionObserver({
    ref: videoRef,
    once: true,
  });

  useEffect(() => {
    if (existion === "video") {
      // // Define the touchstart handler function
      // const touchStartHandler = function () {
      //   if (videoVideo.current) {
      //     // Start the video
      //     videoVideo.current.play();
      //   }
      // };

      // // Add the event listener
      // document.body.addEventListener("touchstart", touchStartHandler);

      // // Remove the event listener when the component is unmounted
      // return () =>
      //   document.body.removeEventListener("touchstart", touchStartHandler);
      if (videoVideo.current) {
        videoVideo.current.play();
      }
    }
  }, []);

  const video = (
    <div
      className="video__item"
      // @ts-ignore
      style={{ "--icon": "url(/img/icons/video-icon-gray.svg)" }}
    >
      {/* <iframe
        src={getFileUrl(srcMedia.url)}
        title="Video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        width="100%"
        height="100%"
        frameBorder={0}
      ></iframe> */}

      <video ref={videoVideo} autoPlay muted playsInline loop>
        <source src={getFileUrl(srcMedia.url)} type="video/mp4" />
      </video>
    </div>
  );

  return (
    <>
      {existion === "video" ? (
        <div
          className={classNames("video", { "fade-up": animation }, [className])}
          ref={animation ? videoRef : undefined}
          {...otherProps}
        >
          {container && <div className="video__container">{video}</div>}

          {!container && video}
        </div>
      ) : (
        <CtaBanner src={srcMedia} />
      )}
    </>
  );
};

export { Video };
