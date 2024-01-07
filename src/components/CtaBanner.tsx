import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { classNames } from "@/shared/lib";
import { useRef } from "react";

const CtaBanner = ({
  className = "",
  animation = false,
}: {
  className?: string;
  animation?: boolean;
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
        [className]
      )}
      ref={animation ? refBanner : undefined}
    >
      <div className="cta__title">
        Здесь будет CTA баннер, под него нужно оставить просто контейнер
      </div>
      <div className="cta__image"></div>
    </div>
  );
};

export { CtaBanner };
