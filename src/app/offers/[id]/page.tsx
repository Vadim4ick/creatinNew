import { gql } from "@/graphql/client";
import { PageOffer } from "@/page/PageOffer";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { offer } = await gql.GetSeoOffer({
    id: params.id,
  });

  if (!offer.data || !offer.data.attributes || !offer.data.attributes.seo) {
    // Добавьте проверку на существование нужных свойств
    return null;
  }

  const metadata = {
    title: offer.data.attributes.seo.metaTitle,
    description: offer.data.attributes.seo.metaDescription,
    keywords: offer.data.attributes.seo.keywords,
    robots: offer.data.attributes.seo.metaRobots,
    viewport: offer.data.attributes.seo.metaViewport,
    structuredData: offer.data.attributes.seo.structuredData,
    canonical: offer.data.attributes.seo.canonicalURL,
  };

  return metadata;
}

const OffersPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const { serviceNames } = await gql.GetServicesNamesOffer();

  const { formFeedback } = await gql.GetFormFeedback();

  return (
    <PageOffer
      serviceNames={serviceNames.data}
      id={id}
      formFeedback={formFeedback}
    />
  );
};

export default OffersPage;
