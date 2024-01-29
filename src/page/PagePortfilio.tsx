"use client";

import { CasesProtfolio } from "@/app/portfolio/_section/CasesProtfolio";
import { BurgerPortfolio } from "@/components/Burger/ui/BurgerPortfolio/BurgerPortfolio";
import {
  GetCasesByNameIdsQuery,
  GetCasesNamesQuery,
} from "@/graphql/__generated__";
import ServiceLayout from "@/layouts/ServiceLayout";
import { useMedia } from "@/shared/hooks/useMedia";
import { useGetCasesByNameId } from "@/shared/services/casesByNameId";
import { Loader } from "@/shared/ui/Loader/Loader";
import { memo, useEffect, useState } from "react";

interface PagePortfolioProps {
  caseNames: GetCasesNamesQuery["caseNames"]["data"];
}

const PagePortfilio = memo((props: PagePortfolioProps) => {
  const { caseNames } = props;

  const [caseIds, setCaseIds] = useState<string[]>([]);
  const [caseIdsForHook, setCaseIdsForHook] = useState<string[]>([]);

  const isDesktop = useMedia("(max-width: 1200px)");

  const { data, isLoading } = useGetCasesByNameId(
    isDesktop.matches ? caseIdsForHook : caseIds
  );

  const [cases, setCases] = useState<
    GetCasesByNameIdsQuery["cases"]["data"] | undefined
  >(undefined);

  useEffect(() => {
    if (data?.cases.data) {
      setCases(data.cases.data);
    } else {
      setCases(undefined);
    }
  }, [data]);

  const setId = (id: string) => {};

  return (
    <>
      <ServiceLayout
        items={caseNames}
        isLoading={false}
        setId={setId}
        footer={
          cases && cases?.length !== 0 ? cases[0].attributes.Footer : undefined
        }
        BugerMenu={() => (
          <BurgerPortfolio
            title="Сортировать по направлениям"
            SubMenuName="Портфолио"
            items={caseNames}
            setCaseIdsForHook={setCaseIdsForHook}
            caseIdsForHook={caseIdsForHook}
          />
        )}
        sidebarItemElement={"input"}
        setInputIds={setCaseIds}
      >
        <div className="page__base">
          {!cases && !isLoading && <div>В данном разделе кейсов пока нет!</div>}
          {isLoading && <Loader />}

          {cases && <CasesProtfolio cases={cases} />}
        </div>
      </ServiceLayout>
    </>
  );
});

export { PagePortfilio };
