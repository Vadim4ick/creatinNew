import { gql } from "@/graphql/client";
import { PageCase } from "@/page/PageCase";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const seo = await gql.GetSeoCaseId({ id: params.id });

  if (!seo.case.data.attributes.seo) {
    return null;
  }

  const metadata = {
    title: seo.case.data.attributes.seo.metaTitle,
    description: seo.case.data.attributes.seo.metaDescription,
    keywords: seo.case.data.attributes.seo.keywords,
    robots: seo.case.data.attributes.seo.metaRobots,
    viewport: seo.case.data.attributes.seo.metaViewport,
    structuredData: seo.case.data.attributes.seo.structuredData,
    canonical: seo.case.data.attributes.seo.canonicalURL,
  };

  return metadata;
}

const CasePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const { case: caseContent } = await gql.GetCaseById({
    id,
  });

  const { cases } = await gql.GetCasesIds();

  if (!caseContent.data) {
    return notFound();
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
