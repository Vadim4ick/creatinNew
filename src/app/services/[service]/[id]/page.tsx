import { gql } from "@/graphql/client";
import { ServiceCollection } from "@/page/ServiceCollection";
import { notFound } from "next/navigation";

// export async function generateMetadata({ params }: { params: { id: string } }) {
//   const seo = await gql.GetSeoServiceCollectionPage({ id: params.id });

//   if (!seo.serviceCollection.data.attributes.seo) {
//     return null;
//   }

//   const metadata = {
//     title: seo.serviceCollection.data.attributes.seo.metaTitle,
//     description: seo.serviceCollection.data.attributes.seo.metaDescription,
//     keywords: seo.serviceCollection.data.attributes.seo.keywords,
//     robots: seo.serviceCollection.data.attributes.seo.metaRobots,
//     viewport: seo.serviceCollection.data.attributes.seo.metaViewport,
//     structuredData: seo.serviceCollection.data.attributes.seo.structuredData,
//     canonical: seo.serviceCollection.data.attributes.seo.canonicalURL,
//   };

//   return metadata;
// }

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
