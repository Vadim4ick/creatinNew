import { gql } from "@/graphql/client";
import { ServiceCollection } from "@/page/ServiceCollection";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { serviceCollection } = await gql.GetSeoServiceCollectionPage({
    id: params.id,
  });

  if (!serviceCollection.data || !serviceCollection.data.attributes) {
    return null;
  }

  const metadata = {
    title: serviceCollection.data.attributes.name,
  };

  return metadata;
}

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

  return (
    <ServiceCollection
      id={id}
      titleServices={services.data}
      title={decodeURIComponent(service)}
    />
  );
};

export default ServiceParamsPage;
