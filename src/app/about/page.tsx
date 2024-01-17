import { gql } from "@/graphql/client";
import { notFound } from "next/navigation";
import { PageAbout } from "@/page/PageAbout";
import { getRouteAbout } from "@/shared/const/pages";

// export async function generateMetadata() {
//   const seo = await fetch(
//     `${process.env.BASE_URL}/api/metadata?page=${getRouteAbout()}`
//   ).then((res) => res.json());

//   const data = await seo;

//   if (data.status === "error") {
//     throw new Error(data.error.text);
//   }

//   return data.metadata;
// }

const AboutPage = async () => {
  const { studio } = await gql.GetStudio();
  const { serviceNames } = await gql.GetServicesNames();

  const { partner } = await gql.GetPartners();

  const { formFeedback } = await gql.GetFormFeedback();

  if (!studio.data) {
    return notFound();
  }

  return (
    <>
      <PageAbout
        serviceNames={serviceNames}
        studio={studio}
        partner={partner}
        formFeedback={formFeedback}
      />
    </>
  );
};

export default AboutPage;
