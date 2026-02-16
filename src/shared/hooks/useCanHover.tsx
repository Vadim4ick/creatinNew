import { useEffect, useState } from "react";

function useCanHover() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(mediaQuery.matches);

    const handler = () => setCanHover(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return canHover;
}

export { useCanHover };
