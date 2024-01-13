import { MediaFragmentFragment } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { classNames } from "@/shared/lib";
import Image from "next/image";
import { useRef } from "react";
import cls from "./CtaBanner.module.scss";

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
      className={classNames(
        "cta",
        {
          "fade-up": animation,
        },
        [className, cls.image]
      )}
      ref={animation ? refBanner : undefined}
    >
      {/* <div className="cta__title">
        Здесь будет CTA баннер, под него нужно оставить просто контейнер
      </div> */}
      {src && (
        <div className={classNames("cta__image", {}, [])}>
          <Image src={getFileUrl(src.url)} alt="" fill />
        </div>
      )}
    </div>
  );
};

export { CtaBanner };
