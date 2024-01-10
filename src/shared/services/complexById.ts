import { useQuery } from "@tanstack/react-query";
import { KEYS } from "../const/keys";
import { gql } from "@/graphql/client";

export const useGetComplexById = (id: string) => {
  return useQuery({
    queryKey: [KEYS.COMPLEX_BY_ID, id],
    queryFn: () =>
      gql.GetComplexById({
        id: id,
      }),
    refetchOnWindowFocus: false,
  });
};
