import { gql } from "@/graphql/client";
import { notFound, redirect } from "next/navigation";

export async function generateMetadata() {
  const { servicesPage } = await gql.GetSeoServicesPage();

  if (
    !servicesPage.data ||
    !servicesPage.data.attributes ||
    !servicesPage.data.attributes.seo
  ) {
    return null;
  }

  const metadata = {
    title: servicesPage.data.attributes.seo.metaTitle,
    description: servicesPage.data.attributes.seo.metaDescription,
    keywords: servicesPage.data.attributes.seo.keywords,
    robots: servicesPage.data.attributes.seo.metaRobots,
    viewport: servicesPage.data.attributes.seo.metaViewport,
    structuredData: servicesPage.data.attributes.seo.structuredData,
    canonical: servicesPage.data.attributes.seo.canonicalURL,
  };

  return metadata;
}

const ServicesPage = async () => {
  const { serviceNames } = await gql.GetServicesNames();

  if (!serviceNames.data.length) {
    return notFound();
  }

  return redirect(`/services/${serviceNames.data[0].id}`);
};

export default ServicesPage;
