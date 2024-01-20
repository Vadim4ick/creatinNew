"use client";

import { Case } from "@/components/Case";
import { GetHomePageQuery } from "@/graphql/__generated__";
import { getRoutePortfolio } from "@/shared/const/pages";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { SplitTypeAnimation } from "@/shared/hooks/useSplitTypeAnimation";
import { BtnArrow } from "@/shared/icons/BtnArrow";
import { CustomLink } from "@/shared/ui/Link";
import Link from "next/link";
import { useRef } from "react";

interface CasesProps {
  cases: GetHomePageQuery["homePage"]["data"]["attributes"]["cases"];
}

const Cases = (props: CasesProps) => {
  const { cases } = props;

  const titleRef = useRef(null);

  useIntersectionObserver({
    ref: titleRef,
  });

  return (
    <section className="cases">
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
            <Link
              href={getRoutePortfolio()}
              className="btn btn--hasarrow btn--alt"
            >
              <span className="btn__text"> Все кейсы</span>

              <span className="btn__arrow">
                <BtnArrow />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cases };
