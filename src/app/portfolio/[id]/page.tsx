import { gql } from "@/graphql/client";
import { PageCase } from "@/page/PageCase";
import { notFound } from "next/navigation";

const CasePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const { case: caseContent } = await gql.GetCaseById({
    id,
  });

  const { cases } = await gql.GetCasesIds();

  if (!caseContent.data) {
    return notFound();
  }

  // console.log(cases.data);
  if (!caseContent.data.attributes.content.length) {
    return <div>Эта страница пока не заполнена</div>;
  }

  return (
    <PageCase
      //@ts-ignore
      caseContent={caseContent.data.attributes}
      ids={cases.data}
      id={id}
    />
  );
};

export default CasePage;
