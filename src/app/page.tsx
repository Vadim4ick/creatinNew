import { gql } from "@/graphql/client";
import { PageHome } from "@/page/PageHome";

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
