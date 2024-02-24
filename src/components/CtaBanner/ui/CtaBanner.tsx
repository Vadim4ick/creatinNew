import { MediaFragmentFragment } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { classNames } from "@/shared/lib";
import Image from "next/image";
import { useRef } from "react";
import cls from "./CtaBanner.module.scss";
import { handleContextMenu } from "@/shared/helpers/handleContenxtMenu";

const CtaBanner = ({
  className = "",
  animation = false,
  src,
}: {
  className?: string;
  animation?: boolean;
  src?: MediaFragmentFragment;
}) => {
  const refBanner = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver({
    refs: [refBanner],
    once: true,
  });

  return (
    <div
      onContextMenu={(e) => handleContextMenu(e)}
      className={classNames(
        "cta",
        {
          "fade-up": animation,
        },
        [className, cls.image]
      )}
      ref={animation ? refBanner : undefined}
    >
      {src && (
        <div className={classNames("cta__image", {}, [])}>
          <Image
            src={getFileUrl(src.url)}
            alt=""
            height={src.height}
            width={src.width}
          />
        </div>
      )}
    </div>
  );
};

export { CtaBanner };
