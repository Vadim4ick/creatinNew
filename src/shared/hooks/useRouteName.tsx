import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Router } from "../const/pages";

const useRouteName = () => {
  const pathname = usePathname();

  const [routeActive, setRouteActive] = useState("");

  useEffect(() => {
    Object.entries(Router).forEach(([pattern, route]) => {
      if (pattern === pathname) {
        setRouteActive(route);
      }
    });
  }, [pathname]);

  return routeActive;
};

export { useRouteName };
