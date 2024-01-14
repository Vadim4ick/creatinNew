import { useQuery } from "@tanstack/react-query";
import { KEYS } from "../const/keys";
import { gql } from "@/graphql/client";

export const useGetServicesTitleById = (title: string) => {
  return useQuery({
    queryKey: [KEYS.SERVICES_BY_TITLE_ID],
    queryFn: () =>
      gql.GetServicesTitleById({
        title: title,
      }),
    refetchOnWindowFocus: false,
  });
};
