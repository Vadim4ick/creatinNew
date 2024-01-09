type TKeys =
  | "CASES_BY_NAME_ID"
  | "SERVICES_NAME"
  | "SERVICES_BY_NAME_ID"
  | "SERVICES_COLLECTION_BY_ID"
  | "OFFERS";

export const KEYS: Record<TKeys, string> = {
  CASES_BY_NAME_ID: "cases",
  SERVICES_NAME: "servicesName",
  SERVICES_BY_NAME_ID: "servicesByNameID",
  SERVICES_COLLECTION_BY_ID: "servicesCollectionById",
  OFFERS: "offers",
};
