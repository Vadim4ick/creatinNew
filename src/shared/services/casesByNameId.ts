import { useQuery } from "@tanstack/react-query";
import { KEYS } from "../const/keys";
import { gql } from "@/graphql/client";

export const useGetCasesByNameId = (ids: string[]) => {
  return useQuery({
    queryKey: [KEYS.CASES_BY_NAME_ID, ids],
    queryFn: () =>
      gql.GetPortfolio({
        ids: ids,
      }),

    refetchOnWindowFocus: false,
  });
};
