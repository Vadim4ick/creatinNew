import { gql } from "@/graphql/client";
import { PageServices } from "@/page/PageServices";
import { getRouteServices } from "@/shared/const/pages";
import { notFound } from "next/navigation";

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function generateMetadata() {
  const { servicesPage } = await gql.GetSeoServicesPage();

  if (
    !servicesPage.data ||
    !servicesPage.data.attributes ||
    !servicesPage.data.attributes.seo
  ) {
    // Добавьте проверку на существование нужных свойств
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

  return <PageServices serviceNames={serviceNames.data} />;
};

export default ServicesPage;
