"use client";

import { CasesProtfolio } from "@/app/portfolio/_section/CasesProtfolio";
import {
  GetCasesByNameIdQuery,
  GetCasesNamesQuery,
} from "@/graphql/__generated__";
import ServiceLayout from "@/layouts/ServiceLayout";
import { useGetCasesByNameId } from "@/shared/services/casesByNameId";
import { memo, useEffect, useMemo, useState } from "react";

interface PagePortfolioProps {
  caseNames: GetCasesNamesQuery["caseNames"]["data"];
}

const PagePortfilio = memo((props: PagePortfolioProps) => {
  const { caseNames } = props;

  const [caseIndex, setCaseIndex] = useState(0);
  const caseId = useMemo(() => caseNames[caseIndex].id, [caseIndex]);

  const { data, isLoading } = useGetCasesByNameId(caseId);

  const [cases, setCases] = useState<
    GetCasesByNameIdQuery["cases"]["data"] | undefined
  >(undefined);

  useEffect(() => {
    if (data?.cases.data) {
      setCases(data.cases.data);
    } else {
      setCases(undefined);
    }
  }, [data]);

  const setId = (id: string) => {
    const index = caseNames.findIndex((el) => el.id === id);
    setCaseIndex(index);
  };

  return (
    <>
      <ServiceLayout
        items={caseNames}
        isLoading={isLoading}
        serviceId={caseId}
        setId={setId}
        footer={
          caseIndex !== -1 ? caseNames[caseIndex].attributes.footer : undefined
        }
      >
        <div className="page__base">
          {!cases && <div>В данном разделе кейсов пока нет!</div>}

          {cases && <CasesProtfolio cases={cases} />}
        </div>
      </ServiceLayout>
    </>
  );
});

export { PagePortfilio };
