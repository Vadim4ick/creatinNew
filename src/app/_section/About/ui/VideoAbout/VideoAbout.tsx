import { MediaFragmentFragment } from "@/graphql/__generated__";
import cls from "./../About.module.scss";
import { classNames } from "@/shared/lib";

interface VideoAboutProps {
  src: MediaFragmentFragment;
  className?: string;
}

const VideoAbout = (props: VideoAboutProps) => {
  const { src, className } = props;

  const handleContextMenu = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="video__container">
      <video
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
