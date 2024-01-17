import { gql } from "@/graphql/client";
import { PageServices } from "@/page/PageServices";
import { getRouteServices } from "@/shared/const/pages";
import { notFound } from "next/navigation";

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function generateMetadata() {
  const seo = await fetch(
    `${process.env.BASE_URL}/api/metadata?page=${getRouteServices()}`
  ).then((res) => res.json());

  const data = await seo;

  if (data.status === "error") {
    throw new Error(data.error.text);
  }

  return data.metadata;
}

const ServicesPage = async () => {
  const { serviceNames } = await gql.GetServicesNames();

  if (!serviceNames.data.length) {
    return notFound();
  }

  return <PageServices serviceNames={serviceNames.data} />;
};

export default ServicesPage;
