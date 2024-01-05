import { useQuery } from "@tanstack/react-query";
import { KEYS } from "../const/keys";
import { gql } from "@/graphql/client";

export const useGetCasesByNameId = (id: string) => {
  return useQuery({
    queryKey: [KEYS.CASES_BY_NAME_ID, id],
    queryFn: () =>
      gql.GetCasesByNameId({
        id: id,
      }),
    refetchOnWindowFocus: false,
  });
};
