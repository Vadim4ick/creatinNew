import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomePreloader = () => {
  const ref = useRef(null);
  const [counter, setCounter] = useState(0);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to(ref.current, {
        borderRadius: "10%",
        ease: "power1.out",
        duration: 2.5,
      })
        .to(ref.current, {
          borderRadius: "100%",
          width: "50vmin",
          height: "50vmin",
          ease: "sine.inOut",
          // ease: CustomEase.create(
          //   "custom",
          //   "M0,0 C0.093,0.61 0.593,1.075 0.63,1 0.815,0.617 0.903,0.982 1,1 "
          // ),
          // ease: "bounce.out",
          duration: 2,
        })
        .to(ref.current, {
          width: "70vmin",
          height: "70vmin",
          duration: 0.5,
          ease: "power3.out",
        })
        .to(ref.current, {
          width: 0,
          height: 0,
          duration: 1,
        });
    },
    { scope: ref }
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < 100) {
        setCounter((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div ref={ref} id="loadingScreen">
      <p id="percentage">{counter}%</p>
    </div>
  );
};

export { HomePreloader };
