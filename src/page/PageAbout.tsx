"use client";

import { About } from "@/app/_section/About";
import { VideoAbout } from "@/app/_section/About/ui/VideoAbout/VideoAbout";
import { FormSend } from "@/app/_section/FormSend";
import { Partners } from "@/app/_section/Partners";
import { Quality } from "@/app/about/_section/Quality";
import { Vacancies } from "@/app/about/_section/Vacancies";
import { BurgerAbout } from "@/components/Burger/ui/BurgerAbout/Burger";
import {
  GetFormFeedbackQuery,
  GetPartnersQuery,
  GetServicesNamesQuery,
} from "@/graphql/__generated__";
import { MainFooter } from "@/layouts";
import { useMedia } from "@/shared/hooks/useMedia";
import { useGetStudio } from "@/shared/services/getStudio";
import { Loader } from "@/shared/ui/Loader/Loader";
import { notFound } from "next/navigation";
import { useEffect } from "react";

interface PageAboutProps {
  serviceNames: GetServicesNamesQuery["serviceNames"];
  partner: GetPartnersQuery["partner"];
  formFeedback: GetFormFeedbackQuery["formFeedback"];
}

const PageAbout = (props: PageAboutProps) => {
  const { formFeedback, serviceNames, partner } = props;

  const isDesktop = useMedia("(max-width: 1200px)");

  useEffect(() => {
    document.documentElement.setAttribute(
      "style",
      '--font-primary: "Jeko-otf", Fallback'
    );
  }, []);

  const { data, isLoading } = useGetStudio();

  if (isLoading) {
    return <Loader />;
  }

  if (!data?.studio.data) {
    return notFound();
  }

  return (
    <>
      {isDesktop.matches && <BurgerAbout SubMenuName="услуги" />}

      <main
        onCopy={(event: React.ClipboardEvent<HTMLElement>) => {
          event.preventDefault();
          return false;
        }}
        className="page"
      >
        {data?.studio.data.attributes.video.data && (
          <VideoAbout
            className="video--about"
            src={data.studio.data.attributes.video.data.attributes}
            srcMobile={
              data.studio.data.attributes.videoMobile?.data?.attributes
            }
          />
        )}

        {data?.studio.data.attributes.introCards && (
          <About aboutSection={data.studio.data.attributes} />
        )}

        {serviceNames.data && <Quality serviceNames={serviceNames.data} />}

        {partner.data.attributes.partners && (
          <Partners partners={partner.data.attributes.partners} />
        )}

        {data?.studio.data.attributes.vacancies && (
          <Vacancies vacancies={data.studio.data.attributes.vacancies} />
        )}

        {formFeedback.data.attributes.formFeedback && (
          <FormSend
            className="callback--no-mb"
            form={formFeedback.data.attributes.formFeedback}
          />
        )}

        <MainFooter className="footer--whte footer-main" />
      </main>
    </>
  );
};

export { PageAbout };
