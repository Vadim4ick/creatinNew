export enum AppRoutes {
  HOME = "Главная",
  PORTFOLIO = "Портфолио",
  SERVICES = "Услуги",
  SERVICES_DISCLOSURE = "Услуга",
  OFFERS = "Спецпредложения",
  COMPLEX = "Cопровождения",
  CASE = "Проект",
  ABOUT = "Студия",
}

export const getRouteHome = () => "/";
export const getRoutePortfolio = () => "/portfolio";
export const getRouteServices = () => "/services";
export const getRouteAbout = () => "/about";

export const getRouteCase = (id: string) => `${getRoutePortfolio()}/${id}`;

export const getRouteService = (service: string, id: string) =>
  `${getRouteServices()}/${service}/${id}`;

export const getRouteOffers = (id: string) =>
  `${getRouteServices()}/offers/${id}`;

export const getRouteComplex = (id: string) =>
  `${getRouteServices()}/complex/${id}`;

export const Router: Record<string, AppRoutes> = {
  [getRouteHome()]: AppRoutes.HOME,
  [getRoutePortfolio()]: AppRoutes.PORTFOLIO,
  [getRouteServices()]: AppRoutes.SERVICES,
  [getRouteAbout()]: AppRoutes.ABOUT,
  [getRouteService(":service", ":id")]: AppRoutes.SERVICES_DISCLOSURE,
  [getRouteOffers(":id")]: AppRoutes.OFFERS,
  [getRouteComplex(":id")]: AppRoutes.COMPLEX,
  [getRouteCase(":id")]: AppRoutes.CASE,
};

export type SeoPage = "/" | "/services" | "/portfolio" | "/about";
