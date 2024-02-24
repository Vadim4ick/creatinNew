import { gql } from "@/graphql/client";
import { notFound, redirect } from "next/navigation";

const ServicesPage = async () => {
  const { serviceNames } = await gql.GetServicesNames();

  if (!serviceNames.data.length) {
    return notFound();
  }

  return redirect(`/services/${serviceNames.data[0].id}`);
};

export default ServicesPage;
