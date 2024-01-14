import { gql } from "@/graphql/client";
import { PageServices } from "@/page/PageServices";
import { ActiveOfferProvider } from "@/shared/providers/activeOfferProvider";
import { notFound } from "next/navigation";

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const ServicesPage = async () => {
  const { serviceNames } = await gql.GetServicesNames();

  if (!serviceNames.data.length) {
    return notFound();
  }

  return <PageServices serviceNames={serviceNames.data} />;
};

export default ServicesPage;
