import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AppRoutes, Router } from "../const/pages";

const useRouteName = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true); // Добавлен флаг isLoading

  const [routeActive, setRouteActive] = useState([
    {
      name: `${AppRoutes["HOME"]}`,
      path: "/",
    },
  ]);

  const pathParts = useMemo(
    () =>
      decodeURIComponent(pathname)
        .split("/")
        .filter((part) => part),
    [pathname]
  );

  useEffect(() => {
    setIsLoading(true); // Устанавливаем флаг isLoading в true перед началом загрузки

    Object.entries(Router).forEach(([pattern, route]) => {
      if (pattern === pathname) {
        setRouteActive([
          ...routeActive,
          {
            name: route,
            path: `/${pathParts}`,
          },
        ]);
      } else if (pathParts.length > 2 && pathParts[1] === "offers") {
        setRouteActive([
          ...routeActive,
          {
            name: `${AppRoutes["OFFERS"]}`,
            path: `/${pathParts[0]}`,
          },
        ]);
      } else if (pathParts.length > 2 && pathParts[1] === "complex") {
        setRouteActive([
          ...routeActive,
          {
            name: `${AppRoutes["COMPLEX"]}`,
            path: `/${pathParts[0]}`,
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

    setIsLoading(false); // Устанавливаем флаг isLoading в false после завершения загрузки
  }, [pathname]);

  // Если данные загружаются, вы можете вернуть заглушку или null
  if (isLoading) {
    return null;
  }

  return routeActive.reverse().slice(-2);
};

export { useRouteName };
