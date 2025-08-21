import { gql } from "@/graphql/client";
import { PageCase } from "@/page/PageCase";
import { getSettledValue } from "@/shared/lib";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const seo = await gql.GetSeoCaseId({ id: params.id });

  if (!seo.case.data || !seo.case.data.attributes) {
    // Добавьте проверку на существование нужных свойств
    return null;
  }

  const metadata = {
    title: seo.case.data.attributes.mobileName,
  };

  return metadata;
}

const CasePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const [caseContentRes, formFeedbackRes, casesRes] = await Promise.allSettled([
    await gql.GetCaseById({
      id,
    }),
    await gql.GetFormFeedback(),
    await gql.GetCasesIds(),
  ]);

  const formFeedback = getSettledValue(formFeedbackRes);
  const caseContent = getSettledValue(caseContentRes);
  const cases = getSettledValue(casesRes);

  if (!caseContent || !caseContent.case.data) {
    return notFound();
  }

  return (
    <PageCase
      //@ts-ignore
      caseContent={caseContent.case.data.attributes}
      ids={cases?.cases.data || []}
      id={id}
      formFeedback={formFeedback?.formFeedback}
    />
  );
};

export default CasePage;
