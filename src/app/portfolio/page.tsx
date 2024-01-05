import { PagePortfilio } from "@/page/PagePortfilio";
import { gql } from "@/graphql/client";
import { notFound } from "next/navigation";

const PortfolioPage = async () => {
  const { caseNames } = await gql.GetCasesNames();

  if (!caseNames.data.length) {
    return notFound();
  }

  return <PagePortfilio caseNames={caseNames.data} />;
};

export default PortfolioPage;
