import { gql } from "@/graphql/client";
import { AllComplexPageComponent } from "@/page/AllComplexPageComponent";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  const seo = await gql.GetSeoComplex();

  if (
    !seo.seoComplexPage.data ||
    !seo.seoComplexPage.data.attributes ||
    !seo.seoComplexPage.data.attributes.seo
  ) {
    // Добавьте проверку на существование нужных свойств
    return null;
  }

  const metadata = {
    title: seo.seoComplexPage.data.attributes.seo.metaTitle,
    description: seo.seoComplexPage.data.attributes.seo.metaDescription,
    keywords: seo.seoComplexPage.data.attributes.seo.keywords,
    robots: seo.seoComplexPage.data.attributes.seo.metaRobots,
    viewport: seo.seoComplexPage.data.attributes.seo.metaViewport,
    structuredData: seo.seoComplexPage.data.attributes.seo.structuredData,
    canonical: seo.seoComplexPage.data.attributes.seo.canonicalURL,
  };

  return metadata;
}

const AllComplexPage = async () => {
  const { serviceNames } = await gql.GetServicesNamesOffer();

  if (!serviceNames.data.length) {
    return notFound();
  }

  return <AllComplexPageComponent serviceNames={serviceNames.data} />;
};

export default AllComplexPage;
