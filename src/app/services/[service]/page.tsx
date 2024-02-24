import { AllServicePageComponents } from "@/page/AllServicePageComponents";
import { gql } from "@/graphql/client";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { service: string };
}) {
  const { service } = await gql.GetSeoServicesPage({
    id: params.service,
  });

  if (
    !service.data ||
    !service.data.attributes ||
    !service.data.attributes.seo
  ) {
    return null;
  }

  const metadata = {
    title: service.data.attributes.seo.metaTitle,
    description: service.data.attributes.seo.metaDescription,
    keywords: service.data.attributes.seo.keywords,
    robots: service.data.attributes.seo.metaRobots,
    viewport: service.data.attributes.seo.metaViewport,
    structuredData: service.data.attributes.seo.structuredData,
    canonical: service.data.attributes.seo.canonicalURL,
  };

  return metadata;
}

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
