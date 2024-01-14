type TKeys =
  | "CASES_BY_NAME_ID"
  | "SERVICES_NAME"
  | "SERVICES_BY_NAME_ID"
  | "SERVICES_COLLECTION_BY_ID"
  | "OFFERS"
  | "COMPLEX"
  | "OFFER_BY_ID"
  | "COMPLEX_BY_ID"
  | "BURGER_LINKS"
  | "SERVICES_BY_TITLE_ID";

export const KEYS: Record<TKeys, string> = {
  CASES_BY_NAME_ID: "cases",
  SERVICES_NAME: "servicesName",
  SERVICES_BY_NAME_ID: "servicesByNameID",
  SERVICES_COLLECTION_BY_ID: "servicesCollectionById",
  OFFERS: "offers",
  COMPLEX: "complex",
  OFFER_BY_ID: "offerById",
  COMPLEX_BY_ID: "offerById",
  BURGER_LINKS: "burgerLinks",
  SERVICES_BY_TITLE_ID: "servicesByTitleId",
};
