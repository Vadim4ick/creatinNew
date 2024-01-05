import { useQuery } from "@tanstack/react-query";
import { KEYS } from "../const/keys";
import { gql } from "@/graphql/client";

export const useGetServicesCollectionById = (id: string) => {
  return useQuery({
    queryKey: [KEYS.SERVICES_COLLECTION_BY_ID, id],
    queryFn: () =>
      gql.GetServiceCollectionById({
        id,
      }),
    refetchOnWindowFocus: false,
  });
};
