import { useQuery } from "@tanstack/react-query";
import { KEYS } from "../const/keys";
import { gql } from "@/graphql/client";

export const useGetServicesNames = () => {
  return useQuery({
    queryKey: [KEYS.SERVICES_NAME],
    queryFn: () => gql.GetServicesNames(),
    refetchOnWindowFocus: false,
  });
};
