import { gql } from "@/graphql/client";
import { PageComplex } from "@/page/PageComplex";
import { notFound } from "next/navigation";

const ComplexPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const { complex } = await gql.GetComplexById({
    id: id,
  });

  if (!complex.data) {
    return notFound();
  }

  return <PageComplex complex={complex.data.attributes} />;
};

export default ComplexPage;
