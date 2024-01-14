import { useQuery } from "@tanstack/react-query";
import { KEYS } from "../const/keys";
import { gql } from "@/graphql/client";

export const useGetMobileBurgerLinks = () => {
  return useQuery({
    queryKey: [KEYS.BURGER_LINKS],
    queryFn: () => gql.GetBurgerLinks(),
    refetchOnWindowFocus: false,
  });
};
