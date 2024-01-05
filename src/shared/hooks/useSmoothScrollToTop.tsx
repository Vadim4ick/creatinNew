import { useEffect } from "react";

interface ScrollToTopProps {
  trigger?: unknown;
  time?: number;
}

const useSmoothScrollToTop = (props: ScrollToTopProps) => {
  const { trigger, time = 100 } = props;

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const timerId = setTimeout(scrollToTop, time);

    return () => {
      clearTimeout(timerId);
    };
  }, [trigger]);
};

export default useSmoothScrollToTop;
