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
import { gql } from "@/graphql/client";
import { MainFooter } from "@/layouts";
import { useMedia } from "@/shared/hooks/useMedia";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { useEffect } from "react";

interface PageAboutProps {
  serviceNames: GetServicesNamesQuery["serviceNames"];
  partner: GetPartnersQuery["partner"];
  formFeedback: GetFormFeedbackQuery["formFeedback"];
  // studio: GetStudioQuery["studio"];
}

export const useGetStudio = () => {
  return useQuery({
    queryKey: ["Studio"],
    queryFn: () => gql.GetStudio(),
    refetchOnWindowFocus: false,
  });
};

const PageAbout = (props: PageAboutProps) => {
  const { formFeedback, serviceNames, partner } = props;

  const isDesktop = useMedia("(max-width: 1200px)");

  const { data } = useGetStudio();

  useEffect(() => {
    document.documentElement.setAttribute(
      "style",
      '--font-primary: "Jeko-otf", Fallback'
    );
  }, []);

  if (!data?.studio.data) {
    return notFound();
  }

  return (
    <>
      {isDesktop.matches && <BurgerAbout SubMenuName="услуги" />}

      <main className="page">
        {data.studio.data.attributes.video.data && (
          <Video
            srcMedia={data.studio.data.attributes.video.data.attributes}
            className="video--about"
            container={true}
            animation={true}
          />
        )}

        {data.studio.data.attributes.introCards && (
          <About aboutSection={data.studio.data.attributes} />
        )}

        {serviceNames.data && <Quality serviceNames={serviceNames.data} />}

        {partner.data.attributes.partners && (
          <Partners partners={partner.data.attributes.partners} />
        )}

        {data.studio.data.attributes.vacancies && (
          <Vacancies vacancies={data.studio.data.attributes.vacancies} />
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
