import { gql } from "@/graphql/client";
import { notFound } from "next/navigation";
import { PageAbout } from "@/page/PageAbout";

export async function generateMetadata() {
  const { studio } = await gql.GetSeoAboutPage();

  if (!studio.data || !studio.data.attributes || !studio.data.attributes.seo) {
    // Добавьте проверку на существование нужных свойств
    return null;
  }

  const metadata = {
    title: studio.data.attributes.seo.metaTitle,
    description: studio.data.attributes.seo.metaDescription,
    keywords: studio.data.attributes.seo.keywords,
    robots: studio.data.attributes.seo.metaRobots,
    viewport: studio.data.attributes.seo.metaViewport,
    structuredData: studio.data.attributes.seo.structuredData,
    canonical: studio.data.attributes.seo.canonicalURL,
  };

  return metadata;
}

const AboutPage = async () => {
  // const { studio } = await gql.GetStudio();

  const { serviceNames } = await gql.GetServicesNames();

  const { partner } = await gql.GetPartners();

  const { formFeedback } = await gql.GetFormFeedback();

  // if (!studio.data) {
  //   return notFound();
  // }

  return (
    <>
      <PageAbout
        serviceNames={serviceNames}
        // studio={studio}
        partner={partner}
        formFeedback={formFeedback}
      />
    </>
  );
};

export default AboutPage;
