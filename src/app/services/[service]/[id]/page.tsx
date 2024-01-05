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

  const { services } = await gql.GetServicesTitleById({
    title: decodeURIComponent(service),
  });

  if (!id) {
    return notFound();
  }

  return <ServiceCollection id={id} titleServices={services.data} />;
};

export default ServiceParamsPage;
