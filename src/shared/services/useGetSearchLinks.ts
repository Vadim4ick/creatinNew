import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

export const useGetSearchLinks = () => {
  return useQuery({
    queryKey: ["SearchLinks"],
    queryFn: () => gql.GetSearchLinks(),
    refetchOnWindowFocus: false,
  });
};
