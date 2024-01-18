import { gql } from "@/graphql/client";
import { ServiceCollection } from "@/page/ServiceCollection";
import { notFound } from "next/navigation";

// export async function generateMetadata() {
//   const { serviceCollection } = await gql.GetSeoServiceCollectionPage();

//   if (
//     !serviceCollection.data ||
//     !serviceCollection.data.attributes ||
//     !serviceCollection.data.attributes.seo
//   ) {
//     // Добавьте проверку на существование нужных свойств
//     return null;
//   }

//   const metadata = {
//     title: serviceCollection.data.attributes.seo.metaTitle,
//     description: serviceCollection.data.attributes.seo.metaDescription,
//     keywords: serviceCollection.data.attributes.seo.keywords,
//     robots: serviceCollection.data.attributes.seo.metaRobots,
//     viewport: serviceCollection.data.attributes.seo.metaViewport,
//     structuredData: serviceCollection.data.attributes.seo.structuredData,
//     canonical: serviceCollection.data.attributes.seo.canonicalURL,
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
