export enum AppRoutes {
  HOME = "Главная",
  PORTFOLIO = "Портфолио",
  SERVICES = "Услуги",
  SERVICES_DISCLOSURE = "Услуга",
}

export const getRouteHome = () => "/";
export const getRoutePortfolio = () => "/portfolio";
export const getRouteServices = () => "/services";
export const getRouteService = (service: string, id: string) =>
  `${getRouteServices()}/${service}/${id}`;

export const Router: Record<string, AppRoutes> = {
  [getRouteHome()]: AppRoutes.HOME,
  [getRoutePortfolio()]: AppRoutes.PORTFOLIO,
  [getRouteServices()]: AppRoutes.SERVICES,
  [getRouteService(":service", ":id")]: AppRoutes.SERVICES_DISCLOSURE,
};
