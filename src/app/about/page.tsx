import { gql } from "@/graphql/client";
import { notFound } from "next/navigation";
import { PageAbout } from "@/page/PageAbout";

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
