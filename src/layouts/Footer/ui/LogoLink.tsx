"use client";

import { motion, useAnimation } from "framer-motion";
import { useCallback, useState } from "react";

const SPRING = { type: "spring", mass: 1, stiffness: 195.9, damping: 8.57 };

export function LogoLink() {
  const [shown, setShown] = useState(false);
  const dot = useAnimation();
  const letterI = useAnimation();

  const bounceLetter = useCallback(() => {
    letterI.start({
      y: 10,
      transition: { duration: 0.25, ease: "easeOut" },
    });
  }, [letterI]);

  const onHoverStart = useCallback(() => {
    if (!shown) {
      setShown(true);
      dot.start({
        opacity: 1,
        scale: 1,
        y: [-40, -22, 0, -8, 0],
        transition: SPRING,
      });
      bounceLetter();
    } else {
      dot.start({
        y: [0, -6, 0, -4, 0],
        transition: SPRING,
      });

      bounceLetter();
    }
  }, [shown, dot, bounceLetter]);

  const onHoverEnd = useCallback(() => {
    dot.start({
      y: [0, -15, -35],
      opacity: [1, 0.6, 0],
      scale: [1, 0.95, 0.85],
      transition: SPRING,
    });

    letterI.start({
      y: 0,
      transition: SPRING,
    });
    setShown(false);
  }, [dot, letterI]);

  return (
    <motion.span
      transition={SPRING}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      style={{ display: "inline-block" }}
    >
      <motion.svg
        width="583"
        height="143"
        viewBox="0 0 583 143"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <g clipPath="url(#clip0_1634_12712)">
          <path
            d="M50.2384 142.687C22.5082 142.687 0 119.2 0 90.3505C0 60.0212 23.7687 38.3838 50.2384 38.3838C66.2642 38.3838 81.0296 46.5209 89.1326 58.5417L70.946 76.6653C66.6244 67.9734 57.441 64.2747 50.4184 64.2747C37.8138 64.2747 25.2092 74.2611 25.2092 90.3505C25.2092 104.96 36.3733 116.796 50.4184 116.796C59.4217 116.796 67.7048 111.433 71.126 104.221L89.1326 122.344C81.2097 134.55 66.2642 142.687 50.2384 142.687Z"
            fill="#D7D9DB"
          />
          <path
            d="M100.047 140.855V42.1025H124.321V53.5466C128.884 44.6866 142.937 41.5487 154.618 42.1025V67.9442C139.834 65.36 125.599 74.7737 125.599 90.2787V140.855H100.047Z"
            fill="#D7D9DB"
          />
          <path
            d="M211.188 142.687C180.089 142.687 159.164 116.053 159.164 90.3496C159.164 63.5291 177.401 38.1986 208.692 38.3848C242.863 38.5711 266.667 64.6466 257.068 101.897H188.535C189.879 110.838 200.821 119.405 213.875 119.405C220.978 119.591 233.264 116.425 236.72 111.769L257.068 126.855C246.702 138.217 230.001 142.687 211.188 142.687ZM188.343 79.3607H230.769C231.728 72.6555 226.161 61.294 209.652 61.294C195.446 61.294 188.343 71.3517 188.343 79.3607Z"
            fill="#D7D9DB"
          />
          <path
            d="M318.424 141.938C289.738 141.938 266.488 118.718 266.488 90.0672C266.488 61.6039 289.738 38.3838 318.424 38.3838C346.924 38.3838 370.173 61.6039 370.173 90.0672V142.687H343.924V130.328C338.111 137.256 328.924 141.938 318.424 141.938ZM318.424 115.722C332.487 115.722 343.924 104.299 343.924 90.0672C343.924 76.0228 332.487 64.6 318.424 64.6C304.175 64.6 292.738 76.0228 292.738 90.0672C292.738 104.299 304.175 115.722 318.424 115.722Z"
            fill="#D7D9DB"
          />
          <path
            d="M434.753 141.772C414.077 141.772 381.872 136.189 381.872 100.088V67.7085H372.906V41.6559H381.872V21H407.489V41.6559H431.277V67.7085H407.489V94.3193C407.489 113.859 421.762 115.72 434.753 115.72V141.772Z"
            fill="#D7D9DB"
          />
          <motion.path
            animate={letterI}
            style={{ transformOrigin: "bottom" }}
            d="M448 141V49H474V141H448Z"
            fill="#D7D9DB"
          />

          <path
            d="M484.773 140.857V88.9624C484.773 59.2545 505.822 38.3838 533.887 38.3838C561.768 38.3838 583.001 59.2545 583.001 88.9624V140.857H557.152V88.9624C557.152 73.7324 547.735 64.7072 533.887 64.7072C520.039 64.7072 510.623 73.7324 510.623 88.9624V140.857H484.773Z"
            fill="#D7D9DB"
          />

          <motion.rect
            x="448"
            y="20" // было 10 → опустили на 10px
            width="26"
            height="26"
            rx="13"
            fill="#D7D9DB"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={dot}
            style={{
              transformOrigin: "50% 50%",
              willChange: "transform, opacity",
            }}
          />
        </g>
        <defs>
          <clipPath id="clip0_1634_12712">
            <rect width="583" height="143" fill="white" />
          </clipPath>
        </defs>
      </motion.svg>
    </motion.span>
  );
}
