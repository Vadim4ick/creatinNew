import { PagePortfilio } from "@/page/PagePortfilio";
import { gql } from "@/graphql/client";
import { notFound } from "next/navigation";
import { getRoutePortfolio } from "@/shared/const/pages";

export async function generateMetadata() {
  const { portfolioPage } = await gql.GetSeoPortfolioPage();

  if (
    !portfolioPage.data ||
    !portfolioPage.data.attributes ||
    !portfolioPage.data.attributes.seo
  ) {
    // Добавьте проверку на существование нужных свойств
    return null;
  }

  const metadata = {
    title: portfolioPage.data.attributes.seo.metaTitle,
    description: portfolioPage.data.attributes.seo.metaDescription,
    keywords: portfolioPage.data.attributes.seo.keywords,
    robots: portfolioPage.data.attributes.seo.metaRobots,
    viewport: portfolioPage.data.attributes.seo.metaViewport,
    structuredData: portfolioPage.data.attributes.seo.structuredData,
    canonical: portfolioPage.data.attributes.seo.canonicalURL,
  };

  return metadata;
}

const PortfolioPage = async () => {
  const { caseNames } = await gql.GetCasesNames();

  if (!caseNames.data.length) {
    return notFound();
  }

  return <PagePortfilio caseNames={caseNames.data} />;
};

export default PortfolioPage;
