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
      } else if (pathParts.length === 2 && pathParts[0] === "offers") {
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
      } else if (
        (pathParts.length === 2 && pathParts[0] === "services") ||
        (pathParts.length === 1 && pathParts[0] === "offers")
      ) {
        setRouteActive([
          ...routeActive,
          {
            name: `${AppRoutes["SERVICES"]}`,
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
  }, [pathParts, pathname]);

  // Если данные загружаются, вы можете вернуть заглушку или null
  if (isLoading) {
    return null;
  }

  return routeActive.slice(-2);
};

export { useRouteName };

// import { usePathname } from "next/navigation";
// import { useEffect, useMemo, useState, useCallback } from "react";
// import { AppRoutes, Router } from "../const/pages";

// interface Route {
//   name: string;
//   path: string;
// }

// const useRouteName = (): Route[] | null => {
//   const pathname = usePathname();
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   const [routeActive, setRouteActive] = useState<Route[]>([
//     {
//       name: `${AppRoutes["HOME"]}`,
//       path: "/",
//     },
//   ]);

//   const pathParts = useMemo(
//     (): string[] =>
//       decodeURIComponent(pathname)
//         .split("/")
//         .filter((part) => part),
//     [pathname]
//   );

//   useEffect(() => {
//     setIsLoading(true);

//     const newRoutes: Route[] = [];

//     Object.entries(Router).forEach(([pattern, route]) => {
//       console.log(pathParts);

//       if (pattern === pathname) {
//         newRoutes.push({
//           name: route,
//           path: `/${pathParts}`,
//         });
//       } else if (pathParts.length > 2 && pathParts[1] === "offers") {
//         newRoutes.push({
//           name: `${AppRoutes["OFFERS"]}`,
//           path: `/${pathParts[0]}`,
//         });
//       } else if (pathParts.length > 2 && pathParts[1] === "complex") {
//         newRoutes.push({
//           name: `${AppRoutes["COMPLEX"]}`,
//           path: `/${pathParts[0]}`,
//         });
//       } else if (pathParts.length > 2 && pathParts[0] === "services") {
//         newRoutes.push({
//           name: `${AppRoutes["SERVICES"]}`,
//           path: `/${pathParts[0]}`,
//         });

//         newRoutes.push({
//           name: `${pathParts[1]}`,
//           path: `/`,
//         });
//       }
//     });

//     console.log(newRoutes);

//     setRouteActive([...routeActive, ...newRoutes]);
//     setIsLoading(false);
//   }, [pathParts, pathname]);

//   if (isLoading) {
//     return null;
//   }

//   return routeActive.slice(-2);
// };

// export { useRouteName };
