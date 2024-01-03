import { gql } from "@/graphql/client";
import { KEYS } from "../const/keys";
import { useQuery } from "@tanstack/react-query";

export const useGetAllCases = () => {
  return useQuery({
    queryKey: [KEYS.CASES],
    queryFn: () => gql.GetCases(),
    refetchOnWindowFocus: false,
  });
};
