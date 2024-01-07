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

      let allChars: HTMLElement[] = [];

      const text = new SplitType(char, { types: "words", tagName: "span" });

      if (text.words) {
        text.words.forEach((word) => {
          const split = new SplitType(word, {
            types: "chars",
            tagName: "span",
          });

          if (split.chars) {
            allChars = allChars.concat(split.chars);
          }
        });
      }

      gsap.fromTo(
        allChars,
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
