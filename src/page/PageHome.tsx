"use client";

import { Banner } from "@/app/_section/Banner";
import { Cases } from "@/app/_section/Cases";
import { FormSend } from "@/app/_section/FormSend";
import { Partners } from "@/app/_section/Partners";
import { Burger } from "@/components/Burger";
import {
  GetFormFeedbackQuery,
  GetHomePageQuery,
  GetPartnersQuery,
} from "@/graphql/__generated__";
import { MainFooter } from "@/layouts";
import { useMedia } from "@/shared/hooks/useMedia";
import { useGetComplexSidebarTitle } from "@/shared/services/complexSidebarTitle";
import { useEffect } from "react";

interface PageHomeProps {
  homePage: GetHomePageQuery["homePage"];
  partner: GetPartnersQuery["partner"];
  formFeedback: GetFormFeedbackQuery["formFeedback"];
}

const PageHome = (props: PageHomeProps) => {
  const { formFeedback, homePage, partner } = props;
  const { data } = useGetComplexSidebarTitle();

  const isDesktop = useMedia("(max-width: 1200px)");

  useEffect(() => {
    document.documentElement.setAttribute(
      "style",
      '--font-primary: "Jeko-otf", Fallback'
    );
  }, []);

  return (
    <>
      {isDesktop.matches && <Burger complexTitle={data} SubMenuName="Услуги" />}

      <h1 className="visually-hidden">Студия разработки и брендинга creatin</h1>

      <main
        onCopy={(event: React.ClipboardEvent<HTMLElement>) => {
          event.preventDefault();
          return false;
        }}
        className="page"
      >
        {/* <Banner /> */}

        {homePage.data.attributes.cases && (
          <Cases cases={homePage.data.attributes.cases} />
        )}

        {partner.data && (
          <Partners partners={partner.data.attributes.partners} />
        )}

        {formFeedback.data && (
          <FormSend form={formFeedback.data.attributes.formFeedback} />
        )}

        {/* <section className="smile">
          <div className="smile__container">
            <Image src={"/img/smile.png"} width={316} height={300} alt="" />
          </div>
        </section> */}

        <MainFooter className="footer--whte home-footer" />
      </main>
    </>
  );
};

export { PageHome };
