import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AppRoutes, Router } from "../const/pages";

const useRouteName = () => {
  const pathname = usePathname();

  const [routeActive, setRouteActive] = useState([
    {
      name: `${AppRoutes["HOME"]}`,
      path: "/",
    },
  ]);

  const pathParts = decodeURIComponent(pathname)
    .split("/")
    .filter((part) => part);

  useEffect(() => {
    Object.entries(Router).forEach(([pattern, route]) => {
      if (pattern === pathname) {
        setRouteActive([
          ...routeActive,
          {
            name: route,
            path: `/${pathParts}`,
          },
        ]);
      } else if (pathParts.length > 2 && pathParts[0] === "services") {
        setRouteActive([
          ...routeActive,
          {
            name: `${AppRoutes["SERVICES"]}`,
            path: `/${pathParts[0]}`,
          },
          {
            name: `${pathParts[1]}`,
            path: `/`,
          },
        ]);
      }
    });
  }, [pathname]);

  return routeActive.reverse().slice(-2);
};

export { useRouteName };
