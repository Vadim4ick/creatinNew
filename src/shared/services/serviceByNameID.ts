import { useQuery } from "@tanstack/react-query";
import { KEYS } from "../const/keys";
import { gql } from "@/graphql/client";

export const useGetServiceByNameID = (id: string) => {
  return useQuery({
    queryKey: [KEYS.SERVICES_BY_NAME_ID, id],
    queryFn: () =>
      gql.GetServiceById({
        id: id,
      }),
    refetchOnWindowFocus: false,
  });
};
