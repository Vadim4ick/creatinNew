import { useQuery } from "@tanstack/react-query";
import { KEYS } from "../const/keys";
import { gql } from "@/graphql/client";

export const useGetOffersById = (id: string) => {
  return useQuery({
    queryKey: [KEYS.OFFER_BY_ID, id],
    queryFn: () =>
      gql.GetOfferById({
        id: id,
      }),
    refetchOnWindowFocus: false,
  });
};
