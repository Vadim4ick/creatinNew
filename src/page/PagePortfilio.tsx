"use client";

import { CasesProtfolio } from "@/app/portfolio/_section/CasesProtfolio";
import {
  GetCasesByNameIdQuery,
  GetCasesNamesQuery,
} from "@/graphql/__generated__";
import ServiceLayout from "@/layouts/ServiceLayout";
import { useGetCasesByNameId } from "@/shared/services/casesByNameId";
import { useEffect, useState } from "react";

interface PagePortfolioProps {
  caseNames: GetCasesNamesQuery["caseNames"]["data"];
}

const PagePortfilio = (props: PagePortfolioProps) => {
  const { caseNames } = props;

  const [caseId, setCaseId] = useState(caseNames[0].id);

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

  return (
    <ServiceLayout
      items={caseNames}
      isLoading={isLoading}
      serviceId={caseId}
      setId={setCaseId}
    >
      <div className="page__base">
        {!cases && <div>В данном разделе кейсов пока нет!</div>}

        {cases && <CasesProtfolio cases={cases} />}
      </div>
    </ServiceLayout>
  );
};

export { PagePortfilio };
