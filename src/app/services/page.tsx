import { gql } from "@/graphql/client";
import { PageServices } from "@/page/PageServices";
import { notFound } from "next/navigation";

const ServicesPage = async () => {
  const { serviceNames } = await gql.GetServicesNames();

  if (!serviceNames.data) {
    return notFound();
  }

  return <PageServices serviceNames={serviceNames.data} />;
};

export default ServicesPage;
