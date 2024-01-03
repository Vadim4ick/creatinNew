import { MutableRefObject, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const SplitTypeAnimation = ({
  children,
  refChar,
  bg,
  fg,
}: {
  children: JSX.Element;
  refChar: MutableRefObject<HTMLDivElement | null>;
  bg: string;
  fg: string;
}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (refChar.current) {
      const char = refChar.current;

      const text = new SplitType(char, { types: "chars" });

      gsap.fromTo(
        text.chars,
        {
          color: bg,
        },
        {
          color: fg,
          //   duration: 0.3,
          //   stagger: 0.02,
          duration: 0.3,
          stagger: 0.3,
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 40%",
            // start: "top 80%",
            // end: "top 20%",
            scrub: true,
            markers: false,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    }
  }, [bg, fg, refChar]);

  return children;
};

export { SplitTypeAnimation };
