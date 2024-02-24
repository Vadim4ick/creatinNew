import { useQuery } from "@tanstack/react-query";
import { KEYS } from "../const/keys";
import { gql } from "@/graphql/client";

export const useGetComplexSidebarTitle = () => {
  return useQuery({
    queryKey: [KEYS.COMPLEX_TITLTE],
    queryFn: () => gql.GetComplexSidebarTitle(),
    refetchOnWindowFocus: false,
  });
};
