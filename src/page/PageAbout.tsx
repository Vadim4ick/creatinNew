"use client";

import { About } from "@/app/_section/About";
import { FormSend } from "@/app/_section/FormSend";
import { Partners } from "@/app/_section/Partners";
import { Quality } from "@/app/about/_section/Quality";
import { Vacancies } from "@/app/about/_section/Vacancies";
import { BurgerAbout } from "@/components/Burger/ui/BurgerAbout/Burger";
import { Video } from "@/components/Video";
import {
  GetFormFeedbackQuery,
  GetPartnersQuery,
  GetServicesNamesQuery,
  GetStudioQuery,
} from "@/graphql/__generated__";
import { MainFooter } from "@/layouts";
import { useMedia } from "@/shared/hooks/useMedia";

interface PageAboutProps {
  serviceNames: GetServicesNamesQuery["serviceNames"];
  partner: GetPartnersQuery["partner"];
  formFeedback: GetFormFeedbackQuery["formFeedback"];
  studio: GetStudioQuery["studio"];
}

const PageAbout = (props: PageAboutProps) => {
  const { formFeedback, serviceNames, partner, studio } = props;

  const isDesktop = useMedia("(max-width: 1200px)");

  return (
    <>
      {isDesktop.matches && <BurgerAbout SubMenuName="услуги" />}

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

export { PageAbout };
