import { GraphQLClient } from "graphql-request";

import { getSdk } from "./__generated__";

const client = new GraphQLClient(`${process.env.STRAPI_URL}/graphql`, {
  cache: "no-cache",
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
  },
});

export const gql = getSdk(client);

export * from "./__generated__";
