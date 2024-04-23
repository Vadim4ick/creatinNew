import { MediaFragmentFragment } from "@/graphql/__generated__";
import cls from "./../About.module.scss";
import { classNames } from "@/shared/lib";
import { useMedia } from "@/shared/hooks/useMedia";

interface VideoAboutProps {
  src: MediaFragmentFragment;
  srcMobile: MediaFragmentFragment;
  className?: string;
}

const VideoAbout = (props: VideoAboutProps) => {
  const { src, className, srcMobile } = props;

  const isMobile = useMedia("(max-width: 760px)");

  const handleContextMenu = (e: any) => {
    e.preventDefault();
  };

  if (isMobile.matches && srcMobile) {
    return (
      <div className="video__container">
        <video
          key={srcMobile.url}
          className={classNames("", {}, [className, cls.video])}
          onContextMenu={(e) => handleContextMenu(e)}
          autoPlay
          muted
          playsInline
          loop
        >
          <source src={srcMobile.url} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div className="video__container">
      <video
        key={src.url}
        className={classNames("", {}, [className, cls.video])}
        onContextMenu={(e) => handleContextMenu(e)}
        autoPlay
        muted
        playsInline
        loop
      >
        <source src={src.url} type="video/mp4" />
      </video>
    </div>
  );
};

export { VideoAbout };
