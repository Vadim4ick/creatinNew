"use client";

import { Case } from "@/components/Case";
import { useGetAllCases } from "@/shared/services/casesQuery";

const CasesProtfolio = () => {
  const { data, isLoading } = useGetAllCases();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="cases cases--portfolio">
      <div className="cases__row">
        {data?.cases.data.map((el) => (
          // @ts-ignore
          <Case key={el.id} case={el.attributes} />
        ))}
      </div>
    </section>
  );
};

export { CasesProtfolio };
