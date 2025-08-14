import { gql } from "@/graphql/client";
import { PageHome } from "@/page/PageHome";
import { getSettledValue } from "@/shared/lib";

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
  const [homePageRes, partnerRes, formFeedbackRes, askedQuestionsRes] =
    await Promise.allSettled([
      await gql.GetHomePage(),
      await gql.GetPartners(),
      await gql.GetFormFeedback(),
      await gql.GetAskedQuestions(),
    ]);

  const homePage = getSettledValue(homePageRes);
  const partner = getSettledValue(partnerRes);
  const formFeedback = getSettledValue(formFeedbackRes);
  const askedQuestion = getSettledValue(askedQuestionsRes);

  return (
    <PageHome
      homePage={homePage?.homePage}
      partner={partner?.partner}
      formFeedback={formFeedback?.formFeedback}
      askedQuestions={askedQuestion?.askedQuestions}
    />
  );
};
export default Home;
