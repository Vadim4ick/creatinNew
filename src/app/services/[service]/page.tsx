import { gql } from "@/graphql/client";
import { ServiceCollection } from "@/page/ServiceCollection";
import { notFound } from "next/navigation";

const ServiceParamsPage = async ({
  params,
}: {
  params: { service: string };
}) => {
  const id = params.service;

  const { serviceCollection } = await gql.GetServiceCollectionById({
    id: id,
  });

  if (!serviceCollection.data) {
    return notFound();
  }

  return (
    <ServiceCollection serviceCollection={serviceCollection.data.attributes} />
  );
};

export default ServiceParamsPage;
