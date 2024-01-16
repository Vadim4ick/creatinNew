"use client";

import { MediaFragmentFragment } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { classNames } from "@/shared/lib";
import { useRef } from "react";

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

  useIntersectionObserver({
    ref: videoRef,
    once: true,
  });

  const video = (
    <div
      className="video__item"
      // @ts-ignore
      style={{ "--icon": "url(/img/icons/video-icon-gray.svg)" }}
    >
      <iframe
        src={getFileUrl(srcMedia.url)}
        title="Video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        width="100%"
        height="100%"
        frameBorder={0}
      ></iframe>
    </div>
  );

  return (
    <div
      className={classNames("video", { "fade-up": animation }, [className])}
      ref={animation ? videoRef : undefined}
      {...otherProps}
    >
      {container && <div className="video__container">{video}</div>}

      {!container && video}
    </div>
  );
};

export { Video };
