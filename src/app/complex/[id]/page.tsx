import { gql } from "@/graphql/client";
import { PageComplex } from "@/page/PageComplex";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { complex } = await gql.GetSeoComplexPage({
    id: params.id,
  });

  if (
    !complex.data ||
    !complex.data.attributes ||
    !complex.data.attributes.seo
  ) {
    // Добавьте проверку на существование нужных свойств
    return null;
  }

  const metadata = {
    title: complex.data.attributes.seo.metaTitle,
    description: complex.data.attributes.seo.metaDescription,
    keywords: complex.data.attributes.seo.keywords,
    robots: complex.data.attributes.seo.metaRobots,
    viewport: complex.data.attributes.seo.metaViewport,
    structuredData: complex.data.attributes.seo.structuredData,
    canonical: complex.data.attributes.seo.canonicalURL,
  };

  return metadata;
}

const ComplexPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const { complexes } = await gql.GetComplexNames();

  return <PageComplex complexesNames={complexes.data} id={id} />;
};

export default ComplexPage;
