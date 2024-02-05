import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

export const useGetStudio = () => {
  return useQuery({
    queryKey: ["Studio"],
    queryFn: () => gql.GetStudio(),
    refetchOnWindowFocus: false,
  });
};
