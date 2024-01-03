"use client";

import { Case } from "@/components/Case";
import { GetHomePageQuery } from "@/graphql/__generated__";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { SplitTypeAnimation } from "@/shared/hooks/useSplitTypeAnimation";
import { CustomLink } from "@/shared/ui/Link";
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
            <Case key={el.id} case={el.attributes} />
          ))}

          <div className="cases__more">
            <CustomLink variant="chartreuse" iconPosition="right">
              Все кейсы
            </CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cases };
