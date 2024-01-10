import { gql } from "@/graphql/client";
import { PageComplex } from "@/page/PageComplex";
import { notFound } from "next/navigation";

const ComplexPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const { complexes } = await gql.GetComplexNames();

  return <PageComplex complexesNames={complexes.data} id={id} />;
};

export default ComplexPage;
