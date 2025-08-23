"use client";

import { Case } from "@/components/Case";
import { GetHomePageQuery } from "@/graphql/__generated__";
import { getRoutePortfolio } from "@/shared/const/pages";
import { BtnArrowThird } from "@/shared/icons/BtnArrowThird";
import { ButtonDetails } from "@/shared/ui/ButtonDetails";
import { useRouter } from "next/navigation";

interface CasesProps {
  cases: GetHomePageQuery["homePage"]["data"]["attributes"]["cases"];
  className?: string;
}

const Cases = (props: CasesProps) => {
  const { cases, className = "" } = props;

  const router = useRouter();

  return (
    <section className={`cases ${className}`}>
      <div className="cases__container">
        <h2 className="cases__title">Наши партнёры</h2>

        <div className="cases__row">
          {cases.data.map((el) => (
            // @ts-ignore
            <Case key={el.id} project={el} />
          ))}

          <div className="cases__more">
            <ButtonDetails
              text="Все кейсы"
              Icon={() => <BtnArrowThird />}
              onClick={() => router.push(getRoutePortfolio())}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cases };
