import { gql } from "@/graphql/client";
import { PageOffer } from "@/page/PageOffer";

export async function generateMetadata() {
  const seo = await gql.GetSeoOffers();

  if (!seo.seoOffersPage.data.attributes.seo) {
    return null;
  }

  const metadata = {
    title: seo.seoOffersPage.data.attributes.seo.metaTitle,
    description: seo.seoOffersPage.data.attributes.seo.metaDescription,
    keywords: seo.seoOffersPage.data.attributes.seo.keywords,
    robots: seo.seoOffersPage.data.attributes.seo.metaRobots,
    viewport: seo.seoOffersPage.data.attributes.seo.metaViewport,
    structuredData: seo.seoOffersPage.data.attributes.seo.structuredData,
    canonical: seo.seoOffersPage.data.attributes.seo.canonicalURL,
  };

  return metadata;
}

const OffersPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const { offers } = await gql.GetOffersName();

  return <PageOffer offersName={offers.data} id={id} />;
};

export default OffersPage;
