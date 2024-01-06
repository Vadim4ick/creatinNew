import Image from "next/image";

import { Banner } from "./_section/Banner";
import { gql } from "@/graphql/client";
import { Cases } from "./_section/Cases";
import { Partners } from "./_section/Partners";
import { FormSend } from "./_section/FormSend";
import { MainFooter } from "@/layouts";

const Home = async () => {
  const { homePage } = await gql.GetHomePage();
  const { partner } = await gql.GetPartners();
  const { formFeedback } = await gql.GetFormFeedback();

  return (
    <>
      <h1 className="visually-hidden">Студия разработки и брендинга creatin</h1>

      <main className="page">
        {homePage.data.attributes.HomeBanner && (
          <Banner banner={homePage.data.attributes.HomeBanner} />
        )}

        {homePage.data.attributes.cases && (
          <Cases cases={homePage.data.attributes.cases} />
        )}

        {partner.data.attributes.partners && (
          <Partners partners={partner.data.attributes.partners} />
        )}

        {formFeedback.data.attributes.formFeedback && (
          <FormSend form={formFeedback.data.attributes.formFeedback} />
        )}

        <section className="smile">
          <div className="smile__container">
            <Image src={"/img/smile.png"} width={316} height={300} alt="" />
          </div>
        </section>

        <MainFooter />
      </main>
    </>
  );
};
export default Home;
