type TKeys =
  | "CASES"
  | "SERVICES_NAME"
  | "SERVICES_BY_NAME_ID"
  | "SERVICES_COLLECTION_BY_ID";

export const KEYS: Record<TKeys, string> = {
  CASES: "cases",
  SERVICES_NAME: "servicesName",
  SERVICES_BY_NAME_ID: "servicesByNameID",
  SERVICES_COLLECTION_BY_ID: "servicesCollectionById",
};
