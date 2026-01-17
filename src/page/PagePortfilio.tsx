"use client";

import { FormSend } from "@/app/_section/FormSend";
import { CasesProtfolio } from "@/app/portfolio/_section/CasesProtfolio";
import { BurgerPortfolio } from "@/components/Burger/ui/BurgerPortfolio/BurgerPortfolio";
import {
  GetCasesByNameIdsQuery,
  GetCasesNamesQuery,
  GetFormFeedbackQuery,
} from "@/graphql/__generated__";
import ServiceLayout from "@/layouts/ServiceLayout";
import { useMedia } from "@/shared/hooks/useMedia";
import { useGetCasesByNameId } from "@/shared/services/casesByNameId";
import { Loader } from "@/shared/ui/Loader/Loader";
import { memo, useEffect, useState } from "react";

interface PagePortfolioProps {
  caseNames: GetCasesNamesQuery["caseNames"]["data"];
  formFeedback?: GetFormFeedbackQuery["formFeedback"];
}

const PagePortfilio = memo((props: PagePortfolioProps) => {
  const { caseNames, formFeedback } = props;

  const [caseIds, setCaseIds] = useState<string[]>([]);

  const isDesktop = useMedia("(max-width: 1200px)");

  const { data, isLoading } = useGetCasesByNameId(caseIds);

  const [cases, setCases] = useState<
    GetCasesByNameIdsQuery["cases"]["data"] | undefined
  >(undefined);

  useEffect(() => {
    if (data?.portfolio.data.attributes.cases.data) {
      setCases(data.portfolio.data.attributes.cases.data);
    } else {
      setCases(undefined);
    }
  }, [data]);

  return (
    <>
      <ServiceLayout
        items={[]}
        isLoading={false}
        noReddirect={true}
        BugerMenu={() => (
          <BurgerPortfolio
            title="Сортировать по направлениям"
            SubMenuName="Портфолио"
            items={caseNames}
            setCaseIdsForHook={setCaseIds}
            caseIdsForHook={caseIds}
          />
        )}
        sidebarItemElement={"input"}
        setInputIds={setCaseIds}
        containerClass={!isDesktop.matches ? "" : "conteinerNoPadding"}
      >
        <div className="page__base">
          {!cases && !isLoading && <div>В данном разделе кейсов пока нет!</div>}
          {isLoading && <Loader />}

          {cases && (
            <CasesProtfolio
              cases={cases}
              caseNames={caseNames}
              setInputIds={setCaseIds}
              inputIds={caseIds}
            />
          )}
        </div>
      </ServiceLayout>
      {formFeedback && formFeedback.data && (
        <FormSend
          style={{
            margin: 0,
          }}
          form={formFeedback.data.attributes.formFeedback}
        />
      )}
    </>
  );
});

export { PagePortfilio };
