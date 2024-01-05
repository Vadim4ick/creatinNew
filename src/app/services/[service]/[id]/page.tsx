import { gql } from "@/graphql/client";
import { ServiceCollection } from "@/page/ServiceCollection";
import { notFound } from "next/navigation";

const ServiceParamsPage = async ({
  params,
}: {
  params: { id: string; service: string };
}) => {
  const id = params.id;
  const service = params.service;

  const { serviceCollection } = await gql.GetServiceCollectionById({
    id: id,
  });

  const { services } = await gql.GetServicesTitleById({
    title: decodeURIComponent(service),
  });

  if (!serviceCollection.data) {
    return notFound();
  }

  return (
    <ServiceCollection
      serviceCollection={serviceCollection.data}
      titleServices={services.data}
    />
  );
};

export default ServiceParamsPage;
