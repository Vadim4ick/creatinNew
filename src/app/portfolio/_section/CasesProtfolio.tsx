"use client";

import { Case } from "@/components/Case";
import { GetCasesByNameIdsQuery } from "@/graphql/__generated__";

const CasesProtfolio = ({
  cases,
}: {
  cases: GetCasesByNameIdsQuery["cases"]["data"];
}) => {
  return (
    <section className="cases cases--portfolio">
      <div className="cases__row">
        {cases.map((el) => (
          // @ts-ignore
          <Case key={el.id} project={el} />
        ))}
      </div>
    </section>
  );
};

export { CasesProtfolio };
