import { AllServicePageComponents } from "@/page/AllServicePageComponents";
import { gql } from "@/graphql/client";
import { notFound } from "next/navigation";

const AllServicePage = async ({ params }: { params: { service: string } }) => {
  const { serviceNames } = await gql.GetServicesNames();

  if (!serviceNames.data.length || !params.service) {
    return notFound();
  }

  return (
    <AllServicePageComponents
      id={params.service}
      serviceNames={serviceNames.data}
    />
  );
};

export default AllServicePage;
