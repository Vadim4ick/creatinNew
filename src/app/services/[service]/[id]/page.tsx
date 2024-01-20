import { gql } from "@/graphql/client";
import { ServiceCollection } from "@/page/ServiceCollection";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  const { seoCollectionService } = await gql.GetSeoServiceCollectionPage();

  if (
    !seoCollectionService.data ||
    !seoCollectionService.data.attributes ||
    !seoCollectionService.data.attributes.seo
  ) {
    // Добавьте проверку на существование нужных свойств
    return null;
  }

  const metadata = {
    title: seoCollectionService.data.attributes.seo.metaTitle,
    description: seoCollectionService.data.attributes.seo.metaDescription,
    keywords: seoCollectionService.data.attributes.seo.keywords,
    robots: seoCollectionService.data.attributes.seo.metaRobots,
    viewport: seoCollectionService.data.attributes.seo.metaViewport,
    structuredData: seoCollectionService.data.attributes.seo.structuredData,
    canonical: seoCollectionService.data.attributes.seo.canonicalURL,
  };

  return metadata;
}

const ServiceParamsPage = async ({
  params,
}: {
  params: { id: string; service: string };
}) => {
  const id = params.id;
  const service = params.service;

  const { services } = await gql.GetServicesTitleById({
    title: decodeURIComponent(service),
  });

  if (!id) {
    return notFound();
  }

  return (
    <ServiceCollection
      id={id}
      titleServices={services.data}
      title={decodeURIComponent(service)}
    />
  );
};

export default ServiceParamsPage;
