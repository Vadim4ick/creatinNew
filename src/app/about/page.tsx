import { gql } from "@/graphql/client";
import { About } from "../_section/About";
import { notFound } from "next/navigation";
import { Partners } from "../_section/Partners";
import { FormSend } from "../_section/FormSend";
import { Vacancies } from "./_section/Vacancies";
import { MainFooter } from "@/layouts";
import { Video } from "@/components/Video";
import { Quality } from "./_section/Quality";

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
      <main className="page">
        <Video className="video--about" container={true} animation={true} />

        {studio.data.attributes.introCards && (
          <About aboutSection={studio.data.attributes} />
        )}

        {serviceNames.data && <Quality serviceNames={serviceNames.data} />}

        {partner.data.attributes.partners && (
          <Partners partners={partner.data.attributes.partners} />
        )}

        {studio.data.attributes.vacancies && (
          <Vacancies vacancies={studio.data.attributes.vacancies} />
        )}

        {formFeedback.data.attributes.formFeedback && (
          <FormSend
            className="callback--no-mb"
            form={formFeedback.data.attributes.formFeedback}
          />
        )}

        <MainFooter className="footer--whte" />
      </main>
    </>
  );
};

export default AboutPage;
