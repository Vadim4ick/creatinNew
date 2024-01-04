type RoutePath = "/" | "/portfolio" | "/services";

interface RouteNames {
  HOME: "Главная";
  PORTFOLIO: "Портфолио";
  SERVICES: "Услуги";
}

type RouteName = RouteNames[keyof RouteNames];

interface IRoute {
  name: RouteName;
  path: RoutePath;
}

export const Router: IRoute[] = [
  {
    name: "Главная",
    path: "/",
  },
  {
    name: "Портфолио",
    path: "/portfolio",
  },
  {
    name: "Услуги",
    path: "/services",
  },
];
