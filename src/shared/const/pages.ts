// type RoutePath = "/" | "/portfolio" | "/services" | `/services/:service`;

// interface RouteNames {
// HOME: "Главная";
// PORTFOLIO: "Портфолио";
// SERVICES: "Услуги";
// SERVICES_DISCLOSURE: "Услуга";
// }

// type RouteName = RouteNames[keyof RouteNames];

// interface IRoute {
//   name: RouteName;
//   path: RoutePath;
// }

// export const Router: IRoute[] = [
//   {
//     name: "Главная",
//     path: "/",
//   },
//   {
//     name: "Портфолио",
//     path: "/portfolio",
//   },
//   {
//     name: "Услуги",
//     path: "/services",
//   },
//   {
//     name: "Услуга",
//     path: "/services/:service",
//   },
// ];

export enum AppRoutes {
  HOME = "Главная",
  PORTFOLIO = "Портфолио",
  SERVICES = "Услуги",
  SERVICES_DISCLOSURE = "Услуга",
}

export const getRouteHome = () => "/";
export const getRoutePortfolio = () => "/portfolio";
export const getRouteServices = () => "/services";
export const getRouteService = (service: string) =>
  `${getRouteServices()}/${service}`;

export const Router: Record<string, AppRoutes> = {
  [getRouteHome()]: AppRoutes.HOME,
  [getRoutePortfolio()]: AppRoutes.PORTFOLIO,
  [getRouteServices()]: AppRoutes.SERVICES,
  [getRouteService(":service")]: AppRoutes.SERVICES_DISCLOSURE,
};
