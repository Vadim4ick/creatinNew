"use client";

import { Case } from "@/components/Case";
import { GetCasesByNameIdQuery } from "@/graphql/__generated__";

const CasesProtfolio = ({
  cases,
}: {
  cases: GetCasesByNameIdQuery["cases"]["data"];
}) => {
  return (
    <section className="cases cases--portfolio">
      <div className="cases__row">
        {cases.map((el) => (
          // @ts-ignore
          <Case key={el.id} case={el.attributes} />
        ))}
      </div>
    </section>
  );
};

export { CasesProtfolio };
