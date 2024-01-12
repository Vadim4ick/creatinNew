import { gql } from "@/graphql/client";
import { PageCase } from "@/page/PageCase";

const CasePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const { case: caseContent } = await gql.GetCaseById({
    id,
  });

  return <PageCase caseContent={caseContent.data.attributes} />;
};

export default CasePage;
