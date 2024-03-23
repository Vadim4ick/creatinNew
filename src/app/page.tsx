import { gql } from "@/graphql/client";
import { PageHome } from "@/page/PageHome";

export async function generateMetadata() {
  const { homePage } = await gql.GetSeoHomePage();

  if (
    !homePage.data ||
    !homePage.data.attributes ||
    !homePage.data.attributes.seo
  ) {
    // Добавьте проверку на существование нужных свойств
    return null;
  }

  const metadata = {
    title: homePage.data.attributes.seo.metaTitle,
    description: homePage.data.attributes.seo.metaDescription,
    keywords: homePage.data.attributes.seo.keywords,
    robots: homePage.data.attributes.seo.metaRobots,
    viewport: homePage.data.attributes.seo.metaViewport,
    structuredData: homePage.data.attributes.seo.structuredData,
    canonical: homePage.data.attributes.seo.canonicalURL,
  };

  return metadata;
}

export const revalidate = 0;

const Home = async () => {
  const { homePage } = await gql.GetHomePage();
  const { partner } = await gql.GetPartners();
  const { formFeedback } = await gql.GetFormFeedback();

  return (
    <PageHome
      homePage={homePage}
      partner={partner}
      formFeedback={formFeedback}
    />
  );
};
export default Home;
