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
import { useEffect } from "react";

interface PageHomeProps {
  homePage: GetHomePageQuery["homePage"];
  partner: GetPartnersQuery["partner"];
  formFeedback: GetFormFeedbackQuery["formFeedback"];
}

const PageHome = (props: PageHomeProps) => {
  const { formFeedback, homePage, partner } = props;

  // const { preloader, setPreloader } = useContext(HomePreloaderProviderContext);

  const isDesktop = useMedia("(max-width: 1200px)");

  useEffect(() => {
    // const timeout = setTimeout(() => {
    //   setPreloader(false);
    // }, 6000);

    document.documentElement.setAttribute(
      "style",
      '--font-primary: "Jeko-otf", Fallback'
    );

    // const handler = (event) => {
    //   if (
    //     (event.ctrlKey || event.metaKey) &&
    //     String.fromCharCode(event.which).toLowerCase() === "c"
    //   ) {
    //     event.preventDefault();
    //     console.log("Copy command has been disabled");
    //   }
    // };

    // const handler2 = (e) => {
    //   if (e.target.tagName === "IMG") {
    //     e.preventDefault();
    //   }
    // };

    // window.addEventListener("keydown", handler);

    // document.addEventListener("contextmenu", handler2);
    // return () => {
    //   window.removeEventListener("keydown", handler);
    //   document.removeEventListener("contextmenu", handler2);
    // };
  }, []);

  // if (preloader) {
  //   return <HomePreloader />;
  // }

  return (
    <>
      {isDesktop.matches && <Burger SubMenuName="Услуги" />}

      <h1 className="visually-hidden">Студия разработки и брендинга creatin</h1>

      <main
        onCopy={(event: React.ClipboardEvent<HTMLElement>) => {
          event.preventDefault();
          return false;
        }}
        className="page"
      >
        {homePage.data.attributes.HomeBanner && (
          <Banner banner={homePage.data.attributes.HomeBanner} />
        )}

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
