"use client";

import { Case } from "@/components/Case";
import { GetHomePageQuery } from "@/graphql/__generated__";
import { getRoutePortfolio } from "@/shared/const/pages";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { SplitTypeAnimation } from "@/shared/hooks/useSplitTypeAnimation";
import { BtnArrowThird } from "@/shared/icons/BtnArrowThird";
import { ButtonDetails } from "@/shared/ui/ButtonDetails";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface CasesProps {
  cases: GetHomePageQuery["homePage"]["data"]["attributes"]["cases"];
  className?: string;
}

const Cases = (props: CasesProps) => {
  const { cases, className = "" } = props;

  const router = useRouter();

  const titleRef = useRef(null);

  useIntersectionObserver({
    ref: titleRef,
  });

  return (
    <section className={`cases ${className}`}>
      <div className="cases__container">
        <SplitTypeAnimation bg="#aaaaaa" fg="#181818" refChar={titleRef}>
          <h2 ref={titleRef} className="cases__title _title" data-observe>
            наши кейсы
          </h2>
        </SplitTypeAnimation>

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
