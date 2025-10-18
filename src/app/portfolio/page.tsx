import { PagePortfilio } from "@/page/PagePortfilio";
import { gql } from "@/graphql/client";
import { notFound } from "next/navigation";
import { getSettledValue } from "@/shared/lib";

export async function generateMetadata() {
  const metadata = {
    title: "Портфолио",
  };

  return metadata;
}

const PortfolioPage = async () => {
  const [caseNamesRes, formFeedbackRes] = await Promise.allSettled([
    await gql.GetCasesNames(),
    await gql.GetFormFeedback(),
  ]);

  const caseNames = getSettledValue(caseNamesRes);
  const formFeedback = getSettledValue(formFeedbackRes);

  if (!caseNames || !caseNames.caseNames.data.length) {
    return notFound();
  }

  return (
    <PagePortfilio
      caseNames={caseNames.caseNames.data}
      formFeedback={formFeedback?.formFeedback}
    />
  );
};

export default PortfolioPage;
