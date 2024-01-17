import { gql } from "@/graphql/client";
import { PageHome } from "@/page/PageHome";
import { getRouteHome } from "@/shared/const/pages";

export async function generateMetadata() {
  const seo = await fetch(
    `${process.env.BASE_URL}/api/metadata?page=${getRouteHome()}`
  ).then((res) => res.json());

  const data = await seo;

  if (data.status === "error") {
    throw new Error(data.error.text);
  }

  return data.metadata;
}

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
