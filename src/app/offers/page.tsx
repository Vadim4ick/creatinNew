import { AllOffersPageComponent } from "@/page/AllOffersPageComponent";
import { gql } from "@/graphql/client";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  const { seoOffersPage } = await gql.GetSeoOffers();

  if (
    !seoOffersPage.data ||
    !seoOffersPage.data.attributes ||
    !seoOffersPage.data.attributes.seo
  ) {
    return null;
  }

  const metadata = {
    title: seoOffersPage.data.attributes.seo.metaTitle,
    description: seoOffersPage.data.attributes.seo.metaDescription,
    keywords: seoOffersPage.data.attributes.seo.keywords,
    robots: seoOffersPage.data.attributes.seo.metaRobots,
    viewport: seoOffersPage.data.attributes.seo.metaViewport,
    structuredData: seoOffersPage.data.attributes.seo.structuredData,
    canonical: seoOffersPage.data.attributes.seo.canonicalURL,
  };

  return metadata;
}

const AllOffersPage = async () => {
  const { serviceNames } = await gql.GetServicesNames();

  if (!serviceNames.data.length) {
    return notFound();
  }

  return <AllOffersPageComponent serviceNames={serviceNames.data} />;
};

export default AllOffersPage;
