import { useQuery } from "@tanstack/react-query";
import { KEYS } from "../const/keys";
import { gql } from "@/graphql/client";

export const useGetComplexPage = () => {
  return useQuery({
    queryKey: [KEYS.COMPLEX],
    queryFn: () => gql.GetComplexPage(),
    refetchOnWindowFocus: false,
  });
};
