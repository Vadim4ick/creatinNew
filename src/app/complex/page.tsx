import { gql } from "@/graphql/client";
import { AllComplexPageComponent } from "@/page/AllComplexPageComponent";
import { notFound } from "next/navigation";

const AllComplexPage = async () => {
  const { serviceNames } = await gql.GetServicesNamesOffer();

  if (!serviceNames.data.length) {
    return notFound();
  }

  return <AllComplexPageComponent serviceNames={serviceNames.data} />;
};

export default AllComplexPage;
