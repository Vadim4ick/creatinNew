import { PagePortfilio } from "@/page/PagePortfilio";
import { gql } from "@/graphql/client";
import { notFound } from "next/navigation";
import { getRoutePortfolio } from "@/shared/const/pages";

// export async function generateMetadata() {
//   const seo = await fetch(
//     `${process.env.BASE_URL}/api/metadata?page=${getRoutePortfolio()}`
//   ).then((res) => res.json());

//   const data = await seo;

//   if (data.status === "error") {
//     throw new Error(data.error.text);
//   }

//   return data.metadata;
// }

const PortfolioPage = async () => {
  const { caseNames } = await gql.GetCasesNames();

  if (!caseNames.data.length) {
    return notFound();
  }

  return <PagePortfilio caseNames={caseNames.data} />;
};

export default PortfolioPage;
