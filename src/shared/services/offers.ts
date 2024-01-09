import { useQuery } from "@tanstack/react-query";
import { KEYS } from "../const/keys";
import { gql } from "@/graphql/client";

export const useGetOffersPage = () => {
  return useQuery({
    queryKey: [KEYS.OFFERS],
    queryFn: () => gql.GetOffersPage(),
    refetchOnWindowFocus: false,
  });
};
