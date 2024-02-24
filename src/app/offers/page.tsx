import { AllOffersPageComponent } from "@/page/AllOffersPageComponent";
import { gql } from "@/graphql/client";
import { notFound } from "next/navigation";

const AllOffersPage = async () => {
  const { serviceNames } = await gql.GetServicesNames();

  if (!serviceNames.data.length) {
    return notFound();
  }

  return <AllOffersPageComponent serviceNames={serviceNames.data} />;
};

export default AllOffersPage;
